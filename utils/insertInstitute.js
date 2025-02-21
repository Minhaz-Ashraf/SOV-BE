import mongoose from 'mongoose';
import connectDb from '../db/index.js';
import { Institute } from '../models/institute.model.js';
import { baseData, instituteData, websiteData } from './instituteData.js';
import { canadaInstituteData, updatedData } from './UpdatedInstituteData.js';
import { deleteStudentData } from '../controllers/studentInformation.controller.js';

async function updateInstitutes() {
  try {
    await connectDb(); // Ensure your database is connected

    const institutes = instituteData.flat();

    for (const institute of institutes) {
      const {
        instituteName,
        country,
        popularCourses,
        aboutCollegeOrInstitute,
        keyHighlights,
        admissionAndFacilities,
        inTake,
      } = institute;

      // Ensure `popularCourses` is treated as an array
      const courses = Array.isArray(popularCourses)
        ? popularCourses
        : popularCourses.split(",").map((course) => course.trim()); // Split by comma if it's a string

      // Loop through each course in courses
      for (const courseName of courses) {
        // Check if a document with the same instituteName, country, and courseName exists
        const existingDocument = await Institute.findOne({
          instituteName,
          country,
          popularCourses: courseName, // Check for the specific course
        });

        if (existingDocument) {
          console.log(
            `Document with course "${courseName}" already exists for "${instituteName}".`
          );
        } else {
          // Create a new document for each course
          await Institute.create({
            instituteName,
            country,
            popularCourses: courseName, // Save the courseName as a string
            aboutCollegeOrInstitute,
            keyHighlights,
            admissionAndFacilities,
            inTake: inTake.split("&").map((item) => item.trim()), // Convert inTake to array
            websiteUrl,
          });
          console.log(
            `New document created for course "${courseName}" at "${instituteName}".`
          );
        }
      }
    }

    console.log("Institutes updated successfully with individual courses!");
  } catch (error) {
    console.error("Error updating institutes:", error);
  } finally {
    mongoose.connection.close();
  }
}


// updateInstitutes();



async function updateInstituteCanada() {
  try {
    await connectDb(); // Ensure database connection

    const institutes = canadaInstituteData.flat();

    for (const institute of institutes) {
      const {
        instituteName,
        country,
        popularCourses,
        aboutCollegeOrInstitute,
        keyHighlights,
        admissionAndFacilities,
        inTake,
      } = institute;

      // Ensure `popularCourses` is treated as an array
      const courses = Array.isArray(popularCourses)
        ? popularCourses
        : popularCourses.split(",").map((course) => course.trim());

      // Loop through each course and create a separate document
      for (const courseName of courses) {
        // Check if a document with the same `instituteName`, `country`, and `popularCourses` exists
        const existingDocument = await Institute.findOne({
          instituteName,
          country,
          popularCourses: courseName, // Match the exact course
        });

        if (existingDocument) {
          // Update existing document if found
          await Institute.updateOne(
            { _id: existingDocument._id },
            {
              $set: {
                aboutCollegeOrInstitute,
                keyHighlights,
                admissionAndFacilities,
                inTake: inTake.split("&").map((item) => item.trim()),
              },
            }
          );

          console.log(`Updated existing document for ${instituteName} - Course: ${courseName}`);
        } else {
          // Create a new document for each course
          await Institute.create({
            instituteName,
            country,
            popularCourses: courseName, // Save each course as a separate document
            aboutCollegeOrInstitute,
            keyHighlights,
            admissionAndFacilities,
            inTake: inTake.split("&").map((item) => item.trim()),
          });

          console.log(`Created new document for ${instituteName} - Course: ${courseName}`);
        }
      }
    }

    console.log("Institutes updated successfully with individual courses!");
  } catch (error) {
    console.error("Error updating institutes:", error);
  } finally {
    mongoose.connection.close();
  }
}

// updateInstituteCanada()

const deleteData=async()=>{
  await connectDb();
    await Institute.deleteMany({ country: "Canada" });
console.log("All institutes from Canada have been deleted.");

}
// deleteData()
async function updateWebsiteInstitutes() {
  try {
    await connectDb();

    const institutes = websiteData.flat();

    for (const institute of institutes) {
      await Institute.updateMany(
        { instituteName: institute.instituteName },
        {
          $set: {
            websiteUrl: institute.websiteUrl,
            
          },
        }
      );
    }

    console.log('Institutes updated successfully with website URLs!');
  } catch (error) {
    console.error('Error updating institutes:', error);
  } finally {
    mongoose.connection.close();
  }
}

// updateWebsiteInstitutes();



async function insertInstitutes() {
  try {
    // Connect to the database
    await connectDb();

    for (const institute of baseData) {
      const existingInstitute = await Institute.findOne({
        instituteName: institute.instituteName,
      });

      if (!existingInstitute) {
        await Institute.create(institute);
        console.log(`Institute "${institute.instituteName}" inserted successfully!`);
      } else {
        console.log(`Institute "${institute.instituteName}" already exists.`);
      }
    }
  } catch (error) {
    console.error("Error inserting institutes:", error);
  } finally {
    // Disconnect from the database
    mongoose.connection.close();
  }
}

// insertInstitutes();




async function updatePopularCourses() {
  try {
    // Connect to the database
    await connectDb();

    for (const item of updatedData) {
      const { instituteName, country, popularCourses } = item;

      // Check if a document with the same instituteName, country, and popularCourses exists
      const existingDocument = await Institute.findOne({
        instituteName,
        country,
        popularCourses,
      });

      if (existingDocument) {
        console.log(
          `Document with course "${popularCourses}" already exists for "${instituteName}".`
        );
      } else {
        await Institute.create({
          instituteName,
          country,
          popularCourses, 
        });
        console.log(
          `New document created for course "${popularCourses}" at "${instituteName}".`
        );
      }
    }
  } catch (error) {
    console.error("Error updating popularCourses:", error);
  } finally {
    // Disconnect from the database
    mongoose.connection.close();
  }
}

// updatePopularCourses();