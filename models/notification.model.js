import mongoose, { Schema, Document, Types } from 'mongoose';
import { NOTIFICATION_TITLES } from '../utils/notificationTitles.js';

// interface Notification extends Document {
//   title: string;
//   message: string;
//   sender: {
//     userId: Types.ObjectId;
//     role: 'admin' | 'agent' | 'student';
//   };
//   recipient: {
//     userId?: Types.ObjectId;
//     role?: 'admin' | 'agent' | 'student';
//     isGroup: boolean;
//   };
//   status: 'sent' | 'delivered' | 'read';
//   readBy: Types.ObjectId[];
//   isRead: boolean;
//   createdAt: Date;
//   updatedAt: Date;
// }

const notificationTitles = Object.keys(NOTIFICATION_TITLES);


// const notificationSchema = new Schema<Notification>(
const notificationSchema = new Schema(
  {
    title: { type: String, required: true, enum : [...notificationTitles] },
    message: { type: String, required: true },
    sender: {
      userId: { type: Schema.Types.ObjectId },
      role: { type: String, enum: ['0', '2', '3'], required: true },
    },
    recipient: {
      userId: { type: Schema.Types.ObjectId },
      role: { type: String, enum: ['0', '2', '3'] },
      isGroup: { type: Boolean, default: false },
    },
    status: { type: String, enum: ['unseen', 'seen'], default: 'unseen' },
    isRead: { type: Boolean, default: false },
    routePath: { type: String, required: true, default: '/'},
    pathData: {
      type: Object,
      default: {},
    },
    isSeenBy: { type: String, required: false},
    state: { type: String, required: false },
    country: { type: String, required: false }
  },
  { timestamps: true }
);

// export const Notofications = mongoose.model<Notification>('Notification', notificationSchema);
export const Notifications = mongoose.model('Notification', notificationSchema);
