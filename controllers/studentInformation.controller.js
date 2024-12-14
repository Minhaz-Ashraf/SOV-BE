import { StudentInformation } from "../models/studentInformation.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import {
  studentPersonalAndPassportSchema,
  studentPreferencesSchema,
  studentResidenceAndMailingAddressSchema,
} from "../validators/studentInformation.validator.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Student } from "../models/student.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import {
  accountDeletedSuccessfully,
  approvalRequestStudent,
  studentRegistrationComplete,
  studentRegistrationCompleteByAgent,
} from "../utils/mailTemp.js";
import { sendEmail, sendEmailVerification } from "../utils/sendMail.js";
import { Agent } from "../models/agent.model.js";
import { request } from "express";
import { Institution } from "../models/institution.model.js";
import { adminDocument } from "../models/adminDocument.model.js";
import { Withdrawal } from "../models/withdrawal.model.js";
import { Ticket } from "../models/ticket.model.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const adminEmails = process.env.ADMIN_EMAIL?.split(',');

async function generateStudentId() {
  const today = new Date();

  const year = today.getUTCFullYear().toString().slice(2); // Last 2 digits of the year
  const month = (today.getUTCMonth() + 1).toString().padStart(2, "0"); // Month with leading zero if necessary
  const day = today.getUTCDate().toString().padStart(2, "0"); // Day with leading zero if necessary

  const baseId = `ST-${year}${month}${day}`;

  const matchingCount = await StudentInformation.countDocuments({
    stId: { $regex: `^${baseId}` },
  });

  const newCount = matchingCount + 1;

  const sequenceStr = newCount.toString().padStart(2, "0");

  return `${baseId}${sequenceStr}`;
}

const studentPersonalInformation = asyncHandler(async (req, res) => {
  const { body: payload } = req;

  // Validate payload using Zod
  const validation = studentPersonalAndPassportSchema.safeParse(payload);
  if (!validation.success) {
    const errorMessage = validation.error.errors[0].message;
    return res
      .status(400)
      .json(new ApiResponse(400, {}, `Validation Error: ${errorMessage}`));
  }

  const { personalInformation, passportDetails } = validation.data;
  const idField = req.user.role === "2" ? "agentId" : "studentId";
  // Check if phone number, email, or passport number already exists
  const existingRecord = await StudentInformation.findOne({
    $or: [
      { "personalInformation.phone.phone": personalInformation.phone.phone },
      { "personalInformation.email": personalInformation.email },
      { "passportDetails.passportNumber": passportDetails.passportNumber },
    ],
  });

  // If a record with any of the unique fields exists, return an error
  if (existingRecord) {
    let errorMessage = "User already exists with this ";
    if (
      existingRecord.personalInformation.phone.phone ===
      personalInformation.phone.phone
    ) {
      errorMessage += "phone number.";
    } else if (
      existingRecord.personalInformation.email === personalInformation.email
    ) {
      errorMessage += "email.";
    } else if (
      existingRecord.passportDetails.passportNumber ===
      passportDetails.passportNumber
    ) {
      errorMessage += "passport number.";
    }
    return res.status(400).json(new ApiResponse(400, {}, errorMessage));
  }

  // Prepare data to save
  const data = {
    personalInformation: {
      ...personalInformation,
      phone: { ...personalInformation.phone },
    },
    passportDetails: {
      ...passportDetails,
    },
    [idField]: req.user.id, // Dynamically assign either studentId or agentId
    pageCount: 1,
  };

  // Save new student information
  const studentInfo = await StudentInformation.create(data);
  return res
    .status(201)
    .json(
      new ApiResponse(
        201,
        studentInfo,
        "Personal Information saved successfully"
      )
    );
});

