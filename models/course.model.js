import mongoose, { Schema } from "mongoose";

// Define the schema for the courses
const CourseSchema = new Schema({
    courseName: {
    type: String,  // Course title
    required: true,  // The title is required
  },
}, {
  timestamps: true,  // Automatically add createdAt and updatedAt fields
});

// Create the Course model
export const Course = mongoose.model("Course", CourseSchema);
