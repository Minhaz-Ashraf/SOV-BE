import mongoose from "mongoose";
import connectDb from "../db/index.js";
import { CountryList } from "../models/country.model.js";
import {allCountry, preferredCountry} from "./countryData.js"


// Async IIFE to insert countries into the database
(async () => {
  try {
    // Connect to the database
    await connectDb();

    // Create a new document for the country list
    const countryList = new CountryList({
      allCountry,
      preferredCountry,
      
    });

    // Save the document to the database
    await countryList.save();
    console.log("Country list saved successfully!");

  } catch (error) {
    console.error("Error saving country list:", error);
  } finally {
    // Close the connection
    mongoose.connection.close();
  }
})();