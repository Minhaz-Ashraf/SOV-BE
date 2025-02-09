import { CountryList } from "../models/country.model.js";
import { countryWithState } from "../models/CountryState.model.js";
import { Course } from "../models/course.model.js";
import { PopularCourse } from "../models/popularCourseModel.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getAllCountries = asyncHandler(async (req, res) => {
  const countries = await CountryList.find({}, { allCountry: 1, _id: 0 });

  if (!countries || countries.length === 0) {
    return res.status(404).json(new ApiResponse(404, {}, "No countries found"));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, countries, "Countries fetched successfully"));
});

const getPreferredCountries = asyncHandler(async (req, res) => {
  const preferredCountries = await CountryList.find(
    {},
    { preferredCountry: 1, _id: 0 }
  );

  if (!preferredCountries || preferredCountries.length === 0) {
    return res
      .status(404)
      .json(new ApiResponse(404, {}, "No preferred countries found"));
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        preferredCountries,
        "Preferred countries fetched successfully"
      )
    );
});

const getAllCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find({}, { courseName: 1, _id: 0 });

  if (!courses || courses.length === 0) {
    return res.status(404).json(new ApiResponse(404, {}, "No courses found"));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, courses, "Courses fetched successfully"));
});
const getAllPopularCourses = asyncHandler(async (req, res) => {
  const courses = await PopularCourse.find({}, { courseName: 1, _id: 0 });

  if (!courses || courses.length === 0) {
    return res.status(404).json(new ApiResponse(404, {}, "No courses found"));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, courses, "Courses fetched successfully"));
});
const getAllCountryState = asyncHandler(async (req, res) => {
  const data = await countryWithState.find({})

  if (!data || data.length === 0) {
    return res.status(404).json(new ApiResponse(404, {}, "No data found"));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, data, "Data fetched successfully"));
});

export {
  getAllCountries,
  getPreferredCountries,
  getAllCourses,
  getAllPopularCourses,
  getAllCountryState
};
