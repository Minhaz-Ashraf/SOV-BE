import { asyncHandler } from "../utils/asyncHandler.js";
import { Agent } from "../models/agent.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Student } from "../models/student.model.js";
import { StudentInformation } from "../models/studentInformation.model.js";
import { Institution } from "../models/institution.model.js";
import {
  accountDeletedSuccessfully,
  agentAccountApproved,
  agentOfferLetterApproved,
  agentOfferLetterRejected,
  agentRegistrationRejected,
  courseFeeAgentApplicationApproved,
  courseFeeAgentApplicationRejected,
  studentAccountApproved,
  studentCourseFeeApprovedTemp,
  studentCourseFeeRejectedTemp,
  studentEmbassyVisaApprovedTemp,
  studentEmbassyVisaRejectedTemp,
  studentOfferLetterApprovedTemp,
  studentOfferLetterRejectedTemp,
  studentRegistrationComplete,
  studentRegistrationRejected,
  studentVisaApprovedTemp,
  studentVisaRejectedTemp,
  visaAgentApplicationApproved,
  visaAgentApplicationRejected,
  visaAgentEmbassyApplicationApproved,
  visaAgentEmbassyApplicationRejected,
} from "../utils/mailTemp.js";
import { sendEmail } from "../utils/sendMail.js";
import { Company } from "../models/company.model.js";
import { adminDocumentSchema } from "../validators/document.validator.js";
import { adminDocument } from "../models/adminDocument.model.js";
import path from "path";
import fs from "fs";
import { parse as json2csv } from "json2csv";
import { Ticket } from "../models/ticket.model.js";
import mongoose from "mongoose";
import { Withdrawal } from "../models/withdrawal.model.js";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get total agents count
const getTotalAgentsCount = asyncHandler(async (req, res) => {
  const totalAgent = await Agent.countDocuments({ role: "2", deleted: false});

  const fifteenDaysAgo = new Date();
  fifteenDaysAgo.setDate(fifteenDaysAgo.getDate() - 15);

  const activeAgentCount = await Agent.countDocuments({ role : "2", lastLogin : {$gte: fifteenDaysAgo}, deleted: false});
  return res
    .status(200)
    .json(new ApiResponse(200, {totalAgent, activeAgentCount}, "Agent count got successfully"));
});

// Get all students count
const getTotalStudentCount = asyncHandler(async (req, res) => {
  const studentCount = await Student.countDocuments({deleted : false});

  const fifteenDaysAgo = new Date();
  fifteenDaysAgo.setDate(fifteenDaysAgo.getDate() - 15);

  const activeStudentCount = await Student.countDocuments({ role : "3", lastLogin : {$gte: fifteenDaysAgo}, deleted : false })
  return res
    .status(200)
    .json(new ApiResponse(200, {studentCount, activeStudentCount}, "Student count got successfully"));
});

const changeStudentInformationStatus = asyncHandler(async (req, res) => {
  const { studentInformationId } = req.params;
  const { status, message, type } = req.body;

  // Validate that status is provided
  if (!status) {
    return res.status(400).json(new ApiResponse(400, {}, "Status is required"));
  }

  if (type === "student") {
    // Find student information by student ID
    const studentInfo = await StudentInformation.findOne({
      _id: studentInformationId,
    });
    if (!studentInfo) {
      return res
        .status(404)
        .json(new ApiResponse(404, {}, "Student information not found"));
    }

    const studentName = studentInfo.personalInformation.firstName;
    let temp;
    if (status === "approved") {
      temp = studentAccountApproved(studentName);
      await sendEmail({
        to: studentInfo.personalInformation.email,
        subject:
          "Your Student Account is Approved – Start Your Study Abroad Journey!",
        htmlContent: temp,
      });
    }
    if (status === "rejected") {
      temp = studentRegistrationRejected(studentName, message);
      await sendEmail({
        to: studentInfo.personalInformation.email,
        subject:
          "Action Required: Your Student Registration on Sov Portal was Rejected",
        htmlContent: temp,
      });
    }

    // Update the student information status and message
    studentInfo.pageStatus.status = status;
    if (message) studentInfo.pageStatus.message = message;
    await studentInfo.save();
  }

  if (type === "agent") {
    // Find agent information by student ID
    const agentInfo = await Company.findById(studentInformationId);
    if (!agentInfo) {
      return res
        .status(404)
        .json(new ApiResponse(404, {}, "Agent information not found"));
    }
    const agentId = agentInfo.agentId;

    const agentData = await Agent.findOne({ _id: agentId });

    if (!agentData) {
      return res
        .status(404)
        .json(new ApiResponse(404, {}, "Agent information not found"));
    }

    const agentEmail = agentData.accountDetails.founderOrCeo.email;
    const agentName = agentInfo.primaryContact.firstName;
    let temp;
    if (status === "approved") {
      temp = agentAccountApprove(agentName);
      await sendEmail({
        to: agentEmail,
        subject:
          " Your Agent Account is Approved – Start Managing Your Clients!",
        htmlContent: temp,
      });
    }
    if (status === "rejected") {
      temp = agentRegistrationRejected(agentName, message);
      await sendEmail({
        to: agentEmail,
        subject:
          "Action Required: Your Agent Registration on Sov Portal was Rejected",
        htmlContent: temp,
      });
    }

    // Update the agent information status and message
    agentInfo.pageStatus.status = status;
    if (message) agentInfo.pageStatus.message = message;
    await agentInfo.save();
  }

  // Respond with a success message
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Status updated successfully"));
});


const changeStudentInformationStatusSubadmin = asyncHandler(async (req, res) => {
  const { studentInformationId } = req.params;
  const { status, message, type } = req.body;
  const tokenUser = req.user;

  // Validate that status is provided
  if (!status) {
    return res.status(400).json(new ApiResponse(400, {}, "Status is required"));
  }

  if (type === "student") {
    // Find student information by student ID
    const studentInfo = await StudentInformation.findOne({
      _id: studentInformationId,
    });
    if (!studentInfo) {
      return res
        .status(404)
        .json(new ApiResponse(404, {}, "Student information not found"));
    }

    const studentName = studentInfo.personalInformation.firstName;
    let temp;
    if (status === "approved") {
      temp = studentAccountApproved(studentName);
      await sendEmail({
        to: studentInfo.personalInformation.email,
        subject:
          "Your Student Account is Approved – Start Your Study Abroad Journey!",
        htmlContent: temp,
      });
    }
    if (status === "rejected") {
      temp = studentRegistrationRejected(studentName, message);
      await sendEmail({
        to: studentInfo.personalInformation.email,
        subject:
          "Action Required: Your Student Registration on Sov Portal was Rejected",
        htmlContent: temp,
      });
    }

    // Update the student information status and message
    studentInfo.pageStatus.status = status;
    if(tokenUser.role === "1"){
      studentInfo.teamId = tokenUser._id;
    }
    if (message) studentInfo.pageStatus.message = message;
    await studentInfo.save();
  }

  if (type === "agent") {
    // Find agent information by student ID
    const agentInfo = await Company.findById(studentInformationId);
    if (!agentInfo) {
      return res
        .status(404)
        .json(new ApiResponse(404, {}, "Agent information not found"));
    }
    const agentId = agentInfo.agentId;

    const agentData = await Agent.findOne({ _id: agentId });

    if (!agentData) {
      return res
        .status(404)
        .json(new ApiResponse(404, {}, "Agent information not found"));
    }

    const agentEmail = agentData.accountDetails.founderOrCeo.email;
    const agentName = agentInfo.primaryContact.firstName;
    let temp;
    if (status === "approved") {
      temp = agentAccountApprove(agentName);
      await sendEmail({
        to: agentEmail,
        subject:
          " Your Agent Account is Approved – Start Managing Your Clients!",
        htmlContent: temp,
      });
    }
    if (status === "rejected") {
      temp = agentRegistrationRejected(agentName, message);
      await sendEmail({
        to: agentEmail,
        subject:
          "Action Required: Your Agent Registration on Sov Portal was Rejected",
        htmlContent: temp,
      });
    }

    // Update the agent information status and message
    agentInfo.pageStatus.status = status;
    if(tokenUser.role === "1"){
      agentInfo.teamId = tokenUser._id;
    }
    if (message) agentInfo.pageStatus.message = message;
    await agentInfo.save();
  }

  // Respond with a success message
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Status updated successfully"));
});