const studentPersonalInformationEdit = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { body: payload } = req;

  // Validate payload using Zod
  const validation = studentPersonalAndPassportSchema.safeParse(payload);
  if (!validation.success) {
    const errorMessage = validation.error.errors[0].message;
    return res
      .status(400)
      .json(new ApiResponse(400, {}, `Validation Error: ${errorMessage}`));
  }

  const { personalInformation, passportDetails } = validation.data;
  const idField = req.user.role === "2" ? "agentId" : "studentId";

  // Find the student record by ID
  const existingRecord = await StudentInformation.findById(id);
  if (!existingRecord) {
    return res
      .status(404)
      .json(new ApiResponse(404, {}, "Student record not found"));
  }

  // Check if the phone number, email, or passport number belongs to another user
  const duplicateRecord = await StudentInformation.findOne({
    $or: [
      { "personalInformation.phone.phone": personalInformation.phone.phone },
      { "personalInformation.email": personalInformation.email },
      { "passportDetails.passportNumber": passportDetails.passportNumber },
    ],
    _id: { $ne: id }, // Exclude the current record by ID
  });

  // If a duplicate exists, return an error
  if (duplicateRecord) {
    let errorMessage = "User already exists with this ";
    if (
      duplicateRecord.personalInformation.phone.phone ===
      personalInformation.phone.phone
    ) {
      errorMessage += "phone number.";
    } else if (
      duplicateRecord.personalInformation.email === personalInformation.email
    ) {
      errorMessage += "email.";
    } else if (
      duplicateRecord.passportDetails.passportNumber ===
      passportDetails.passportNumber
    ) {
      errorMessage += "passport number.";
    }
    return res.status(400).json(new ApiResponse(400, {}, errorMessage));
  }

  // Prepare data to update
  const updateData = {
    personalInformation: {
      ...personalInformation,
      phone: { ...personalInformation.phone },
    },
    passportDetails: {
      ...passportDetails,
    },
    [idField]: req.user.id, // Dynamically assign either studentId or agentId
  };

  // Update the existing record
  const updatedRecord = await StudentInformation.findByIdAndUpdate(
    id,
    { $set: updateData },
    { new: true }
  );

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        updatedRecord,
        "Personal Information updated successfully"
      )
    );
});

const studentResidenceAndAddress = async (req, res) => {
  const payload = req.body;
  const { formId } = req.params;

  // Validate the payload against the Zod schema
  const validation = studentResidenceAndMailingAddressSchema.safeParse(payload);
  if (!validation.success) {
    return res
      .status(400)
      .json(new ApiResponse(400, {}, validation.error.errors[0].message));
  }

  // Prepare update data
  const updateData = {
    residenceAddress: {
      address: payload.residenceAddress?.address,
      country: payload.residenceAddress?.country,
      state: payload.residenceAddress?.state,
      city: payload.residenceAddress?.city,
      zipcode: payload.residenceAddress?.zipcode,
    },
    mailingAddress: {
      address: payload.mailingAddress?.address,
      country: payload.mailingAddress?.country,
      state: payload.mailingAddress?.state,
      city: payload.mailingAddress?.city,
      zipcode: payload.mailingAddress?.zipcode,
    },
    pageCount: 2, // Explicitly set or update pageCount
  };

  try {
    // Attempt to find and update the document if it exists
    const existingStudentInfo = await StudentInformation.findByIdAndUpdate(
      formId,
      { $set: updateData },
      { new: true }
    );

    if (existingStudentInfo) {
      // Document was found and updated
      return res
        .status(200)
        .json(new ApiResponse(200, existingStudentInfo, "Data updated successfully"));
    }

    // If no document found, create a new one
    const newStudentInfo = new StudentInformation({
      ...updateData,
      studentId: payload.studentId, // Ensure this is provided in payload
      agentId: payload.agentId, // Ensure this is provided in payload
      pageStatus: {
        status: "registering", // Default status
        message: "", // Default message
      },
    });

    const savedStudentInfo = await newStudentInfo.save();
    return res
      .status(201)
      .json(new ApiResponse(201, savedStudentInfo, "Data saved successfully"));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, {}, "An error occurred while processing the request"));
  }
};



