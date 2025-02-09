import mongoose from "mongoose";
import { countryWithState } from "../models/CountryState.model.js";
import { countryStateData } from "./CountryStateData.js";
import connectDb from "../db/index.js";
import { CountryList } from "../models/country.model.js";
import { allCountry, preferredCountry } from "./countryData.js";

// (async () => {
//   try {
//     await connectDb();

//     const countryList = new CountryList({
//       allCountry,
//       preferredCountry,

//     });

//     await countryList.save();
//     console.log("Country list saved successfully!");

//   } catch (error) {
//     console.error("Error saving country list:", error);
//   } finally {
//     // Close the connection
//     mongoose.connection.close();
//   }
// })();

//country and state data insert
// (async () => {
//   try {
//     connectDb()

//     console.log("Connected to DB");

//     // Group states by country
//     const groupedData = countryStateData.reduce((acc, { country, state }) => {
//       if (!acc[country]) {
//         acc[country] = { country, states: [] };
//       }
//       acc[country].states.push(state);
//       return acc;
//     }, {});

//     const formattedData = Object.values(groupedData);

//     // Insert into database
//     await countryWithState.insertMany(formattedData);

//     console.log("Country list saved successfully!");
//   } catch (error) {
//     console.error("Error saving country list:", error);
//   } finally {
//     mongoose.connection.close();
//   }
// })();