const getAllApplications = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  const query = {};
  const andConditions = [];

  // Handle status filter for both offerLetter and gic
  if (req.query.status) {
    const validStatuses = ["underreview", "completed", "rejected", "approved"];
    if (!validStatuses.includes(req.query.status)) {
      return res
        .status(400)
        .json(new ApiResponse(400, {}, "Invalid status filter provided."));
    }

    // Add the status conditions directly to the andConditions array
    andConditions.push({
      $or: [
        { "offerLetter.status": req.query.status },
        { "courseFeeApplication.status": req.query.status },
        { "visa.status": req.query.status },
      ],
    });
  }

  // Handle search query across multiple fields
  if (req.query.searchQuery) {
    const regex = { $regex: req.query.searchQuery, $options: "i" }; // Case-insensitive search
    andConditions.push({
      $or: [
        { "offerLetter.personalInformation.fullName": regex },
        { "courseFeeApplication.personalDetails.fullName": regex },
        { "offerLetter.personalInformation.phoneNumber": regex },
        { "courseFeeApplication.personalDetails.phoneNumber": regex },
        { "visa.personalInformation.phoneNumber": regex },
        { "visa.personalDetails.phoneNumber": regex },
        { "visa.country": regex },
        { "offerLetter.preferences.institution": regex },
        { "offerLetter.preferences.country": regex },
        { applicationId: regex },
      ],
    });
  }

  // Apply andConditions if both filters are present
  if (andConditions.length > 0) {
    query.$and = andConditions;
  }

  // Fetch paginated applications with applied filters
  const applications = await Institution.find(query)
    .select("-__v") // Exclude __v field
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .lean();

  const totalApplications = await Institution.countDocuments(query);

  // Transform applications and consolidate agent/student fetches
  const transformedApplications = await Promise.all(
    applications.map(async (app) => {
      const userId = app.userId;
      const userType = app.studentInformationId ? "student" : "agent";
      const studentMongooseId = app.studentInformationId;

      const result = {
        userId,
        userType,
        institutionId: app._id,
        applicationId: app.applicationId,
        status: null,
        message: null,
        agentName: null,
        institution: null,
      };

      // Fetch agent or student data
      const findAgent = await Company.findOne({ agentId: userId }).lean();
      const findStudent =
        !findAgent &&
        (await StudentInformation.findOne({ studentId: userId }).lean());

      result.customUserId = findAgent
        ? findAgent.agId
        : findStudent
        ? findStudent.stId
        : null;

      if (findAgent) {
        const agentData = await Agent.findById(userId.toString());
        if (agentData) {
          result.agentName =
            agentData.accountDetails?.primaryContactPerson?.name || null;
        }
      }
      const studentData = await StudentInformation.findOne({ _id: studentMongooseId }).lean()
      result.studentId = studentData ? studentData.stId : null;

      // Check offerLetter and gic status
      if (app.offerLetter?.personalInformation) {
        result.fullName = app.offerLetter.personalInformation.fullName;
        result.type = "offerLetter";
        result.status = app.offerLetter.status;
        result.message = app.offerLetter.message;
        result.institution = app.offerLetter.preferences.institution;
      } else if (app.courseFeeApplication?.personalDetails) {
        result.fullName = app.courseFeeApplication.personalDetails.fullName;
        result.type = "courseFeeApplication";
        result.status = app.courseFeeApplication.status;
        result.message = app.courseFeeApplication.message;
      } else if (app.visa?.personalDetails) {
        result.fullName = app.visa.personalDetails.fullName;
        result.country = app.visa.country;
        result.type = "visa";
        result.status = app.visa.status;
        result.message = app.visa.message;
      }

      return result.fullName ? result : null;
    })
  );

  // Filter out null results
  const filteredApplications = transformedApplications.filter(Boolean);

  // Pagination logic
  const totalPages = Math.ceil(totalApplications / limit);

  res.status(200).json({
    total: totalApplications,
    currentPage: page,
    previousPage: page > 1 ? page - 1 : null,
    nextPage: page < totalPages ? page + 1 : null,
    totalPages,
    limit,
    applications: filteredApplications,
  });
});

const getAllApplicationsForSubadmin = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  const tokenUser = req.user;
  let query = {};
  const andConditions = [];
   if (tokenUser.role === "1") {
    query = {teamId : tokenUser._id};
  }

  // Handle status filter for both offerLetter and gic
  if (req.query.status) {
    const validStatuses = ["completed", "rejected", "approved"];
    if (!validStatuses.includes(req.query.status)) {
      return res
        .status(400)
        .json(new ApiResponse(400, {}, "Invalid status filter provided."));
    }

    // Add the status conditions directly to the andConditions array
    andConditions.push({
      $or: [
        { "offerLetter.status": req.query.status },
        { "gic.status": req.query.status },
      ],
    });
  }

  // Handle search query across multiple fields
  if (req.query.searchQuery) {
    const regex = { $regex: req.query.searchQuery, $options: "i" }; // Case-insensitive search
    andConditions.push({
      $or: [
        { "offerLetter.personalInformation.fullName": regex },
        { "gic.personalDetails.fullName": regex },
        { "offerLetter.personalInformation.phoneNumber": regex },
        { "gic.personalDetails.phoneNumber": regex },
        { "offerLetter.preferences.institution": regex },
        { "offerLetter.preferences.country": regex },
        { applicationId: regex },
      ],
    });
  }

  if (req.query.date) {
    const exactDate = new Date(req.query.date);
    const startOfDay = new Date(exactDate.setHours(0,0,0,0));
    const endOfDay = new Date(exactDate.setHours(23,59,59,999));

    andConditions.push({
      createdAt: { $gte: startOfDay, $lte: endOfDay },
    });
  }

  // Apply andConditions if both filters are present
  if (andConditions.length > 0) {
    query.$and = andConditions;
  }

  // Fetch paginated applications with applied filters
  const applications = await Institution.find(query)
    .select("-__v") // Exclude __v field
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .lean();

  const totalApplications = await Institution.countDocuments(query);

  // Transform applications and consolidate agent/student fetches
  const transformedApplications = await Promise.all(
    applications.map(async (app) => {
      const userId = app.userId;
      const userType = app.studentInformationId ? "student" : "agent";

      const result = {
        userId,
        userType,
        institutionId: app._id,
        applicationId: app.applicationId,
        status: null,
        message: null,
        agentName: null,
      };

      // Fetch agent or student data
      const findAgent = await Company.findOne({ agentId: userId }).lean();
      const findStudent =
        !findAgent &&
        (await StudentInformation.findOne({ studentId: userId }).lean());

      result.customUserId = findAgent
        ? findAgent.agId
        : findStudent
        ? findStudent.stId
        : null;

        
      if (
        (req.query.userType === "agent" && !result.customUserId?.startsWith("AG")) ||
        (req.query.userType === "student" && !result.customUserId?.startsWith("ST"))
      ) {
        return null; // Skip this iteration if it doesn't match the criteria
      }

      if (findAgent) {
        const agentData = await Agent.findById(userId.toString());
        if (agentData) {
          result.agentName =
            agentData.accountDetails?.primaryContactPerson?.name || null;
        }
      }

      // Check offerLetter and gic status
      if (app.offerLetter?.personalInformation) {
        result.fullName = app.offerLetter.personalInformation.fullName;
        result.type = "offerLetter";
        result.status = app.offerLetter.status;
        result.message = app.offerLetter.message;
      } else if (app.gic?.personalDetails) {
        result.fullName = app.gic.personalDetails.fullName;
        result.type = "gic";
        result.status = app.gic.status;
        result.message = app.gic.message;
      }

      return result.fullName ? result : null;
    })
  );

  // Filter out null results
  const filteredApplications = transformedApplications.filter(Boolean);

  // Pagination logic
  const totalPages = Math.ceil(totalApplications / limit);

  res.status(200).json({
    total: totalApplications,
    currentPage: page,
    previousPage: page > 1 ? page - 1 : null,
    nextPage: page < totalPages ? page + 1 : null,
    totalPages,
    limit,
    applications: filteredApplications,
  });
});


