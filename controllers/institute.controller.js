import { Institute } from "../models/institute.model.js"; // Adjust the import based on your project structure
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import path from "path";
import fs from "fs";
import { parse as json2csv } from "json2csv";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const getAllInstitute = asyncHandler(async (req, res) => {
  const { instituteName, country, sortOrder = 'asc' } = req.query;

  // Build the query object
  const query = {};
  if (instituteName) {
      query.instituteName = new RegExp(instituteName, "i"); // Case-insensitive search
  }
  if (country) {
      query.country = new RegExp(country, "i"); // Case-insensitive search
  }

  // Find all matching institutes
  const institutes = await Institute.find(query)
      .sort({ createdAt: sortOrder === 'desc' ? -1 : 1 }) // Sort by createdAt and sortOrder
      .exec();

  // If no institutes are found, return 404
  if (!institutes || institutes.length === 0) {
      return res.status(404).json(new ApiResponse(404, [], "No institutes found"));
  }

  // Return the list of institutes directly
  return res.status(200).json(new ApiResponse(200, institutes, "Institutes fetched successfully"));
});

const addInstitute = asyncHandler(async(req, res)=>{
    const { instituteName, country, instituteImg, offerLetterPrice, aboutCollegeOrInstitute, keyHighlights, popularCourses, admissionAndFacilities } = req.body;

    if (!instituteName || !country) {
      return res.status(400).json({
        success: false,
        message: "Institute name and country are required",
      });
    }

    const institute = new Institute({
      instituteName,
      country,
      instituteImg,
      offerLetterPrice,
      aboutCollegeOrInstitute,
      keyHighlights,
      popularCourses,
      admissionAndFacilities
    });

    await institute.save();


    return res.status(200).json(new ApiResponse(200, institute, "Institute added successfully"))

})

const editInstitute = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { instituteName, country } = req.body;
  
    if (!instituteName || !country) {
      return res.status(400).json({
        success: false,
        message: "Institute name and country are required",
      });
    }
  
    const updatedInstitute = await Institute.findByIdAndUpdate(
      id,
      { instituteName, country },
      { new: true, runValidators: true }
    );
  
    if (!updatedInstitute) {
      return res.status(404).json({
        success: false,
        message: "Institute not found",
      });
    }
  
    return res.status(200).json(
      new ApiResponse(200, updatedInstitute, "Institute updated successfully")
    );
  });

  const deleteInstitute = asyncHandler(async (req, res) => {
    const { id } = req.params;
  
    const deletedInstitute = await Institute.findByIdAndDelete(id);
  
    if (!deletedInstitute) {
      return res.status(404).json({
        success: false,
        message: "Institute not found",
      });
    }
  
    // Return success response
    return res.status(200).json(
      new ApiResponse(200, {}, "Institute deleted successfully")
    );
  });


  const downloadAllInstitutesAsCSV = asyncHandler(async (req, res) => {
    try {
      const { instituteName, country, sortOrder = "asc" } = req.query;
  
      const query = {};
      if (instituteName) {
        query.instituteName = new RegExp(instituteName, "i"); // Case-insensitive match
      }
      if (country) {
        query.country = new RegExp(country, "i"); // Case-insensitive match
      }
  
      // Fetch all matching institutes sorted by creation date
      const institutes = await Institute.find(query)
        .sort({ createdAt: sortOrder === "desc" ? -1 : 1 })
        .lean();
  
      // Check if no institutes are found
      if (!institutes || institutes.length === 0) {
        return res
          .status(404)
          .json(new ApiResponse(404, {}, "No institutes found to download"));
      }
  
      // Prepare CSV data
      const csvDataString = json2csv(institutes, {
        fields: ["instituteName",
          "country",
          "offerLetterPrice",
          "aboutCollegeOrInstitute",
          "keyHighlights",
          "popularCourses",
          "admissionAndFacilities"],
      });
  
      const folderPath = path.join(__dirname, "..", "csv");
      const filePath = path.join(folderPath, "institutes.csv");
  
      // Ensure the folder exists
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
      }
  
      // Write the CSV data to a file
      fs.writeFileSync(filePath, csvDataString);
  
      // Send the CSV file as a response
      res.download(filePath, "institutes.csv", (err) => {
        if (err) {
          console.error(err);
          res.status(500).send("Internal Server Error");
        }
      });
    } catch (error) {
      console.error("Error downloading institutes as CSV:", error);
      res.status(500).send("Internal Server Error");
    }
  });

export { getAllInstitute, addInstitute, editInstitute, deleteInstitute, downloadAllInstitutesAsCSV };
