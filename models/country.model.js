import mongoose, { Schema } from "mongoose";

// Define the schema for the countries
const CountryListSchema = new Schema({
  allCountry: {
    type: [String], 
    required: true,
  },
  preferredCountry: {
    type: [String],  
    required: true, 
  }
}, {
  timestamps: true,  
});

// Create the CountryList model
export const CountryList = mongoose.model("CountryList", CountryListSchema);