const changeApplicationStatus = asyncHandler(async (req, res) => {
  const { institutionId } = req.params;
  const { section, status, message } = req.body;

  // Validate required fields
  if (!section || !status) {
    return res
      .status(400)
      .json(new ApiResponse(400, {}, "Both section and status are required"));
  }

  // Find the institution
  const institution = await Institution.findById(institutionId);

  if (!institution) {
    return res
      .status(404)
      .json(new ApiResponse(404, {}, "Application not found"));
  }
  const userId = institution.userId;

  const findAgent = await Agent.findById(userId);

  // Retrieve student's information
  const studentInfo = await StudentInformation.findOne({
    _id: institution.studentInformationId,
  });
  if (!studentInfo) {
    return res
      .status(404)
      .json(new ApiResponse(404, {}, "Student information not found"));
  }

  // console.log(studentInfo, "=======")
  const studentId = studentInfo.stId || null;
  const { firstName, email } = studentInfo.personalInformation;
  const country = institution?.offerLetter?.preferences?.country || "";
  const course = institution?.offerLetter?.preferences?.course || "";
  const collegeName = institution?.offerLetter?.preferences?.institution || ""; // Assuming this is the correct field for college name

  if (section === "offerLetter") {
    if (status == "approved") {
      institution.offerLetter.status = status;
      if (message) {
        institution.offerLetter.message = message;
      }
      const temp = studentOfferLetterApprovedTemp(
        firstName,
        collegeName,
        country,
        course
      );
      await sendEmail({
        to: email,
        subject: "Your Offer Letter is Approved Proceed with Payment",
        htmlContent: temp,
      });
      if (findAgent) {
        const temp = agentOfferLetterApproved(
          studentId,
          firstName,
          findAgent.accountDetails.primaryContactPerson.name,
          collegeName,
          country,
          course
        );
        await sendEmail({
          to: findAgent.accountDetails.founderOrCeo.email,
          subject: `Offer Letter Approved for Proceed with Next Steps`,
          htmlContent: temp,
        });
      }
    } else if (status == "rejected") {
      institution.offerLetter.status = status;
      if (message) {
        institution.offerLetter.message = message;
      }
      const temp = studentOfferLetterRejectedTemp(
        firstName,
        collegeName,
        country,
        course,
        message
      );
      await sendEmail({
        to: email,
        subject: "Your Offer Letter is Approved Proceed with Payment",
        htmlContent: temp,
      });
      if (findAgent) {
        const temp = agentOfferLetterRejected(
          findAgent.accountDetails.primaryContactPerson.name,
          collegeName,
          country,
          course,
          message,
          firstName,
          studentId,
        );
        await sendEmail({
          to: findAgent.accountDetails.founderOrCeo.email,
          subject: `Offer Letter Rejected for Action Required`,
          htmlContent: temp,
        });
      }
    }
  } else if (section === "courseFeeApplication") {
    institution.courseFeeApplication = institution.courseFeeApplication || {};
    institution.courseFeeApplication.status = status;
    if (message) institution.courseFeeApplication.message = message;

    if (status === "approved") {
      const temp = studentCourseFeeApprovedTemp(
        firstName,
      );
      await sendEmail({
        to: email,
        subject: " Course Fee Application Approved ",
        htmlContent: temp,
      });
      if (findAgent) {
        const temp = courseFeeAgentApplicationApproved(
          findAgent.accountDetails.primaryContactPerson.name,
          firstName,
          studentId,
        );
        await sendEmail({
          to: findAgent.accountDetails.founderOrCeo.email,
          subject: `Course Fee Application Rejected  – Action Required`,
          htmlContent: temp,
        });
      }
    } else if (status === "rejected") {
      const temp = studentCourseFeeRejectedTemp(
        firstName,
        message
      );
      await sendEmail({
        to: email,
        subject: "Course Fee Application Rejected – Action Required",
        htmlContent: temp,
      });
      if (findAgent) {
        const temp = courseFeeAgentApplicationRejected(
          findAgent.accountDetails.primaryContactPerson.name,
          message,
          firstName,
          studentId,
        );
        await sendEmail({
          to: findAgent.accountDetails.founderOrCeo.email,
          subject: `Course Fee Application Rejected – Action Required`,
          htmlContent: temp,
        });
      }
    }
  } else if (section === "visa") {
    institution.visa = institution.visa || {};
    institution.visa.status = status;
    if (message) institution.visa.message = message;
  
    // Handle specific statuses
    switch (status) {
      case "approved":
        // Email to student
        await sendEmail({
          to: email,
          subject: "Visa Lodgment Application Approved",
          htmlContent: studentVisaApprovedTemp(firstName, institution?.visa?.country || ""),
        });
  
        // Email to agent (if available)
        if (findAgent) {
          const temp = visaAgentApplicationApproved(
            findAgent.accountDetails.primaryContactPerson.name,
            institution?.visa?.country || "",
            message,
            firstName,
            studentId,
          );
          await sendEmail({
            to: findAgent.accountDetails.founderOrCeo.email,
            subject: "Visa Lodgment Application Approved",
            htmlContent: temp,
          });
        }
        break;
  
      case "approvedbyembassy":
        // Email to student
        await sendEmail({
          to: email,
          subject: "Visa Application Approved by Embassy – Congratulations!",
          htmlContent: studentEmbassyVisaApprovedTemp(firstName, institution?.visa?.country || ""),
        });
  
        // Email to agent (if available)
        if (findAgent) {
          const temp = visaAgentEmbassyApplicationApproved(
            findAgent.accountDetails.primaryContactPerson.name,
            institution?.visa?.country || "",
            firstName,
            studentId,
          );
          await sendEmail({
            to: findAgent.accountDetails.founderOrCeo.email,
            subject: "Visa Application Approved by Embassy",
            htmlContent: temp,
          });
        }
        break;
  
      case "rejected":
        // Email to student
        await sendEmail({
          to: email,
          subject: "Visa Lodgment Application Rejected – Review and Resubmit",
          htmlContent: studentVisaRejectedTemp(firstName, institution?.visa?.country || "", message),
        });
  
        // Email to agent (if available)
        if (findAgent) {
          const temp = visaAgentApplicationRejected(
            findAgent.accountDetails.primaryContactPerson.name,
            institution?.visa?.country || "",
            message,
            firstName,
            studentId,
          );
          await sendEmail({
            to: findAgent.accountDetails.founderOrCeo.email,
            subject: "Visa Lodgment Application Rejected- Action Required",
            htmlContent: temp,
          });
        }
        break;
  
      case "rejectedbyembassy":
        // Email to student
        await sendEmail({
          to: email,
          subject: "Visa Application Rejected by Embassy – Actions Required",
          htmlContent: studentEmbassyVisaRejectedTemp(firstName, institution?.visa?.country || "", message),
        });
  
        // Email to agent (if available)
        if (findAgent) {
          const temp = visaAgentEmbassyApplicationRejected(
            findAgent.accountDetails.primaryContactPerson.name,
            institution?.visa?.country || "",
            message,
            firstName,
            studentId,
          );
          await sendEmail({
            to: findAgent.accountDetails.founderOrCeo.email,
            subject: "Visa Application Rejected by Embassy",
            htmlContent: temp,
          });
        }
        break;
  
      default:
        return res
          .status(400)
          .json(new ApiResponse(400, {}, "Invalid visa status provided"));
    }
  } else {
    return res
      .status(400)
      .json(new ApiResponse(400, {}, "Invalid section provided"));
  }

  // Save the updated institution data
  await institution.save();

  // Return success response
  let resMessage =  "Accepted Application Status Updated";
  if(status == 'rejected') {
    resMessage = "Rejected Application Status Updated";
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { institution },
        resMessage
      )
    );
});


const changeApplicationStatusSubadmin = asyncHandler(async (req, res) => {
  const { institutionId } = req.params;
  const { section, status, message } = req.body;
  const tokenUser = req.user;

  // Validate required fields
  if (!section || !status) {
    return res
      .status(400)
      .json(new ApiResponse(400, {}, "Both section and status are required"));
  }

  // Find the institution
  const institution = await Institution.findById(institutionId);

  if (!institution) {
    return res
      .status(404)
      .json(new ApiResponse(404, {}, "Application not found"));
  }
  const userId = institution.userId;

  const findAgent = await Agent.findById(userId);

  // Retrieve student's information
  const studentInfo = await StudentInformation.findOne({
    _id: institution.studentInformationId,
  });
  if (!studentInfo) {
    return res
      .status(404)
      .json(new ApiResponse(404, {}, "Student information not found"));
  }

  // console.log(studentInfo, "=======")
  const studentId = studentInfo.stId || null;
  const { firstName, email } = studentInfo.personalInformation;
  const { country, course } = institution.offerLetter.preferences;
  const collegeName = institution.offerLetter.preferences.institution; // Assuming this is the correct field for college name
  if (section === "offerLetter") {
    if (status == "approved") {
      institution.offerLetter.status = status;
      if (message) {
        institution.offerLetter.message = message;
      }
      const temp = studentOfferLetterApprovedTemp(
        firstName,
        collegeName,
        country,
        course
      );
      await sendEmail({
        to: email,
        subject: "Your Offer Letter is Approved Proceed with Payment",
        htmlContent: temp,
      });
      if (findAgent) {
        const temp = agentOfferLetterApproved(
          studentId,
          firstName,
          findAgent.accountDetails.primaryContactPerson.name,
          collegeName,
          country,
          course
        );
        await sendEmail({
          to: findAgent.accountDetails.founderOrCeo.email,
          subject: `Offer Letter Approved for Proceed with Next Steps`,
          htmlContent: temp,
        });
      }
    } else if (status == "rejected") {
      institution.offerLetter.status = status;
      if (message) {
        institution.offerLetter.message = message;
      }
      const temp = studentOfferLetterRejectedTemp(
        firstName,
        collegeName,
        country,
        course,
        message
      );
      await sendEmail({
        to: email,
        subject: "Your Offer Letter is Approved Proceed with Payment",
        htmlContent: temp,
      });
      if (findAgent) {
        const temp = agentOfferLetterRejected(
          findAgent.accountDetails.primaryContactPerson.name,
          collegeName,
          country,
          course,
          message,
          firstName,
          studentId,
        );
        await sendEmail({
          to: findAgent.accountDetails.founderOrCeo.email,
          subject: `Offer Letter Rejected for Action Required`,
          htmlContent: temp,
        });
      }
    }
  } else if (section === "courseFeeApplication") {
    institution.courseFeeApplication = institution.courseFeeApplication || {};
    institution.courseFeeApplication.status = status;
    if (message) institution.courseFeeApplication.message = message;

    if (status === "approved") {
      const temp = studentCourseFeeApprovedTemp(
        firstName,
      );
      await sendEmail({
        to: email,
        subject: "Your Offer Letter is Approved Proceed with Payment",
        htmlContent: temp,
      });
      if (findAgent) {
        const temp = courseFeeAgentApplicationApproved(
          findAgent.accountDetails.primaryContactPerson.name,
          firstName,
          studentId,
        );
        await sendEmail({
          to: findAgent.accountDetails.founderOrCeo.email,
          subject: `Offer Letter Approved for Proceed with Next Steps`,
          htmlContent: temp,
        });
      }
    } else if (status === "rejected") {
      const temp = studentCourseFeeRejectedTemp(
        firstName,
        message
      );
      await sendEmail({
        to: email,
        subject: "Your Offer Letter is Approved Proceed with Payment",
        htmlContent: temp,
      });
      if (findAgent) {
        const temp = courseFeeAgentApplicationRejected(
          findAgent.accountDetails.primaryContactPerson.name,
          message,
          firstName,
          studentId,
        );
        await sendEmail({
          to: findAgent.accountDetails.founderOrCeo.email,
          subject: `Offer Letter Rejected for Action Required`,
          htmlContent: temp,
        });
      }
    }
  } else if (section === "visa") {
    institution.visa = institution.visa || {};
    institution.visa.status = status;
    if (message) institution.visa.message = message;
  
    // Handle specific statuses
    switch (status) {
      case "approved":
        // Email to student
        await sendEmail({
          to: email,
          subject: "Visa Application Approved",
          htmlContent: studentVisaApprovedTemp(firstName, country),
        });
  
        // Email to agent (if available)
        if (findAgent) {
          const temp = visaAgentApplicationApproved(
            findAgent.accountDetails.primaryContactPerson.name,
            country,
            message,
            firstName,
            studentId,
          );
          await sendEmail({
            to: findAgent.accountDetails.founderOrCeo.email,
            subject: "Visa Application Approved for Proceed with Next Steps",
            htmlContent: temp,
          });
        }
        break;
  
      case "approvedbyembassy":
        // Email to student
        await sendEmail({
          to: email,
          subject: "Visa Approved by Embassy",
          htmlContent: studentEmbassyVisaApprovedTemp(firstName, country),
        });
  
        // Email to agent (if available)
        if (findAgent) {
          const temp = visaAgentEmbassyApplicationApproved(
            findAgent.accountDetails.primaryContactPerson.name,
            country,
            firstName,
            studentId,
          );
          await sendEmail({
            to: findAgent.accountDetails.founderOrCeo.email,
            subject: "Visa Approved by Embassy for Further Action",
            htmlContent: temp,
          });
        }
        break;
  
      case "rejected":
        // Email to student
        await sendEmail({
          to: email,
          subject: "Visa Application Rejected",
          htmlContent: studentVisaRejectedTemp(firstName, country, message),
        });
  
        // Email to agent (if available)
        if (findAgent) {
          const temp = visaAgentApplicationRejected(
            findAgent.accountDetails.primaryContactPerson.name,
            country,
            message,
            firstName,
            studentId,
          );
          await sendEmail({
            to: findAgent.accountDetails.founderOrCeo.email,
            subject: "Visa Application Rejected - Action Required",
            htmlContent: temp,
          });
        }
        break;
  
      case "rejectedbyembassy":
        // Email to student
        await sendEmail({
          to: email,
          subject: "Visa Rejected by Embassy",
          htmlContent: studentEmbassyVisaRejectedTemp(firstName, country, message),
        });
  
        // Email to agent (if available)
        if (findAgent) {
          const temp = visaAgentEmbassyApplicationRejected(
            findAgent.accountDetails.primaryContactPerson.name,
            country,
            message,
            firstName,
            studentId,
          );
          await sendEmail({
            to: findAgent.accountDetails.founderOrCeo.email,
            subject: "Visa Rejected by Embassy - Action Required",
            htmlContent: temp,
          });
        }
        break;
  
      default:
        return res
          .status(400)
          .json(new ApiResponse(400, {}, "Invalid visa status provided"));
    }
  } else {
    return res
      .status(400)
      .json(new ApiResponse(400, {}, "Invalid section provided"));
  }

  if(tokenUser.role === "1"){
    institution.teamId = tokenUser._id;
  }

  // Save the updated institution data
  await institution.save();

  // Return success response
  let resMessage =  "Accepted Application Status Updated";
  if(status == 'rejected') {
    resMessage = "Rejected Application Status Updated";
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { institution },
        resMessage
      )
    );
});

