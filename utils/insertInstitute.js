import mongoose from 'mongoose';
import { Institute } from "../models/institute.model.js"; // Adjust the import path if necessary
import connectDb from '../db/index.js';
import {instituteData} from "./instituteData.js"

async function insertInstitutes() {
  try {
    // Connect to the database
    await connectDb();

    // Insert data into the database
    await Institute.insertMany(instituteData);
    console.log('Institutes inserted successfully!');
  } catch (error) {
    console.error('Error inserting institutes:', error);
  } finally {
    // Disconnect from the database
    mongoose.connection.close();
  }
}

insertInstitutes();
