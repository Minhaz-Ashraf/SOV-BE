import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
// database connection
const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${process.env.DB_NAME}`
    );
    console.log("database connected!! ", connectionInstance.connection.host);
  } catch (error) {
    console.log("database connection error", error);
    throw error;
  }
};

export default connectDb;
