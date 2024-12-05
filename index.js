import http from "http";
import app from "./server.js";
import dotenv from "dotenv";
import connectDb from "./db/index.js";
import { SocketServiceSingleton } from "./socketService/socketService.js";

dotenv.config({
  path: "./env",
});

const socketService = SocketServiceSingleton.getInstance();

let httpServerInstance;

async function startHttpServer() {
  httpServerInstance = http.createServer(app);
  httpServerInstance.on("error", (error) => {
    console.error("HTTP server error:", error);
  });
  await new Promise((resolve, reject) => {
    httpServerInstance.listen(process.env.PORT, () => {
      console.log("HTTP server started on port", process.env.PORT);
      resolve()
    });
  });
}

const startUp = async () => {
  try {
    await startHttpServer();
    await socketService.startSocketServer(httpServerInstance);
    await connectDb();
  } catch (err) {
    console.log(err);
  }
};

startUp();
