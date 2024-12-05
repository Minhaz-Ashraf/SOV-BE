import { CountryList } from "../models/country.model.js";
import { Course } from "../models/course.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const getAllCountries = asyncHandler(async (req, res) => {

    // Fetch all countries from the database
    const countries = await CountryList.find({}, { allCountry: 1, _id: 0 });
  
    // Check if countries exist
    if (!countries || countries.length === 0) {
      return res.status(404).json(new ApiResponse(404, {}, "No countries found"));
    }
  
    // Return the countries data
    return res.status(200).json(new ApiResponse(200, countries, "Countries fetched successfully"));
  });

  const getPreferredCountries = asyncHandler(async (req, res) => {
    // Fetch only the preferredCountry field from the database
    const preferredCountries = await CountryList.find({}, { preferredCountry: 1, _id: 0 });
  
    // Check if preferred countries exist
    if (!preferredCountries || preferredCountries.length === 0) {
      return res.status(404).json(new ApiResponse(404, {}, "No preferred countries found"));
    }
  
    // Return the preferred country data
    return res.status(200).json(new ApiResponse(200, preferredCountries, "Preferred countries fetched successfully"));
  });

  const getAllCourses = asyncHandler(async (req, res) => {
    // Fetch all courses from the database
    const courses = await Course.find({}, { courseName: 1, _id: 0 });
  
    // Check if courses exist
    if (!courses || courses.length === 0) {
      return res.status(404).json(new ApiResponse(404, {}, "No courses found"));
    }
  
    // Return the courses data
    return res.status(200).json(new ApiResponse(200, courses, "Courses fetched successfully"));
  });

  export {getAllCountries, getPreferredCountries, getAllCourses}
  