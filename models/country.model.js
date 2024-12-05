import mongoose, { Schema } from "mongoose";

// Define the schema for the countries
const CountryListSchema = new Schema({
  allCountry: {
    type: [String],  // Array of country names (all countries)
    required: true,  // This is required as it contains all countries
  },
  preferredCountry: {
    type: [String],  // Array of preferred country names
    required: true,  // Preferred countries list is also required
  }
}, {
  timestamps: true,  // Automatically add createdAt and updatedAt fields
});

// Create the CountryList model
export const CountryList = mongoose.model("CountryList", CountryListSchema);
