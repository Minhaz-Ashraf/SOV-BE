import mongoose from "mongoose";
import connectDb from "../db/index.js";
import { CountryList } from "../models/country.model.js";
import {allCountry, preferredCountry} from "./countryData.js"


(async () => {
  try {
    await connectDb();

    const countryList = new CountryList({
      allCountry,
      preferredCountry,
      
    });

    await countryList.save();
    console.log("Country list saved successfully!");

  } catch (error) {
    console.error("Error saving country list:", error);
  } finally {
    // Close the connection
    mongoose.connection.close();
  }
})();