// import necessary modules
import mongoose from "mongoose";
import connectDb from "../db/index.js"; // Adjust this path as necessary
import { Course } from "../models/course.model.js";
import { newElevenDatas, popularCourses } from './courseData.js';
import { PopularCourse } from "../models/PopularCourseModel.js";

// Async IIFE to insert new course data into the Course collection
(async () => {
  try {
    // Connect to the database
    await connectDb();

    // Prepare the course data
    const courseDocuments = popularCourses.map(courseName => ({
      courseName, // Map courseName field to the schema
    }));

    // Get a list of existing course names from the database
    const existingCourses = await PopularCourse.find(
      { courseName: { $in: popularCourses } },
      { courseName: 1, _id: 0 }
    ).lean();

    // Extract only the course names
    const existingCourseNames = existingCourses.map(course => course.courseName);

    // Filter out courses that already exist
    const newCourses = courseDocuments.filter(
      course => !existingCourseNames.includes(course.courseName)
    );

    // Insert only the new courses
    if (newCourses.length > 0) {
      const insertResult = await PopularCourse.insertMany(newCourses);
      console.log("Number of courses inserted:", insertResult.length);
    } else {
      console.log("No new courses to insert. All courses already exist.");
    }

  } catch (error) {
    console.error("Error inserting course data:", error);
  } finally {
    mongoose.connection.close();
  }
})();

