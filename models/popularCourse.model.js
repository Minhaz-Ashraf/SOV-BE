import mongoose, { Schema } from "mongoose";

const CourseSchema = new Schema({
    courseName: {
    type: String,  
    required: true,  
  },
}, {
  timestamps: true,  
});

export const PopularCourse = mongoose.model("PopularCourse", CourseSchema);