const getTotalApplicationCount = asyncHandler(async (req, res) => {
  const totalCount = await Institution.countDocuments({
    $or: [
      { "offerLetter.type": "offerLetter" },
      { "gic.type": "GIC" },
      { "visa.personalDetails": { $exists: true } },
      { "courseFeeApplication.personalDetails": { $exists: true } }
    ],
  });

  const pendingCount = await Institution.countDocuments({
    $or: [
      { "offerLetter.status": "pending" },
      { "gic.status": "pending" },
      { "visa.status": "pending" },
      { "courseFeeApplication.status": "pending" }
    ],
  });

  const approvedCount = await Institution.countDocuments({
    $or: [
      { "offerLetter.status": "approved" },
      { "gic.status": "approved" },
      { "visa.status": "approved" },
      { "courseFeeApplication.status": "approved" }
    ],
  });

  return res.status(200).json(
    new ApiResponse(200, {
      totalCount: totalCount,
      pendingCount: pendingCount,
      approvedCount: approvedCount,
    }, "Application counts retrieved successfully")
  );
});

const getTotalTicketCount = asyncHandler(async (req, res) => {
  const totalCount = await Ticket.countDocuments();

  const pendingCount = await Ticket.countDocuments({ status: "underReview" });

  const approvedCount = await Ticket.countDocuments({ status: "approved" });

  return res.status(200).json(
    new ApiResponse(
       200,
      {
      totalCount,
      pendingCount,
      approvedCount,
      },
       "Ticket counts retrieved successfully",
    )
  );
});

const getTotalUserCount = asyncHandler(async (req, res) => {
  const { year } = req.query;

  let dateFilter = {};
  if (year) {
    const startOfYear = new Date(`${year}-01-01T00:00:00.000Z`);
    const endOfYear = new Date(`${year}-12-31T23:59:59.999Z`);

    dateFilter = {
      createdAt: {
        $gte: startOfYear,
        $lte: endOfYear,
      },
    };
  }

  const studentCount = await Student.countDocuments(dateFilter);

  const agentCount = await Agent.countDocuments(dateFilter);

  const totalUserCount = studentCount + agentCount;

  return res.status(200).json(
    new ApiResponse({
      statusCode: 200,
      totalUserCount,
      studentCount,
      agentCount,
      message: `User counts retrieved successfully for the year ${
        year || "all years"
      }`,
    })
  );
});

// const getAllDataAgentStudent = asyncHandler(async (req, res) => {
//   const page = parseInt(req.query.page) || 1;
//   const limit = parseInt(req.query.limit) || 10;
//   const { search, status, date, userType } = req.query;

//   let formattedAgents = [];
//   let formattedStudents = [];
//   let totalCompanies = 0;
//   let totalStudents = 0;
//   let totalPages = 0;
//   let totalStudentPages = 0;

//   let startOfDay;
//   let endOfDay;

//   if (date) {
//     const exactDate = new Date(date);
//     startOfDay = new Date(exactDate.setHours(0,0,0,0));
//     endOfDay = new Date(exactDate.setHours(23,59,59,999));
//   }

//   // Create search conditions for agents
//   const searchCondition = {
//     ...(search
//       ? {
//           $or: [
//             { "primaryContact.firstName": new RegExp(search, "i") },
//             { "primaryContact.lastName": new RegExp(search, "i") },
//             { agId: new RegExp(search, "i") },
//           ]
//         }
//       : {}),
//     ...(status ? { "pageStatus.status": status } : {}),
//     ...(date && {createdAt : { $gte: startOfDay, $lte: endOfDay }}),
//     pageCount: 6,
//   };

//   // Create search conditions for students
//   const studentSearchCondition = {
//     ...(search
//       ? {
//           $or: [
//             { "personalInformation.firstName": new RegExp(search, "i") },
//             { "personalInformation.lastName": new RegExp(search, "i") },
//             { stId: new RegExp(search, "i") },
//           ]
//         }
//       : {}),
//     ...(status ? { "pageStatus.status": status } : {}),
//     ...(date && {createdAt : { $gte: startOfDay, $lte: endOfDay }}),
//     pageCount: 3,
//     deleted: false,
//   };

//   // Fetch agents
//   const agents = await Company.find(searchCondition)
//     .select(
//       "primaryContact.firstName primaryContact.lastName agId _id pageStatus.message"
//     )
//     .sort({ createdAt: -1 })
//     .skip((page - 1) * limit)
//     .limit(limit)
//     .lean()

//   formattedAgents = agents.map((company) => {
//     const { firstName, lastName } = company.primaryContact || {};
//     return {
//       firstName: firstName || "N/A",
//       lastName: lastName || "N/A",
//       agId: company.agId,
//       _id: company._id,
//       message: company.pageStatus?.message || "",
//       type: "agent",
//     };
//   });

//   // Calculate total pages for agents
//   totalCompanies = await Company.countDocuments(searchCondition);
//   totalPages = Math.ceil(totalCompanies / limit);

//   // Fetch students
//   const students = await StudentInformation.find(studentSearchCondition)
//     .select(
//       "personalInformation.firstName personalInformation.lastName stId _id pageStatus.message"
//     )
//     .sort({ createdAt: -1 })
//     .skip((page - 1) * limit)
//     .limit(limit)
//     .lean()

//   formattedStudents = students.map((student) => ({
//     firstName: student.personalInformation?.firstName || "N/A",
//     lastName: student.personalInformation?.lastName || "N/A",
//     stId: student.stId,
//     _id: student._id,
//     message: student.pageStatus?.message || "",
//     type: "student",
//   }));

//   // Calculate total pages for students
//   totalStudents = await StudentInformation.countDocuments(
//     studentSearchCondition
//   );
//   totalStudentPages = Math.ceil(totalStudents / limit);

//   // Combine agents and students into a single array and paginate
//   const combinedResults = [...formattedAgents, ...formattedStudents];

//   res.status(200).json({
//     agents: formattedAgents,
//     students: formattedStudents,
//     totalCompanies,
//     totalStudents,
//     totalPages,
//     totalStudentPages,
//     currentPage: page,
//   });
// });

