import { types } from "@babel/core";
import mongoose, { Schema } from "mongoose";

// Institute Schema
const InstituteSchema = new Schema(
  {
    instituteName: {
      type: String,
      required: true,
      trim: true,
    },
    instituteImg: {
      type: String,
    },
    country: {
      type: String,
      required: true,
      trim: true,
    },
    offerLetterPrice: {
      type: Number,
    },
    aboutCollegeOrInstitute: {
      type: String,
    },
    keyHighlights: {
      type: String,
    },
    popularCourses: {
      type: String,
    },
    admissionAndFacilities: {
      type: String,
    },
    requirements: {
      type: String,
    },
    inTake: {
      type: [String],
    },
    instituteStatus: {
      type: String,
      enum: ["open", "close"],
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Create Institute model
export const Institute = mongoose.model("Institute", InstituteSchema);
