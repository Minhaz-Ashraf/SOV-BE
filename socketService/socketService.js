import { Server as SocketIO } from "socket.io";
import { decryptData } from "../utils/EncryptionUtility.js";
import { createNotification, getNotificationsForAdmin, getNotificationsForUser, markAllNotificationsAsSeen, markNotificationAsRead, deleteNotificationsForUser, countUnseenForUser, countUnseenForAdmin, deleteAllNotificationsForUser } from "../helpers/notification.helper.js";

class SocketService {
  constructor() {
    this.SocketServer = undefined;
  }
  startSocketServer = async (serverInstance) => {
    console.log("starting the socketServer");
    this.socketServer = new SocketIO(serverInstance, {
      serveClient: false,
      path: "/notifications/",
      log: true,
    });

    //this is to get the message logs on frontend
    const emitOnMessage = (socket, eventName, payload, status = "success") => {
      socket.emit("onMessage", {
        eventName,
        payload,
        status,
        timestamp: new Date().toISOString(),
      });
    };
    
    this.socketServer.on("connection", async (socket) => {
      const { encryptedData } = socket.handshake.query;
      let decryptedDetails;
      try {
        decryptedDetails = decryptData(encryptedData);
        console.log("Decrypted user details:", decryptedDetails);
        decryptedDetails = JSON.parse(decryptedDetails);

        if (!decryptedDetails || !decryptedDetails._id) {
          console.log("Invalid userId in decrypted data");
          socket.disconnect();
          return;
        }
      } catch (err) {
        console.log("Error decrypting data", err);
        return;
      }
      // Join a room specific to the userId
      socket.join(`USER_${decryptedDetails._id}`);
      console.log(`Socket joined room USER_${decryptedDetails._id}`);
      if(decryptedDetails.role === "0" || decryptedDetails.role === "1"){
        socket.join("GLOBAL_NOTIFICATION_ALERT_FOR_ADMINS");
        console.log(`Socket joined room GLOBAL_NOTIFICATION_ALERT_FOR_ADMINS`);
      }

      socket.on("error", (error) => {
        console.log("Socket error", error);
      });

      socket.on("disconnect", () => {
        console.log("Socket disconnected");
      });

      // Listen to specific notification events

      socket.on("NOTIFICATION_STUDENT_TO_ADMIN", async (notificationData) => {
        const { title, message, recieverId, path, pathData} = notificationData;
        // here it is
        const formattedNotification = {
          title : title?.trim(),
          message,
          sender: {
            userId: decryptedDetails._id,
            role: '3',
          },
          recipient: {
            role: '0',
            isGroup: true,
          },
          pathData: pathData || {},
          routePath: path
        };
        const createdNotification = await createNotification(formattedNotification);
        this.socketServer
        .to("GLOBAL_NOTIFICATION_ALERT_FOR_ADMINS")
        .emit("GLOBAL_NOTIFICATION_ADMIN_ALERT", createdNotification);
        emitOnMessage(socket, "NOTIFICATION_STUDENT_TO_ADMIN", createdNotification);
        // console.log("Notification data from student to admin:", notificationData);
      });

      socket.on("NOTIFICATION_AGENT_TO_ADMIN", async (notificationData) => {
        const { title, message, recieverId, path, pathData} = notificationData;
        // here it is
        const formattedNotification = {
          title : title?.trim(),
          message,
          sender: {
            userId: decryptedDetails._id,
            role: '2',
          },
          recipient: {
            role: '0',
            isGroup: true,
          },
          pathData: pathData || {},
          routePath: path
        };
        const createdNotification = await createNotification(formattedNotification);
        this.socketServer
        .to("GLOBAL_NOTIFICATION_ALERT_FOR_ADMINS")
        .emit("GLOBAL_NOTIFICATION_ADMIN_ALERT", createdNotification);
        emitOnMessage(socket, "NOTIFICATION_AGENT_TO_ADMIN", createdNotification);
        // console.log("Notification data from agent to admin:", createdNotification);
      });

      // Admin to Student
      socket.on("NOTIFICATION_ADMIN_TO_STUDENT", async (notificationData) => {
        const { title, message, recieverId, path, pathData} = notificationData;
        // here it is
        const formattedNotification = {
          title : title?.trim(),
          message,
          sender: {
            role: '0',
          },
          recipient: {
            userId: recieverId,
            role: '3',
            isGroup: false,
          },
          pathData: pathData || {},
          routePath: path
        };
        const createdNotification = await createNotification(formattedNotification);
        this.socketServer
        .to(`USER_${recieverId}`)
        .emit("GLOBAL_NOTIFICATION_STUDENT_ALERT", createdNotification);
        emitOnMessage(socket, "NOTIFICATION_ADMIN_TO_STUDENT", createdNotification);
        // console.log("Notification data from admin to student:", createdNotification);
      });

      // Admin to Agent
      socket.on("NOTIFICATION_ADMIN_TO_AGENT", async (notificationData) => {
        const { title, message, recieverId, path, pathData} = notificationData;
        // here it is
        const formattedNotification = {
          title : title?.trim(),
          message,
          sender: {
            role: '0',
          },
          recipient: {
            userId: recieverId,
            role: '2',
            isGroup: false,
          },
          pathData: pathData || {},
          routePath: path
        };
        const createdNotification = await createNotification(formattedNotification);
        this.socketServer
        .to(`USER_${recieverId}`)
        .emit("GLOBAL_NOTIFICATION_AGENT_ALERT", createdNotification);
        emitOnMessage(socket, "NOTIFICATION_ADMIN_TO_AGENT", createdNotification);
        // console.log("Notification data from admin to agent:", createdNotification);
      });

      socket.on("GET_NOTIFICATIONS_FOR_ADMIN", async ({page, limit}) => {
        
        const notifications = await getNotificationsForAdmin(page, limit);

        this.socketServer
        .to(`GLOBAL_NOTIFICATION_ALERT_FOR_ADMINS`)
        .emit("GET_NOTIFICATIONS_FOR_ADMIN", notifications);
        emitOnMessage(socket, "GET_NOTIFICATIONS_FOR_ADMIN", notifications);
        // console.log("Notification data from admin to agent:", notifications);
      });

      socket.on("GET_NOTIFICATIONS_FOR_USER", async ({page, limit}) => {

        const notifications = await getNotificationsForUser(decryptedDetails._id, page, limit);
        
        this.socketServer
        .to(`USER_${decryptedDetails._id}`)
        .emit("GET_NOTIFICATIONS_FOR_USER", notifications);
        emitOnMessage(socket, "GET_NOTIFICATIONS_FOR_USER", notifications);
        // console.log("Notification data from admin to agent:", notifications);
      });

      socket.on("GET_UNREAD_COUNT", async (state) => {
        let unreadCount
        if(state === "emitForUser"){
          unreadCount = await countUnseenForUser(decryptedDetails._id);
          this.socketServer
          .to(`USER_${decryptedDetails._id}`)
          .emit("GET_UNREAD_COUNT", unreadCount);
        }else{
          unreadCount = await countUnseenForAdmin();
          this.socketServer
          .to(`GLOBAL_NOTIFICATION_ALERT_FOR_ADMINS`)
          .emit("GET_UNREAD_COUNT", unreadCount);
        }
        emitOnMessage(socket, "GET_UNREAD_COUNT", unreadCount);
        console.log("GET_UNREAD_COUNT : ", unreadCount);
      });

      socket.on("NOTIFICATION_SEEN_BY_ADMIN", async () => {
        // update seen status
        const notification = await markAllNotificationsAsSeen(undefined, "seen");
        this.socketServer
        .to(`GLOBAL_NOTIFICATION_ALERT_FOR_ADMINS`)
        .emit("NOTIFICATION_SEEN_STATUS_UPDATE");
        emitOnMessage(socket, "NOTIFICATION_SEEN_BY_ADMIN", "status seen updated successfully for admin");
        // console.log("NOTIFICATION_SEEN_BY_ADMIN:", notification);
      });

      socket.on("NOTIFICATION_SEEN_BY_USER", async () => {
        // update seen status
        const notification = await markAllNotificationsAsSeen(decryptedDetails._id, "seen");
        // this.socketServer
        // .to(`USER_${decryptedDetails._id}`)
        // .emit("NOTIFICATION_SEEN_STATUS_UPDATE");
        emitOnMessage(socket, "NOTIFICATION_SEEN_BY_USER", "status seen updated successfully for user");
        // console.log("NOTIFICATION_SEEN_BY_USER:", notification);
      });
      socket.on("NOTIFICATION_ALL_READ_BY_ADMIN", async () => {
        // update seen status
        const notification = await markAllNotificationsAsSeen(undefined, "read");
        this.socketServer
        .to(`GLOBAL_NOTIFICATION_ALERT_FOR_ADMINS`)
        .emit("NOTIFICATION_SEEN_STATUS_UPDATE");
        emitOnMessage(socket, "NOTIFICATION_ALL_READ_BY_ADMIN", "status all read updated successfully for admins");
        // console.log("Notification all read for admin:", notification);
      });

      socket.on("NOTIFICATION_ALL_READ_BY_USER", async () => {
        // update seen status
        const notification = await markAllNotificationsAsSeen(decryptedDetails._id, "read");
        // this.socketServer
        // .to(`USER_${decryptedDetails._id}`)
        // .emit("NOTIFICATION_SEEN_STATUS_UPDATE");
        emitOnMessage(socket, "NOTIFICATION_ALL_READ_BY_USER", "status all read updated successfully for user");
        // console.log("Notification all read for user:", notification);
      });

      socket.on("NOTIFICATION_IS_READ", async (notificationData) => {
        // update read status
        //yet to think how it will work
        const { _id, byAdmin} = notificationData;
        const notification = await markNotificationAsRead(_id);
        if(!byAdmin) {
          this.socketServer
         .to(`USER_${decryptedDetails._id}`)
         .emit("NOTIFICATION_READ_STATUS_UPDATE", _id);
        }else {
          this.socketServer
         .to(`GLOBAL_NOTIFICATION_ALERT_FOR_ADMINS`)
         .emit("NOTIFICATION_READ_STATUS_UPDATE", _id);
        }
        emitOnMessage(socket, "NOTIFICATION_SEEN_STATUS_UPDATE", "status updated successfully");
        console.log("NOTIFICATION_SEEN_STATUS_UPDATE:", notification);
      });

      socket.on("DELETE_NOTIFICATION", async (notificationId) => {
        const notification = await deleteNotificationsForUser(notificationId)
        this.socketServer
        .emit("DELETE_NOTIFICATION", "deleted successfully");
        console.log("delete single notification:", notification);
      });
      socket.on("DELETE_ALL_NOTIFICATION", async (reciverId, type) => {
        let notification;
        if(type === "emitForUser"){
          notification = await deleteAllNotificationsForUser(reciverId);
        }else {
          notification = await deleteAllNotificationsForUser(undefined);
        }
        this.socketServer
        .emit("DELETE_ALL_NOTIFICATION", "deleted successfully");
        console.log("delete all notifications:", notification);
      });

      socket.on("DELETE_AUTH_TOKEN", async (data) => {
        const { reason, userId } = data;
        this.socketServer.to(`USER_${userId}`).emit("DELETE_AUTH_TOKEN", reason);
        console.log("to the agent/student for token deletion", reason);
      });

    });
  };
}

export const SocketServiceSingleton = new (class SocketServiceSingleton {
  constructor() {
    if (!SocketServiceSingleton.instance) {
      SocketServiceSingleton.instance = new SocketService();
    }
  }
  getInstance() {
    return SocketServiceSingleton.instance;
  }
})();