const getAllDataAgentStudent = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const { search, status, date, userType } = req.query;
  let statusCheck = [];

  if (status === 'notapproved'){
    statusCheck = ['notapproved', "requestedForReapproval"]
  }else {
    statusCheck = [status]
  }

  let formattedAgents = [];
  let formattedStudents = [];
  let totalCompanies = 0;
  let totalStudents = 0;
  let totalPages = 0;
  let totalStudentPages = 0;

  let startOfDay;
  let endOfDay;

  if (date) {
    const exactDate = new Date(date);
    startOfDay = new Date(exactDate.setHours(0, 0, 0, 0));
    endOfDay = new Date(exactDate.setHours(23, 59, 59, 999));
  }

  // Create search conditions for agents
  const searchCondition = {
    ...(search
      ? {
          $or: [
            { "primaryContact.firstName": new RegExp(search, "i") },
            { "primaryContact.lastName": new RegExp(search, "i") },
            { agId: new RegExp(search, "i") },
          ],
        }
      : {}),
    ...(status ? { "pageStatus.status": {$in : statusCheck} } : {}),
    ...(date && { createdAt: { $gte: startOfDay, $lte: endOfDay } }),
    pageCount: 6,
  };

  console.log(searchCondition)

  // Create search conditions for students
  const studentSearchCondition = {
    ...(search
      ? {
          $or: [
            { "personalInformation.firstName": new RegExp(search, "i") },
            { "personalInformation.lastName": new RegExp(search, "i") },
            { stId: new RegExp(search, "i") },
          ],
        }
      : {}),
    ...(status ? { "pageStatus.status": {$in : statusCheck} } : {}),
    ...(date && { createdAt: { $gte: startOfDay, $lte: endOfDay } }),
    pageCount: 3,
    deleted: false,
  };

  let agentLimit = Math.ceil(limit / 2);
  let studentLimit = limit - agentLimit;

  // Fetch agents
  let agents = [];
  if (userType === "agent" || !userType) {
    agents = await Company.find(searchCondition)
      .select(
        "primaryContact.firstName primaryContact.lastName agId _id pageStatus"
      )
      .sort({ createdAt: -1 })
      .skip((page - 1) * agentLimit)
      .limit(agentLimit)
      .lean();

    formattedAgents = agents.map((company) => {
      const { firstName, lastName } = company.primaryContact || {};
      return {
        firstName: firstName || "N/A",
        lastName: lastName || "N/A",
        agId: company.agId,
        _id: company._id,
        message: company.pageStatus?.message || "",
        status: company.pageStatus?.status || "",
        type: "agent",
      };
    });

    totalCompanies = await Company.countDocuments(searchCondition);
    totalPages = Math.ceil(totalCompanies / agentLimit);
  }

  let students = [];
  if (userType === "student" || !userType) {
    students = await StudentInformation.find(studentSearchCondition)
      .select(
        "personalInformation.firstName personalInformation.lastName stId _id pageStatus"
      )
      .sort({ createdAt: -1 })
      .skip((page - 1) * studentLimit)
      .limit(studentLimit)
      .lean();

    formattedStudents = students.map((student) => ({
      firstName: student.personalInformation?.firstName || "N/A",
      lastName: student.personalInformation?.lastName || "N/A",
      stId: student.stId,
      _id: student._id,
      message: student.pageStatus?.message || "",
      status: student.pageStatus?.status || "",
      type: "student",
    }));

    totalStudents = await StudentInformation.countDocuments(studentSearchCondition);
    totalStudentPages = Math.ceil(totalStudents / studentLimit);
  }

  const totalFetched = formattedAgents.length + formattedStudents.length;
  const remainingCount = limit - totalFetched;
  if (remainingCount > 0) {
    if (formattedAgents.length < agentLimit) {
      // Fetch more students if less agents found
      const additionalStudents = await StudentInformation.find(studentSearchCondition)
        .select(
          "personalInformation.firstName personalInformation.lastName stId _id pageStatus.message"
        )
        .sort({ createdAt: -1 })
        .skip(studentLimit)
        .limit(remainingCount)
        .lean();

      formattedStudents.push(
        ...additionalStudents.map((student) => ({
          firstName: student.personalInformation?.firstName || "N/A",
          lastName: student.personalInformation?.lastName || "N/A",
          stId: student.stId,
          _id: student._id,
          message: student.pageStatus?.message || "",
          type: "student",
        }))
      );
    } else if (formattedStudents.length < studentLimit) {
      // Fetch more agents if less students found
      const additionalAgents = await Company.find(searchCondition)
        .select(
          "primaryContact.firstName primaryContact.lastName agId _id pageStatus.message"
        )
        .sort({ createdAt: -1 })
        .skip(agentLimit)
        .limit(remainingCount)
        .lean();

      formattedAgents.push(
        ...additionalAgents.map((company) => {
          const { firstName, lastName } = company.primaryContact || {};
          return {
            firstName: firstName || "N/A",
            lastName: lastName || "N/A",
            agId: company.agId,
            _id: company._id,
            message: company.pageStatus?.message || "",
            type: "agent",
          };
        })
      );
    }
  }

  // Combine results
  const combinedResults = [...formattedAgents, ...formattedStudents];

  res.status(200).json({
    data: combinedResults,
    totalCompanies,
    totalStudents,
    totalPages,
    totalStudentPages,
    currentPage: page,
  });
});


const getAllDataAgentStudentForSubadmin = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const { search, status, date, userType } = req.query;

  const tokenUser = req.user;

  let formattedAgents = [];
  let formattedStudents = [];
  let totalCompanies = 0;
  let totalStudents = 0;
  let totalPages = 0;
  let totalStudentPages = 0;

  let startOfDay;
  let endOfDay;

  if (date) {
    const exactDate = new Date(date);
    startOfDay = new Date(exactDate.setHours(0,0,0,0));
    endOfDay = new Date(exactDate.setHours(23,59,59,999));
  }

  // Create search conditions for agents
  const searchCondition = {
    ...(search
      ? {
          $or: [
            { "primaryContact.firstName": new RegExp(search, "i") },
            { "primaryContact.lastName": new RegExp(search, "i") },
            { agId: new RegExp(search, "i") },
          ]
        }
      : {}),
    ...(status ? { "pageStatus.status": status } : {}),
    ...(date && {createdAt : { $gte: startOfDay, $lte: endOfDay }}),
    ...(tokenUser.role === "1" && {teamId : tokenUser._id}),
    pageCount: 6,
  };

  // Create search conditions for students
  const studentSearchCondition = {
    ...(search
      ? {
          $or: [
            { "personalInformation.firstName": new RegExp(search, "i") },
            { "personalInformation.lastName": new RegExp(search, "i") },
            { stId: new RegExp(search, "i") },
          ]
        }
      : {}),
    ...(status ? { "pageStatus.status": status } : {}),
    ...(date && {createdAt : { $gte: startOfDay, $lte: endOfDay }}),
    ...(tokenUser.role === "1" && {teamId : tokenUser._id}),
    pageCount: 3,
    deleted: false,
  };

  let agentLimit = Math.ceil(limit / 2);
  let studentLimit = limit - agentLimit;

  // Fetch agents
  let agents = [];
  if (userType === "agent" || !userType) {
    agents = await Company.find(searchCondition)
      .select(
        "primaryContact.firstName primaryContact.lastName agId _id pageStatus.message"
      )
      .sort({ createdAt: -1 })
      .skip((page - 1) * agentLimit)
      .limit(agentLimit)
      .lean()

    formattedAgents = agents.map((company) => {
      const { firstName, lastName } = company.primaryContact || {};
      return {
        firstName: firstName || "N/A",
        lastName: lastName || "N/A",
        agId: company.agId,
        _id: company._id,
        message: company.pageStatus?.message || "",
        type: "agent",
      };
    });

    totalCompanies = await Company.countDocuments(searchCondition);
    totalPages = Math.ceil(totalCompanies / agentLimit);
  }

  let students = [];
  if (userType === "student" || !userType) {
    students = await StudentInformation.find(studentSearchCondition)
      .select(
        "personalInformation.firstName personalInformation.lastName stId _id pageStatus.message"
      )
      .sort({ createdAt: -1 })
      .skip((page - 1) * studentLimit)
      .limit(studentLimit)
      .lean()

    formattedStudents = students.map((student) => ({
      firstName: student.personalInformation?.firstName || "N/A",
      lastName: student.personalInformation?.lastName || "N/A",
      stId: student.stId,
      _id: student._id,
      message: student.pageStatus?.message || "",
      type: "student",
    }));

    totalStudents = await StudentInformation.countDocuments(
      studentSearchCondition
    );
    totalStudentPages = Math.ceil(totalStudents / studentLimit);
  }
  const totalFetched = formattedAgents.length + formattedStudents.length;
  const remainingCount = limit - totalFetched;
  if (remainingCount > 0) {
    if (formattedAgents.length < agentLimit) {
      // Fetch more students if less agents found
      const additionalStudents = await StudentInformation.find(studentSearchCondition)
        .select(
          "personalInformation.firstName personalInformation.lastName stId _id pageStatus.message"
        )
        .sort({ createdAt: -1 })
        .skip(studentLimit)
        .limit(remainingCount)
        .lean()

      formattedStudents.push(
        ...additionalStudents.map((student) => ({
          firstName: student.personalInformation?.firstName || "N/A",
          lastName: student.personalInformation?.lastName || "N/A",
          stId: student.stId,
          _id: student._id,
          message: student.pageStatus?.message || "",
          type: "student",
        }))
      );
    } else if (formattedStudents.length < studentLimit) {
      // Fetch more agents if less students found
      const additionalAgents = await Company.find(searchCondition)
        .select(
          "primaryContact.firstName primaryContact.lastName agId _id pageStatus.message"
        )
        .sort({ createdAt: -1 })
        .skip(agentLimit)
        .limit(remainingCount)
        .lean()

      formattedAgents.push(
        ...additionalAgents.map((company) => {
          const { firstName, lastName } = company.primaryContact || {};
          return {
            firstName: firstName || "N/A",
            lastName: lastName || "N/A",
            agId: company.agId,
            _id: company._id,
            message: company.pageStatus?.message || "",
            type: "agent",
          };
        })
      );
    }
  }

  // Combine results
  const combinedResults = [...formattedAgents, ...formattedStudents];

  res.status(200).json({
    data: combinedResults,
    totalCompanies,
    totalStudents,
    totalPages,
    totalStudentPages,
    currentPage: page,
  });
});


const getAgentById = asyncHandler(async (req, res) => {
  // Extract the company ID from the request parameters
  const { id } = req.params;

  // Fetch the company data by its ID
  const company = await Company.findById(id);

  // If no company is found, return an error
  if (!company) {
    return res.status(404).json(
      new ApiResponse({
        statusCode: 404,
        message: "Company not found",
      })
    );
  }

  // Return the company data
  return res.status(200).json(
    new ApiResponse({
      statusCode: 200,
      data: company,
      message: "Company fetched successfully",
    })
  );
});

const getStudentById = asyncHandler(async (req, res) => {
  // Extract the student ID from the request parameters
  const { id } = req.params;

  // Fetch the student data by its ID
  const student = await StudentInformation.findById(id);

  // If no student is found, return a 404 error
  if (!student) {
    return res.status(404).json(
      new ApiResponse({
        statusCode: 404,
        message: "Student not found",
      })
    );
  }

  // Return the student data with a 200 status
  return res.status(200).json(
    new ApiResponse({
      statusCode: 200,
      data: student,
      message: "Student fetched successfully",
    })
  );
});

const updatePageStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { status, message, type } = req.body; // Extracting status, message, and type from the request body

  // Validate status
  const validStatuses = [
    "completed",
    "rejected",
  ];
  if (!validStatuses.includes(status)) {
    return res
      .status(400)
      .json(
        new ApiResponse(
          400,
          {},
          'Invalid status value. Valid values are: "registering", "inProgress", "completed", "pending", "rejected".'
        )
      );
  }
  // Check the 'type' to determine whether it's a company or student
  let model;
  if (type === "company") {
    model = Company; // Use the Company model
  } else if (type === "student") {
    model = StudentInformation; // Use the StudentInformation model
  } else {
    return res
      .status(400)
      .json(
        new ApiResponse(
          400,
          {},
          "'type' must be either 'company' or 'student'."
        )
      );
  }
   
   const document = await model.findById(id);
  if (!document) {
    return res
      .status(404)
      .json(
        new ApiResponse(
          404,
          {},
          `${type.charAt(0).toUpperCase() + type.slice(1)} not found.`
        )
      );
  }

  document.pageStatus = {
    status,
    message: message || "", 
  };

  let email;
  if(type === 'company') {
    const agentId = await Company.findById(id);
     const agentData = await Agent.findById(agentId.agentId);
     email = agentData.accountDetails.founderOrCeo.email;
     if(status === 'completed'){
      const temp = agentAccountApproved(agentData.accountDetails.primaryContactPerson.name);
     await sendEmail({
      to: email,
      subject:
        "Your Agent Account is Approved Start Managing Your Clients!",
      htmlContent: temp,
    });
  } 


  if(status === 'rejected'){
    console.log('rejected+++++>>>>', "+++++>>>>")
    const temp = agentRegistrationRejected(agentData.accountDetails.primaryContactPerson.name, message)
    await sendEmail({
     to: email,
     subject:
       "Your Agent Account is Rejected Start Managing Your Clients!",
     htmlContent: temp,
   });
 }
  
  }

  if(type === 'student'){
    const studentData = await StudentInformation.findById(id);
     email = studentData.personalInformation.email;
       console.log(email, "++++>>>>>>>>>>");
     if(status === 'completed'){
      const temp = studentAccountApproved(studentData.personalInformation.firstName);
     await sendEmail({
      to: email,
      subject:
        "Your Student Account is Approved!",
      htmlContent: temp,
    });
  } 

     if(status === 'rejected'){
      const temp = studentRegistrationRejected(studentData.personalInformation.firstName, message)
      await sendEmail({
       to: email,
       subject:
         "Your Student Account is Rejected",
       htmlContent: temp,
     });
   }
     
  }



  await document.save();

  let resMessage = "Accepted Approval Status Updated";
  if(status == 'rejected'){
    resMessage="Rejected Approval Status Updated";
  }
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        document,
        resMessage
      )
    );
});

const getCompanyData = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const company = await Company.findById(id);
  if (!company) {
    return res
      .status(404)
      .json(new ApiResponse(404, {}, "No company found for this agent"));
  }

  const agent = await Agent.findById(company.agentId);
  if (!agent) {
    return res.status(404).json(new ApiResponse(404, {}, "Agent not found"));
  }

  const agentEmail = agent.accountDetails?.founderOrCeo?.email || "N/A";
  const agentPhone = agent.accountDetails?.founderOrCeo?.phone || "N/A";

  // Combine company data with agentEmail and agentPhone
  const responseData = {
    ...company.toObject(), // Convert the company document to a plain object
    agentEmail,
    agentPhone,
  };

  // Return the combined data in the response
  return res
    .status(200)
    .json(
      new ApiResponse(200, responseData, "Company data fetched successfully")
    );
});


const getAllStudents = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  const searchQuery = req.query.searchQuery || "";
  const isApproved = req.query.isApproved;

  // Construct a search filter based on searchQuery
  const searchFilter = searchQuery
    ? {
        $or: [
          { "personalInformation.firstName": { $regex: searchQuery, $options: "i" } },
          { "personalInformation.lastName": { $regex: searchQuery, $options: "i" } },
          { "personalInformation.email": { $regex: searchQuery, $options: "i" } },
          { "personalInformation.phone.phone": { $regex: searchQuery, $options: "i" } },
          { stId: { $regex: searchQuery, $options: "i" } },
        ]
      }
    : {};

    if(isApproved){
      searchFilter["pageStatus.status"] = "approved";
    }

  const students = await StudentInformation.find(
    searchFilter,
    {
      _id: 1,
      "personalInformation.firstName": 1,
      "personalInformation.lastName": 1,
      "personalInformation.email": 1,
      "personalInformation.phone.phone": 1,
      stId: 1,
    }
  )
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  const totalDocuments = await StudentInformation.countDocuments(searchFilter);
  const totalPages = Math.ceil(totalDocuments / limit);

  // Set up pagination metadata
  const pagination = {
    currentPage: page,
    previousPage: page > 1 ? page - 1 : null,
    nextPage: page < totalPages ? page + 1 : null,
    totalPages,
    totalDocuments,
  };

  return res.status(200).json(
    new ApiResponse(200, { pagination, data: students }, "Data retrieved successfully")
  );
});

const deleteStudentInformation = asyncHandler(async(req, res)=>{
  const {id} = req.params;
  const student = await StudentInformation.findById(id);
  if (!student) {
    return res.status(404).json(new ApiResponse(404, {}, "Student information not found"));
  }
   
  if(student.studentId){
    const studentData = await Student.findById(student.studentId);
    if(!studentData){
      return res.status(404).json(new ApiResponse(404, {}, "Student not found"));
    }
    if(studentData){
      studentData.deleted = true;
      await studentData.save();
    }
  }

  student.deleted = true;
  await student.save();

  return res.status(200).json(new ApiResponse(200, {},"Student Delete Successfully"))

})

const uploadDocument = asyncHandler(async(req, res)=>{
  const { body: payload } = req;

    const validation = adminDocumentSchema.safeParse(payload);
    if (!validation.success) {
        return res.status(400).json(new ApiResponse(400, {}, validation.error.errors));
    }

    const student = await StudentInformation.findById(payload.studentId);
    if(!student){
      return res.status(404).json(new ApiResponse(404, {}, "Student not found"))
    }

    const newDocument = new adminDocument({
      document: payload.document,
      studentId: payload.studentId,
      documentType: payload.documentType,
      documentName: payload.documentName,
      applicationId: payload.applicationId,
    });
  
    await newDocument.save();
    return res.status(201).json(new ApiResponse(201, newDocument, "Document uploaded successfully"));  
});


const getAllAgent = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  const search = req.query.search || "";
  const isApproved = req.query.isApproved;

  // Step 1: Find Company records matching `agId` search if provided
  const companyFilter = search
    ? { agId: { $regex: search, $options: "i" } }
    : {};

  if(isApproved){
    companyFilter["pageStatus.status"] = "completed";
  }
  const matchingCompanies = await Company.find(companyFilter).select("agentId").lean();
  const matchingAgentIds = matchingCompanies.map((company) => company.agentId);

  // Step 2: Build search filter for `Agent` based on name, email, or matching agent IDs from `Company`
  const agentFilter = {
    $or: [
      { "accountDetails.primaryContactPerson.name": { $regex: search, $options: "i" } },
      { "accountDetails.primaryContactPerson.email": { $regex: search, $options: "i" } },
      { "accountDetails.primaryContactPerson.phone": { $regex: search, $options: "i" } },
      { _id: { $in: matchingAgentIds } }, // Add this to filter by matching agent IDs from Company
    ],
  };

  if(isApproved){
    agentFilter["_id"] = { $in: matchingAgentIds };
  }

  // Step 3: Find agents matching the combined search criteria
  const agents = await Agent.find(agentFilter)
    .select("accountDetails.primaryContactPerson")
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .lean();

  // Step 4: Populate agId for each agent by looking up in the `Company` collection
  const agentData = await Promise.all(
    agents.map(async (agent) => {
      const company = await Company.findOne({ agentId: agent._id }).select("agId").lean();
      return {
        name: agent.accountDetails.primaryContactPerson.name,
        email: agent.accountDetails.primaryContactPerson.email,
        phone: agent.accountDetails.primaryContactPerson.phone,
        id: agent._id || null,
        agId: company?.agId || null,
      };
    })
  );

  const totalAgents = await Agent.countDocuments(agentFilter);
  const totalPages = Math.ceil(totalAgents / limit);

  const pagination = {
    currentPage: page,
    totalPages,
    totalAgents,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
  };

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        agents: agentData,
        pagination,
      },
      "Agents retrieved successfully"
    )
  );
});


const deleteAgent = asyncHandler(async (req, res) => {
  const { agentId } = req.params;
  let email;
  let firstName;
  let userId;

  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const agent = await Agent.findByIdAndUpdate(
      agentId,
      { deleted: true },
      { new: true }
    );


    firstName = agent.accountDetails.primaryContactPerson.name;
    email = agent.accountDetails.founderOrCeo.email; 

    if (!agent) {
      return res.status(404).json({
        success: false,
        message: "Agent not found",
      });
    }

    const company = await Company.findOneAndUpdate(
      { agentId: agentId },
      { deleted: true },
      { new: true }
    );

    userId = company.agId;
    const studentInfoList = await StudentInformation.find({agentId}).session(session);

    for (const studentInfo of studentInfoList) {
      studentInfo.deleted = true;
      await studentInfo.save({session});

      if(studentInfo.studentId) {
        const student = await Student.findById(studentInfo.studentId).session(session);
        if(student) {
          student.deleted = true;
          await student.save({session});
        }
      }
      await Withdrawal.updateMany(
        { userId : studentInfo._id },
        { $set : { deleted: true } },
        { session }
      );

      await Institution.updateMany(
        { studentInformationId: studentInfo._id },
        { $set : { deleted: true } },
        { session }
      );
      
    }

    await Institution.updateMany(
      { userId: agentId },
      { $set : { deleted: true } },
      { session }
    );

    await Ticket.updateMany(
      { createdBy : agentId },
      { $set : { deleted: true } },
      { session }
    );

    await session.commitTransaction();
    session.endSession();

    await sendEmail({
      to: email,
      subject: "Your Account Has Been Deleted – Further Action Required",
      htmlContent: accountDeletedSuccessfully(firstName, userId),
    });

    return res
      .status(200)
      .json(new ApiResponse(200, {}, "Agent and related Information deleted successfully"));
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    console.log(err);
  }
});