const studentPreference = asyncHandler(async (req, res) => {
  const payload = req.body;
  const { formId } = req.params;
  const { edit } = req.query;

  // Validate formId
  if (!formId || formId === "undefined") {
    return res
      .status(400)
      .json(new ApiResponse(400, {}, "formId parameter is missing or invalid"));
  }

  // Validate request body with Zod
  const validation = studentPreferencesSchema.safeParse(payload);
  if (!validation.success) {
    return res
      .status(400)
      .json(new ApiResponse(400, {}, validation.error.errors[0].message));
  }

  // Generate Student ID
  let stId
  let studentInfo;

  if (edit) {
    // Update existing student information if edit flag is set
    studentInfo = await StudentInformation.findOneAndUpdate(
      { _id: formId },
      {
        $set: {
          preferences: {
            preferredCountry: payload.preferredCountry,
            preferredState: payload.preferredState,
            preferredProgram: payload.preferredProgram,
            preferredLevelOfEducation: payload.preferredLevelOfEducation,
            preferredInstitution: payload.preferredInstitution,
          }
        },
      },
      { new: true }
    );
  } else {
    // Add new student preferences and status
    let status = req.user.role === "2" ? "completed" : "notapproved";
    const studentInfoData = await StudentInformation.findById(formId).lean();

    if(!studentInfoData.stId){
      stId = await generateStudentId();
    }else {
      stId = studentInfoData.stId;
    }

    studentInfo = await StudentInformation.findOneAndUpdate(
      { _id: formId },
      {
        $set: {
          preferences: {
            preferredCountry: payload.preferredCountry,
            preferredState: payload.preferredState,
            preferredProgram: payload.preferredProgram,
            preferredLevelOfEducation: payload.preferredLevelOfEducation,
            preferredInstitution: payload.preferredInstitution,
          },
          pageCount: 3,
          pageStatus: { status },
          stId: stId,
        },
      },
      { new: true }
    );

    // Send email based on user role
    if (req.user.role === "3") {
      const emailContent = studentRegistrationComplete(
        studentInfo.personalInformation.firstName
      );
      await sendEmailVerification(
        studentInfo.personalInformation.email,
        "Registration Successful Awaiting Admin Approval",
        emailContent
      );
      const tempemail = approvalRequestStudent(
        studentInfo.personalInformation.firstName,
        stId
      );
      adminEmails?.map(async (adminEmail) =>{
        await sendEmail({
          to: adminEmail,
          subject: `New Registration Completed – Awaiting Admin Approval`,
          htmlContent: tempemail,
        });
      })
    } else if (req.user.role === "2") {
      const agent = await Agent.findById(req.user.id);
      if (agent) {
        const agentEmail = agent.accountDetails.founderOrCeo.email;
        const agentName = agent.accountDetails.primaryContactPerson.name;
        const agentPhone = agent.accountDetails.founderOrCeo.phone;
        const emailContent = studentRegistrationCompleteByAgent(
          studentInfo.personalInformation.firstName,
          agentName,
          stId,
          studentInfo.personalInformation.firstName,
          agentEmail,
          agentPhone
        );
        await sendEmailVerification(
          studentInfo.personalInformation.email,
          "Successful Registration on Sov Portal Your Agent Will Manage Your Application",
          emailContent
        );
      }
    }
  }



  return res
    .status(201)
    .json(new ApiResponse(201, {}, "Data saved successfully"));
});

const getStudentPersonalInformation = asyncHandler(async (req, res) => {
  const { studentId } = req.params;
  const studentPersonalInformation = await StudentInformation.findOne({
    studentId: studentId,
  });

  if (!studentPersonalInformation) {
    return res.status(404).json(new ApiResponse(404, {}, "Student not found"));
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, studentPersonalInformation, "data get successfully")
    );
});

// const getStudentDetails = asyncHandler(async (req, res) => {
//   const studentDetails = await Student.findOne({
//     _id: req.user.id,
//   }).select("-password");
//   return res
//     .status(200)
//     .json(new ApiResponse(200, studentDetails, "data get successfully"));
// });

// const getAllStudents = asyncHandler(async (req, res) => {
//   const allStudents = await Student.findAll().select("-password");
//   return res
//     .status(200)
//     .json(new ApiResponse(200, allStudents, "data get successfully"));
// });

