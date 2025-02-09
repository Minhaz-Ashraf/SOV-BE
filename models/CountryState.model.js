import mongoose, { Schema } from "mongoose";

const countryStateSchema = new Schema({
    country: {
      type: String,
      required: true,
    },
    states: [
      {
        type: String,
        required: true,
      },
    ],
  });
export const  countryWithState = mongoose.model("CountryWithState", countryStateSchema)