const getAllStudentApplications = asyncHandler(async (req, res) => {
  const { searchData, page = 1, limit = 10, submittedBy } = req.query;

  const searchQuery = searchData ? String(searchData) : undefined;
  const skip = (page - 1) * limit; // Calculate skip value for pagination

  // Build the filter
  let filter = searchQuery
    ? {
        $or: [
          { firstName: { $regex: searchQuery, $options: "i" } },
          { lastName: { $regex: searchQuery, $options: "i" } },
          { stId: { $regex: searchQuery, $options: "i" } },
        ],
      }
    : {};

    if (submittedBy) {
      if (submittedBy.toLowerCase() === "agent") {
        filter = {
          ...filter,
          submittedBy: { $ne: "student" },
        };
      } else if (submittedBy.toLowerCase() === "student") {
        filter = {
          ...filter,
          submittedBy: "student",
        };
      }
    }

  const aggregatePipeline = [
    {
      $lookup: {
        from: "institutions",
        localField: "_id",
        foreignField: "studentInformationId",
        as: "institutions",
      },
    },
    {
      $unwind: {
        path: "$institutions",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $project: {
        _id: 1,
        stId: 1,
        agentId: 1,
        "personalInformation.firstName": 1,
        "personalInformation.lastName": 1,
        statusCounts: {
          offerLetterStatus: "$institutions.offerLetter.status",
          gicStatus: "$institutions.gic.status",
          courseFeeApplicationStatus: "$institutions.courseFeeApplication.status",
          visaStatus: "$institutions.visa.status",
        },
      },
    },
    {
      $group: {
        _id: "$_id",
        stId: { $first: "$stId" },
        agentId: { $first: "$agentId" },
        personalInformation: { $first: "$personalInformation" },
        institutionCount: { $sum: 1 },
        underReviewCount: {
          $sum: {
            $sum: [
              { $cond: [{ $eq: ["$statusCounts.offerLetterStatus", "underreview"] }, 1, 0] },
              { $cond: [{ $eq: ["$statusCounts.gicStatus", "underreview"] }, 1, 0] },
              { $cond: [{ $eq: ["$statusCounts.courseFeeApplicationStatus", "underreview"] }, 1, 0] },
              { $cond: [{ $eq: ["$statusCounts.visaStatus", "underreview"] }, 1, 0] },
            ],
          },
        },
        approvedCount: {
          $sum: {
            $sum: [
              { $cond: [{ $eq: ["$statusCounts.offerLetterStatus", "approved"] }, 1, 0] },
              { $cond: [{ $eq: ["$statusCounts.gicStatus", "approved"] }, 1, 0] },
              { $cond: [{ $eq: ["$statusCounts.courseFeeApplicationStatus", "approved"] }, 1, 0] },
              { $cond: [{ $eq: ["$statusCounts.visaStatus", "approved"] }, 1, 0] },
            ],
          },
        },
      },
    },
    {
      $addFields: {
        firstName: "$personalInformation.firstName",
        lastName: "$personalInformation.lastName",
        agentId: { $ifNull: ["$agentId", null] },
      },
    },
    {
      $addFields: {
        agentIdAsObjectId: {
          $cond: {
            if: { $isArray: ["$agentId"] },
            then: { $first: "$agentId" },
            else: { $toObjectId: "$agentId" }
          },
        },
      },
    },
    {
      $lookup: {
        from: "agents",
        localField: "agentIdAsObjectId",
        foreignField: "_id",
        as: "agentDetails",
        pipeline: [
          {
            $project: {
              "accountDetails.primaryContactPerson.name": 1,
            },
          },
        ],
      },
    },
    {
      $addFields: {
        submittedBy: {
          $cond: {
            if: { $gt: [{ $size: "$agentDetails" }, 0] },
            then: { $arrayElemAt: ["$agentDetails.accountDetails.primaryContactPerson.name", 0] },
            else: "student",
          },
        },
      },
    },
    {
      $match: filter,
    },
    {
      $facet: {
        metadata: [{ $count: "totalCount" }],
        data: [
          { $skip: skip },
          { $limit: parseInt(limit) },
          {
            $project: {
              "personalInformation.firstName": 0,
              "personalInformation.lastName": 0,
            },
          },
        ],
      },
    },
  ];

  const result = await StudentInformation.aggregate(aggregatePipeline);


  const totalCount = result[0]?.metadata[0]?.totalCount || 0;
  const data = result[0]?.data || [];
  const totalPages = Math.ceil(totalCount / limit);
  const hasNextPage = page < totalPages;
  const hasPreviousPage = page > 1;

  return res.status(200).json(
    new ApiResponse(200, {
      currentPage: parseInt(page),
      nextPage: hasNextPage ? parseInt(page) + 1 : null,
      previousPage: hasPreviousPage ? parseInt(page) - 1 : null,
      totalPages,
      totalCount,
      data,
    }, "Data retrieved successfully")
  );
});


const updateVisaDetails = async (req, res) => {
  try {
      const { applicationId } = req.params;
      const { visaStamp, ppr } = req.body;

      // Validate input
      if (!visaStamp && !ppr) {
          return res.status(400).json({
              message: "Please provide both field to update: visaStamp and ppr.",
          });
      }

      // Find the Institution record by applicationId and update visa sub-document
      const updatedInstitution = await Institution.findOneAndUpdate(
          { _id: applicationId },
          {
              $set: {
                  "visa.visaStamp": visaStamp,
                  "visa.ppr": ppr,
              },
          },
          { new: true } // Return the updated document
      );

      // Check if the institution was found and updated
      if (!updatedInstitution) {
          return res.status(404).json({
              message: "Institution with the given applicationId not found.",
          });
      }

      res.status(200).json(new ApiResponse(200, {
        visaStamp: updatedInstitution.visa.visaStamp,
        ppr: updatedInstitution.visa.ppr,
    }, "Visa details updated successfully."));
  } catch (error) {
      console.log("Error updating visa details:", error);
      res.status(500).json({
          message: "An error occurred while updating visa details.",
      });
  }
};

// Get Visa Details by applicationId
const getVisaDetails = async (req, res) => {
  try {
    const { applicationId } = req.params;

    // Validate input
    if (!applicationId) {
      return res.status(400).json({
        message: "Application ID is required to fetch visa details.",
      });
    }

    // Find the Institution record by applicationId
    const institution = await Institution.findOne(
      { applicationId },
      { "visa.visaStamp": 1, "visa.ppr": 1 } // Only select visaStamp and ppr fields
    );

    // Check if the institution was found
    if (!institution) {
      return res.status(404).json({
        message: "Institution with the given applicationId not found.",
      });
    }

    // Extract visa details
    const { visaStamp, ppr } = institution.visa;

    res.status(200).json(new ApiResponse(200, {
      visaStamp: updatedInstitution.visa.visaStamp,
      ppr: updatedInstitution.visa.ppr,
  }, "Visa details fetched successfully."));
  } catch (error) {
    console.log("Error fetching visa details:", error);
    res.status(500).json({
      message: "An error occurred while fetching visa details.",
    });
  }
};

const getTotalApplicationOverviewForAdmin = asyncHandler(async(req, res)=>{

  if (req.user.role !== '0' && req.user.role !== '1') {
          return res.status(403).json(new ApiResponse(403, {}, "You are not authorized to view this information"));
      }
  
      const { type, year, month } = req.query;
  
      // Construct filter for the query
      const match = {
          ...(type && type !== 'all' ? { [`${type}.status`]: { $exists: true } } : {}),
      };
  
      // If year and month are provided, set date range
      if (year && month) {
          const startDate = new Date(`${year}-${month}-01T00:00:00Z`);
          const endDate = new Date(startDate);
          endDate.setMonth(endDate.getMonth() + 1); // Move to the first day of the next month
  
          match.createdAt = { $gte: startDate, $lt: endDate };
      }
  
      // Count the total number of applications
      const totalApplications = await Institution.countDocuments(match);
  
      // Count offer letters
      const offerLetterCount = await Institution.countDocuments({
          ...match,
          'offerLetter.status': { $exists: true }
      });
  
      // Count GIC applications
      const gicCount = await Institution.countDocuments({
          ...match,
          'gic.status': { $exists: true }
      });

      const visaCount = await Institution.countDocuments({
          ...match,
          'visa.status': { $exists: true }
      });
  
      // Return the counts in the response
      return res.status(200).json(new ApiResponse(200, {
          totalApplications,
          offerLetterCount,
          gicCount,
          visaCount,
      }, 'Application counts fetched successfully'));
});

const getTotalUsersCount = asyncHandler(async (req, res) => {
  const {
    date,
    userType
  } = req.query;
  const matchFilter = {deleted : false}; 
  if(date) {
    const startOfYear = new Date(`${date}-01-01`);
    const endOfYear = new Date(`${date}-12-31`);
    matchFilter.createdAt = { $gte: startOfYear, $lte: endOfYear };
  }
  if(userType){
    matchFilter.role = userType === "agent" ? "2" : "3";
  }
  const agentMonthlyCounts = await Agent.aggregate([
    {$match : matchFilter},
    {
      $group: {
        _id : {year : {$year : "$createdAt"}, month : {$month : "$createdAt"}},
        count : {$sum : 1},
      }
    },
    {
      $project: {
        _id: 0,
        year: "$_id.year",
        month: "$_id.month",
        count: 1
      }
    },
    {$sort : {year: 1, month: 1}},
  ])
  const studentMonthlyCounts = await Student.aggregate([
    {$match : matchFilter},
    {
      $group: {
        _id : {year : {$year : "$createdAt"}, month : {$month : "$createdAt"}},
        count : {$sum : 1},
      }
    },
    {
      $project: {
        _id: 0,
        year: "$_id.year",
        month: "$_id.month",
        count: 1
      }
    },
    {$sort : {year: 1, month: 1}},
  ])
  const monthlyCounts = {
    agents: agentMonthlyCounts,
    students: studentMonthlyCounts
  }
  return res
    .status(200)
    .json(new ApiResponse(200, monthlyCounts, "user monthly count got successfully"));
});

const getApplicationMonthlyCount = asyncHandler(async (req, res) => {
  const {
    date,
    applicationType
  } = req.query;
  const matchFilter = {deleted: false}; 
  if(date) {
    const startOfYear = new Date(`${date}-01-01`);
    const endOfYear = new Date(`${date}-12-31`);
    matchFilter.createdAt = { $gte: startOfYear, $lte: endOfYear };
  }
  if(applicationType){
    // matchFilter[`${applicationType}.type`] = applicationType;
    matchFilter[`${applicationType}.status`] = { $exists : true};
  }
  const applicationMonthlyCounts = await Institution.aggregate([
    {$match : matchFilter},
    {
      $group: {
        _id : {year : {$year : "$createdAt"}, month : {$month : "$createdAt"}, type : `$${applicationType}.type`},
        count : {$sum : 1},
      }
    },
    {
      $project: {
        _id: 0,
        year: "$_id.year",
        month: "$_id.month",
        applicationType: "$_id.type",
        count: 1
      }
    },
    {$sort : {year: 1, month: 1}},
  ])

  const monthlyCounts = {
    applicationCounts: applicationMonthlyCounts,
  }
  return res
    .status(200)
    .json(new ApiResponse(200, monthlyCounts, "Application monthly count got successfully"));
});

const downloadAllStudentsAsCSV = asyncHandler(async (req, res) => {
  try {
    // Fetch all students from the database
    const students = await StudentInformation.find(
      {deleted : false}, // No filter
      {
        _id: 1,
        "personalInformation.firstName": 1,
        "personalInformation.lastName": 1,
        "personalInformation.email": 1,
        "personalInformation.phone.phone": 1,
        stId: 1,
      }
    ).lean();

    // Prepare data for CSV
    const csvData = students.map((student) => ({
      ID: student._id,
      "First Name": student.personalInformation?.firstName || "",
      "Last Name": student.personalInformation?.lastName || "",
      Email: student.personalInformation?.email || "",
      Phone: student.personalInformation?.phone?.phone || "",
      "Student ID": student.stId || "",
    }));

    const csvDataString = json2csv(csvData, {
      fields: ["ID", "First Name", "Last Name", "Email", "Phone", "Student ID"],
    });

    const folderPath = path.join(__dirname, "..", "csv");
    const filePath = path.join(folderPath, "students.csv");

    // Ensure the folder exists
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }

    // Save the CSV data to a file
    fs.writeFileSync(filePath, csvDataString);

    // Send the CSV file as a response
    res.download(filePath, "students.csv", (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
      }
    });
  } catch (error) {
    console.error("Error downloading students as CSV:", error);
    res.status(500).send("Internal Server Error");
  }
});