const updateStudentPersonalInformation = asyncHandler(async (req, res) => {
  const { body: payload } = req;
  const { formId } = req.params;

  // Validate if formId is provided
  if (!formId) {
    return res
      .status(400)
      .json(new ApiResponse(400, {}, "Form ID is required"));
  }

  // Fetch the current document by formId
  const currentRecord = await StudentInformation.findById(formId);

  // Check if the record exists and belongs to the logged-in user
  if (!currentRecord) {
    return res
      .status(404)
      .json(new ApiResponse(404, {}, "Student information not found"));
  }

  const isAuthorized = req.user.role === "0" ? 
    true : req.user.role === "2"
      ? currentRecord.agentId === req.user.id
      : currentRecord.studentId === req.user.id;

  // Only perform duplicate checks if the logged-in user is NOT the owner
  if (!isAuthorized) {
    const duplicateRecord = await StudentInformation.findOne({
      $or: [
        {
          "personalInformation.phone.phone":
            payload.personalInformation?.phone?.phone,
        },
        { "personalInformation.email": payload.personalInformation?.email },
        {
          "passportDetails.passportNumber":
            payload.passportDetails?.passportNumber,
        },
      ],
      _id: { $ne: formId }, // Exclude the current record by formId
    });

    if (duplicateRecord) {
      let errorMessage = "User already exists with this ";
      if (
        duplicateRecord.personalInformation?.phone?.phone ===
        payload.personalInformation?.phone?.phone
      ) {
        errorMessage += "phone number.";
      } else if (
        duplicateRecord.personalInformation?.email ===
        payload.personalInformation?.email
      ) {
        errorMessage += "email.";
      } else if (
        duplicateRecord.passportDetails?.passportNumber ===
        payload.passportDetails?.passportNumber
      ) {
        errorMessage += "passport number.";
      }
      return res.status(400).json(new ApiResponse(400, {}, errorMessage));
    }
  }

  // Update student information if no duplicates found or if the user is authorized
  const updatedStudentInfo = await StudentInformation.findOneAndUpdate(
    { _id: formId }, // Assuming formId corresponds to the MongoDB document ID
    { $set: payload }, // Update the document with the new data
    { new: true, runValidators: true } // Return the updated document, and run validators
  );

  // Respond with success
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        updatedStudentInfo,
        "Personal Information updated successfully"
      )
    );
});

const getAllAgentStudent = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, searchData } = req.query;

  let agentId = req.user.id;

  // Check if the user role is authorized
  if (req.user.role !== "2" && req.user.role !== "0" && req.user.role !== "1") {
    return res
      .status(403)
      .json(
        new ApiResponse(
          403,
          {},
          "Unauthorized access: Only agent, admin, subamdin can fetch student data"
        )
      );
  }

  // Build initial match query
  let matchQuery = {deleted : false};

  if(agentId){
    matchQuery.agentId = agentId;
  }

  // Dynamic search query if searchData is provided
  if (searchData) {
    const regex = new RegExp(searchData, "i");
    matchQuery.$or = [
      { "personalInformation.email": regex },
      { stId: regex },
      { "personalInformation.firstName": regex },
      { "personalInformation.lastName": regex },
      { "personalInformation.phone.phone": regex },
    ];
  }

  // Use aggregation with a lookup to get applications and count
  const allStudents = await StudentInformation.aggregate([
    { $match: matchQuery }, // Apply the agentId and deleted filter
    {
      $lookup: {
        from: "institutions",
        localField: "_id",
        foreignField: "studentInformationId",
        as: "applications",
      },
    },
    {
      $addFields: {
        applicationCount: { $size: "$applications" },
      },
    },
    {
      $facet: {
        totalCount: [{ $count: "count" }],
        data: [{ $skip: (page - 1) * limit }, { $limit: parseInt(limit) }],
      },
    },
  ]);

  // Extract the total count and paginated students data
  const totalRecords = allStudents[0]?.totalCount[0]?.count || 0;
  const students = allStudents[0]?.data || [];

  // Pagination logic
  const totalPages = Math.ceil(totalRecords / limit);
  const currentPage = parseInt(page);
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  // Response if no students found
  if (!students.length) {
    return res
      .status(404)
      .json(new ApiResponse(404, {}, "No students found for this agent"));
  }

  // Send the response with paginated results
  res.status(200).json(
    new ApiResponse(
      200,
      {
        totalRecords,
        totalPages,
        currentPage,
        prevPage,
        nextPage,
        hasPreviousPage: prevPage !== null,
        hasNextPage: nextPage !== null,
        students,
      },
      "Students fetched successfully"
    )
  );
});