const downloadAllAgentsAsCSV = asyncHandler(async (req, res) => {
  try {
    // Fetch all agents from the database
    const agents = await Agent.find({deleted: false})
      .select("accountDetails.primaryContactPerson.name accountDetails.primaryContactPerson.email")
      .lean();

    // Populate `agId` for each agent by looking up in the `Company` collection
    const agentData = await Promise.all(
      agents.map(async (agent) => {
        const company = await Company.findOne({ agentId: agent._id }).select("agId").lean();
        return {
          Name: agent.accountDetails.primaryContactPerson.name || "",
          Email: agent.accountDetails.primaryContactPerson.email || "",
          "Agent ID": company?.agId || "N/A",
        };
      })
    );

    // Prepare the CSV data
    const csvDataString = json2csv(agentData, {
      fields: ["Name", "Email", "Agent ID"],
    });

    const folderPath = path.join(__dirname, "..", "csv");
    const filePath = path.join(folderPath, "agents.csv");

    // Ensure the folder exists
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }

    // Save the CSV data to a file
    fs.writeFileSync(filePath, csvDataString);

    // Send the CSV file as a response
    res.download(filePath, "agents.csv", (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
      }
    });
  } catch (error) {
    console.error("Error downloading agents as CSV:", error);
    res.status(500).send("Internal Server Error");
  }
});

const downloadAllApplicationsAsCSV = asyncHandler(async (req, res) => {
  try {
    // Fetch all applications from the database
    const applications = await Institution.find({deleted : false})
      .select("-__v") // Exclude the `__v` field
      .lean();

    // Transform applications and fetch related data
    const transformedApplications = await Promise.all(
      applications.map(async (app) => {
        const userId = app.userId;
        const userType = app.studentInformationId ? "student" : "agent";

        const result = {
          ApplicationID: app.applicationId || "N/A",
          InstitutionID: app._id || "N/A",
          UserID: userId || "N/A",
          UserType: userType,
          FullName: "N/A",
          AgentName: "N/A",
          Status: "N/A",
          Message: "N/A",
          Type: "N/A", // Whether it's 'offerLetter' or 'gic'
        };

        // Fetch related user data
        const findAgent = await Company.findOne({ agentId: userId }).lean();
        const findStudent =
          !findAgent &&
          (await StudentInformation.findOne({ studentId: userId }).lean());

        result.CustomUserID = findAgent
          ? findAgent.agId
          : findStudent
          ? findStudent.stId
          : null;

        if (findAgent) {
          const agentData = await Agent.findById(userId.toString());
          if (agentData) {
            result.AgentName =
              agentData.accountDetails?.primaryContactPerson?.name || "N/A";
          }
        }

        // Extract status and message from `offerLetter` or `gic`
        if (app.offerLetter?.personalInformation) {
          result.FullName = app.offerLetter.personalInformation.fullName || "N/A";
          result.Type = "offerLetter";
          result.Status = app.offerLetter.status || "N/A";
          result.Message = app.offerLetter.message || "N/A";
        } else if (app.gic?.personalDetails) {
          result.FullName = app.gic.personalDetails.fullName || "N/A";
          result.Type = "gic";
          result.Status = app.gic.status || "N/A";
          result.Message = app.gic.message || "N/A";
        }

        return result;
      })
    );

    // Prepare CSV data
    const csvDataString = json2csv(transformedApplications, {
      fields: [
        "ApplicationID",
        "InstitutionID",
        "UserID",
        "UserType",
        "CustomUserID",
        "FullName",
        "AgentName",
        "Type",
        "Status",
        "Message",
      ],
    });

    const folderPath = path.join(__dirname, "..", "csv");
    const filePath = path.join(folderPath, "applications.csv");

    // Ensure the folder exists
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }

    // Write the CSV data to a file
    fs.writeFileSync(filePath, csvDataString);

    // Send the CSV file as a response
    res.download(filePath, "applications.csv", (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
      }
    });
  } catch (error) {
    console.error("Error downloading applications as CSV:", error);
    res.status(500).send("Internal Server Error");
  }
});

const deleteAdminDocumentByUrl = asyncHandler(async (req, res) => {
  const { fileUrl } = req.body;

  const deletedDocument = await adminDocument.findOneAndDelete({ document: fileUrl});

  if (!deletedDocument) {
      return res.status(404).json(new ApiResponse(404, {}, "Document not found"));
  }

  return res.status(200).json(new ApiResponse(200, {}, "Document deleted successfully"));
});

const getRecievedDocument = asyncHandler(async (req, res) => {

  // Fetch all documents for the given query
  const documents = await adminDocument.find({studentId : req.query.studentId, applicationId: req.query.applicationId}).select("-__v")
      .sort({ createdAt: -1 })
      .lean();

  // Check if documents were found
  if (documents.length === 0) {
      return res.status(404).json(new ApiResponse(404, {}, "No documents found for this user"));
  }

  // Return success response with the list of documents
  return res.status(200).json(new ApiResponse(200, {
      documents,
  }, "Documents retrieved successfully"));
});

export {
  deleteAdminDocumentByUrl,
  getTotalAgentsCount,
  getTotalStudentCount,
  changeStudentInformationStatus,
  changeApplicationStatus,
  getTotalApplicationCount,
  getTotalTicketCount,
  getTotalUserCount,
  getAllDataAgentStudent,
  getAgentById,
  getStudentById,
  updatePageStatus,
  getCompanyData,
  getAllStudents,
  deleteStudentInformation,
  uploadDocument,
  getAllAgent,
  deleteAgent,
  getAllApplications,
  getAllStudentApplications,
  changeApplicationStatusSubadmin,
  changeStudentInformationStatusSubadmin,
  getAllDataAgentStudentForSubadmin,
  getAllApplicationsForSubadmin,
  getTotalApplicationOverviewForAdmin,
  getTotalUsersCount,
  getApplicationMonthlyCount,
  updateVisaDetails,
  getVisaDetails,
  downloadAllStudentsAsCSV,
  downloadAllAgentsAsCSV,
  downloadAllApplicationsAsCSV,
  getRecievedDocument
};