const getAllAgentStudentAdmin = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, searchData } = req.query;

  let agentId = req.query.agentId || undefined;

  // Check if the user role is authorized
  if (req.user.role !== "2" && req.user.role !== "0" && req.user.role !== "1") {
    return res
      .status(403)
      .json(
        new ApiResponse(
          403,
          {},
          "Unauthorized access: Only agent, admin, subamdin can fetch student data"
        )
      );
  }

  // Build initial match query
  let matchQuery = {deleted : false, "pageStatus.status": "completed"};

  if(agentId){
    matchQuery.agentId = agentId;
  }

  // Dynamic search query if searchData is provided
  if (searchData) {
    const regex = new RegExp(searchData, "i");
    matchQuery.$or = [
      { "personalInformation.email": regex },
      { stId: regex },
      { "personalInformation.firstName": regex },
      { "personalInformation.lastName": regex },
      { "personalInformation.phone.phone": regex },
    ];
  }

  // Use aggregation with a lookup to get applications and count
  const allStudents = await StudentInformation.aggregate([
    { $match: matchQuery }, // Apply the agentId and deleted filter
    {
      $lookup: {
        from: "institutions",
        localField: "_id",
        foreignField: "studentInformationId",
        as: "applications",
      },
    },
    {
      $addFields: {
        applicationCount: { $size: "$applications" },
      },
    },
    {
      $facet: {
        totalCount: [{ $count: "count" }],
        data: [{ $skip: (page - 1) * limit }, { $limit: parseInt(limit) }],
      },
    },
  ]);

  // Extract the total count and paginated students data
  const totalRecords = allStudents[0]?.totalCount[0]?.count || 0;
  const students = allStudents[0]?.data || [];

  // Pagination logic
  const totalPages = Math.ceil(totalRecords / limit);
  const currentPage = parseInt(page);
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  // Response if no students found
  if (!students.length) {
    return res
      .status(404)
      .json(new ApiResponse(404, {}, "No students found for this agent"));
  }

  const pagination = {
    totalRecords,
    totalPages,
    currentPage,
    previousPage: prevPage,
    nextPage,
    hasPreviousPage: prevPage !== null,
    hasNextPage: nextPage !== null,
  }

  // Send the response with paginated results
  res.status(200).json(
    new ApiResponse(
      200,
      {
        pagination,
        data: students,
      },
      "Students fetched successfully"
    )
  );
});

const getStudentFormById = asyncHandler(async (req, res) => {
  const { formId } = req.params;

  // Fetch student information by formId
  let studentInformation = await StudentInformation.findOne({
    studentId: req.user.id,
  });
  console.log(req.user.role);
  let getFormId;

  if (req.user.role === "3") {
    getFormId = studentInformation._id;
  }
  if (req.user.role === "2" || req.user.role === "0") {
    studentInformation = await StudentInformation.findById(formId);
  }

  // If student information is not found, return 404
  if (!studentInformation) {
    return res
      .status(404)
      .json(new ApiResponse(404, {}, "Student information not found"));
  }
  const studentFormId =
    req.user.role === "2" || req.user.role === "0" ? formId : getFormId;
    
    const visaApplication = await Institution.findOne({
      studentInformationId: studentFormId,
      "visa.status": { $exists: true },
    }).sort({ updatedAt: -1 });
    
    const courseFeeApplication = await Institution.findOne({
      studentInformationId: studentFormId,
      "courseFeeApplication.status": { $exists: true },
    }).sort({ updatedAt: -1 });
    
    const offerLetterApplication = await Institution.findOne({
      studentInformationId: studentFormId,
      "offerLetter.status": { $exists: true },
    }).sort({ updatedAt: -1 });
    
    const flags = {
      visaApproved: visaApplication?.visa?.status || "",
      courseFeeApproved: courseFeeApplication?.courseFeeApplication?.status || "",
      offerLetterApproved: offerLetterApplication?.offerLetter?.status || "",
    };


  // Respond with success if student information is found
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { studentInformation, flags },
        "Student information retrieved successfully"
      )
    );
});

const deleteStudentInformation = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const studentInfo = await StudentInformation.findById(id);
  if (!studentInfo) {
    return res
      .status(404)
      .json(new ApiResponse(404, {}, "Student information not found."));
  }

  studentInfo.deleted = true;

  await studentInfo.save();

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        studentInfo,
        "Student information marked as deleted."
      )
    );
});


const deleteStudentData = asyncHandler(async (req, res) => {
  const { id } = req.params; //studentInformationId
  let email;
  let firstName;
  let userId;

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const studentInfo = await StudentInformation.findById(id);
    if (!studentInfo) {
      return res
        .status(404)
        .json(new ApiResponse(404, {}, "Student information not found."));
    }

    studentInfo.deleted = true;
    userId = studentInfo.stId;

    await studentInfo.save({session});
    if (studentInfo.studentId) {
      const student = await Student.findById(studentInfo.studentId).session(
        session
      );
      if (student) {
        student.deleted = true;
        await student.save({ session });
        firstName = student.firstName;
        email = student.email;
      }
      await Institution.updateMany(
        { userId: studentInfo?.studentId }, //student_id
        { $set : { deleted: true } },
        { session }
      );
  
      await Withdrawal.updateMany(
        { userId : studentInfo?.studentId }, //student_id
        { $set : { deleted: true } },
        { session }
      );
  
      await Ticket.updateMany(
        { createdBy : studentInfo?.studentId }, //student_id
        { $set : { deleted: true } },
        { session }
      );
    }else if (studentInfo.agentId) {
      firstName = studentInfo.personalInformation.firstName;
      email = studentInfo.personalInformation.email;
      await Institution.updateMany(
        { studentInformationId : studentInfo._id }, //studentInformation_id
        { $set : { deleted: true } },
        { session }
      );
  
      await Withdrawal.updateMany(
        { userId : studentInfo?.studentId }, //student_id
        { $set : { deleted: true } },
        { session }
      );
    }

    await session.commitTransaction();
    session.endSession();

    await sendEmail({
      to: email,
      subject: "Your Account Has Been Deleted – Further Action Required",
      htmlContent: accountDeletedSuccessfully(firstName, userId),
    });

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          studentInfo,
          "Student and related information marked as deleted."
        )
      );
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.log(error);
  }
});

const getAdminDocument = asyncHandler(async (req, res) => {
  const { studentId } = req.params;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const andConditions = [{ studentId: studentId }];

  if (req.query.searchQuery) {
    const regex = { $regex: req.query.searchQuery, $options: "i" }; // Case-insensitive search
    andConditions.push({
      $or: [
        { documentName: regex },
      ],
    });
  }

  if (req.query.documentType) {
    andConditions.push({
        documentType: req.query.documentType,
    });
  }

  const query = andConditions.length > 0 ? { $and: andConditions } : {};

  const totalDocuments = await adminDocument.countDocuments(query);
  const totalPages = Math.ceil(totalDocuments / limit);

  const documents = await adminDocument
    .find(query)
    .select("-__v")
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .lean();

  if (documents.length === 0) {
    return res
      .status(404)
      .json(new ApiResponse(404, {}, "No documents found for this student"));
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        total: totalDocuments,
        currentPage: page,
        previousPage: page > 1 ? page - 1 : null,
        nextPage: page < totalPages ? page + 1 : null,
        totalPages,
        limit,
        documents: documents,
      },
      "Documents retrieved successfully"
    )
  );
});


const updateStudentStatus = asyncHandler(async (req, res) => {
  const { studentId } = req.params;
  const { status, message } = req.body;

  if (!status) {
    return res
      .status(400)
      .json(new ApiResponse(400, {}, "Status is required."));
  }

  try {
    const student = await StudentInformation.findOneAndUpdate(
      { _id : studentId, deleted: true },
      { $set: { "pageStatus.status": status, "pageStatus.message": message, deleted: false } },
      { new: true }
    );

    if (!student) {
      return res
        .status(404)
        .json(new ApiResponse(404, {}, "Student not found or already deleted."));
    }

    return res.status(200).json(
      new ApiResponse(200, student, "Student status updated successfully.")
    );
  } catch (error) {
    console.error("Error updating student status:", error);
    return res.status(500).json(
      new ApiResponse(500, {}, "Internal server error.")
    );
  }
});


export {
  studentPersonalInformation,
  studentResidenceAndAddress,
  studentPreference,
  getStudentPersonalInformation,
  // getStudentDetails,
  // getAllStudents,
  updateStudentPersonalInformation,
  getAllAgentStudent,
  getStudentFormById,
  deleteStudentInformation,
  studentPersonalInformationEdit,
  getAdminDocument,
  deleteStudentData,
  updateStudentStatus,
  getAllAgentStudentAdmin
};
