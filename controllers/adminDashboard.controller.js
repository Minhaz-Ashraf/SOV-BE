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
import { restoreDeletedStatus } from "../helpers/restoreDeletedStatus.js";
import { AirTicketing } from "../models/airTicketingModel.js";
import { Partner } from "../models/Partner.model.js";
import { Admin } from "../models/admin.model.js";
import { getFirstWord } from "../utils/commonFuntions.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get total agents count
const getTotalAgentsCount = asyncHandler(async (req, res) => {
  const { role, residenceAddress, regionData } = req.user;
  const location =
    role === "4" ? residenceAddress?.state : role === "5" ? regionData : null;

  let totalAgent, activeAgentCount;

  if (location && (role === "4" || role === "5")) {
    const companyAgents = await Company.find(
      { deleted: false, "pageStatus.status": "completed" },
      { agentId: 1 }
    );

    const agentIds = companyAgents.map((company) => company.agentId);

    totalAgent = await Agent.countDocuments({
      _id: { $in: agentIds },
      "companyDetails.province": location,
    });

    const fifteenDaysAgo = new Date();
    fifteenDaysAgo.setDate(fifteenDaysAgo.getDate() - 15);

    activeAgentCount = await Agent.countDocuments({
      _id: { $in: agentIds },
      "companyDetails.province": location,
      lastLogin: { $gte: fifteenDaysAgo },
    });
  } else {
    totalAgent = await Company.countDocuments({
      deleted: false,
      "pageStatus.status": "completed",
    });

    const fifteenDaysAgo = new Date();
    fifteenDaysAgo.setDate(fifteenDaysAgo.getDate() - 15);

    activeAgentCount = await Company.countDocuments({
      lastLogin: { $gte: fifteenDaysAgo },
      deleted: false,
      "pageStatus.status": "completed",
    });
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { totalAgent, activeAgentCount },
        "Agent count retrieved successfully"
      )
    );
});

// Get all students count
const getTotalStudentCount = asyncHandler(async (req, res) => {
  const { role, residenceAddress, regionData } = req.user;
  const location =
    role === "4" ? residenceAddress?.state : role === "5" ? regionData : null;
  const agents = await Agent.find({
    "companyDetails.province": location,
  }).select("_id companyDetails.province");

  const agentIds = agents.map((agent) => agent._id.toString());
  const fifteenDaysAgo = new Date();
  fifteenDaysAgo.setDate(fifteenDaysAgo.getDate() - 15);
  let studentCount;
  let activeStudentCount;
  if (role === "4" || role === "5") {
    studentCount = await StudentInformation.countDocuments({
      deleted: false,
      "pageStatus.status": "completed",

      $or: [
        { $and: [{ agentId: { $in: agentIds } }] },
        {
          $and: [
            { studentId: { $exists: true, $ne: null } },
            { "residenceAddress.state": location },
          ],
        },
      ],
    });
    activeStudentCount = await StudentInformation.countDocuments({
      lastLogin: { $gte: fifteenDaysAgo },
      deleted: false,
      "pageStatus.status": "completed",
      "residenceAddress.state": location,
    });
  } else {
    studentCount = await StudentInformation.countDocuments({
      deleted: false,
      "pageStatus.status": "completed",
    });
    activeStudentCount = await StudentInformation.countDocuments({
      lastLogin: { $gte: fifteenDaysAgo },
      deleted: false,
      "pageStatus.status": "completed",
    });
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { studentCount, activeStudentCount },
        "Student count got successfully"
      )
    );
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
    if (status === "completed") {
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
    if (status === "completed") {
      temp = agentAccountApproved(agentName);
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

const changeStudentInformationStatusSubadmin = asyncHandler(
  async (req, res) => {
    const { studentInformationId } = req.params;
    const { status, message, type } = req.body;
    const tokenUser = req.user;

    // Validate that status is provided
    if (!status) {
      return res
        .status(400)
        .json(new ApiResponse(400, {}, "Status is required"));
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
      if (status === "completed") {
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
      if (tokenUser.role === "1") {
        studentInfo.teamId = tokenUser._id;
        studentInfo.teamActivity = new Date();
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
      if (status === "completed") {
        temp = agentAccountApproved(agentName);
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
      if (tokenUser.role === "1") {
        agentInfo.teamId = tokenUser._id;
        agentInfo.teamActivity = new Date();
      }
      if (message) agentInfo.pageStatus.message = message;
      await agentInfo.save();
    }

    // Respond with a success message
    return res
      .status(200)
      .json(new ApiResponse(200, {}, "Status updated successfully"));
  }
);

const getAllApplications = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  const query = { deleted: false };
  const andConditions = [];

  const { residenceAddress, role, regionData } = req.user;
  const location =
    role === "4" ? residenceAddress?.state : role === "5" ? regionData : null;

  // Handle status filter
  if (req.query.status) {
    const validStatuses = ["underreview", "completed", "rejected", "approved"];
    if (!validStatuses.includes(req.query.status)) {
      return res
        .status(400)
        .json(new ApiResponse(400, {}, "Invalid status filter provided."));
    }
    andConditions.push({
      $or: [
        { "offerLetter.status": req.query.status },
        { "courseFeeApplication.status": req.query.status },
        { "visa.status": req.query.status },
      ],
    });
  }

  // Handle search query
  if (req.query.searchQuery) {
    const regex = { $regex: req.query.searchQuery, $options: "i" };
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

  // Handle date filter
  if (req.query.date) {
    const exactDate = new Date(req.query.date);
    const startOfDay = new Date(exactDate.setHours(0, 0, 0, 0));
    const endOfDay = new Date(exactDate.setHours(23, 59, 59, 999));
    andConditions.push({ createdAt: { $gte: startOfDay, $lte: endOfDay } });
  }
  if (role === "4" || role === "5") {
    const agentIds = await Agent.find({
      "companyDetails.province": location,
      role: "2",
      deleted: false,
    }).distinct("_id");

    const studentIds = await StudentInformation.find({
      studentId: { $exists: true },
      "residenceAddress.state": location,
      deleted: false,
    }).distinct("studentId");

    const matchedStudents = await StudentInformation.find({
      $or: [{ studentId: { $in: studentIds } }, { agentId: { $in: agentIds } }],
    }).lean();

    const extractedIds = matchedStudents.map((student) =>
      student.agentId
        ? student.agentId.toString()
        : student.studentId.toString()
    );

    const institutions = await Institution.find({
      $or: [{ userId: { $in: extractedIds } }],
      deleted: false,
    })
      .select("userId studentInformationId")
      .lean();

    const institutionUserIds = institutions.map((inst) => inst.userId);
    const institutionStudentIds = institutions
      .map((inst) => inst.studentInformationId)
      .filter(Boolean);

    andConditions.push({
      $or: [
        { userId: { $in: institutionUserIds } },
        { studentInformationId: { $in: institutionStudentIds } },
      ],
    });
  }

  if (andConditions.length > 0) {
    query.$and = andConditions;
  }

  const applications = await Institution.find(query)
    .select("-__v")
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit + 1)
    .lean();
  // console.log(applications)
  const totalApplications = await Institution.countDocuments(query);
  const partners = await Admin.find({ role: 4 })
    .select("firstName lastName residenceAddress.state")
    .lean();
  const mappedData = new Map();
  partners.forEach((partner) => {
    const stateKey = String(partner.residenceAddress?.state || "")
      .trim()
      .toLowerCase();
    const fullName = `${partner.firstName} ${getFirstWord(partner.lastName)}`;

    if (stateKey) {
      mappedData.set(stateKey, fullName);
    } 
  });

  const transformedApplications = await Promise.all(
    applications.map(async (app) => {
      const userId = app.userId;
      const userType = app.studentInformationId ? "student" : "agent";
      const studentMongooseId = app.studentInformationId;
      const referredBy =
        mappedData.get(
          String(app.refferedLocation || "")
            .trim()
            .toLowerCase()
        ) || "Direct";

      const result = {
        userId,
        userType,
        referredBy,
        institutionId: app._id,
        applicationId: app.applicationId,
        status: null,
        message: null,
        agentName: null,
        institution: null,
        studentInformationId: studentMongooseId,
        createdAt: app.teamActivity,
      };

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
        result.agentName = findAgent.primaryContact?.firstName || null;
      }

      const studentData = await StudentInformation.findOne({
        _id: studentMongooseId,
      }).lean();
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
  const { tokenUser, residenceAddress, regionData } = req.user;
  const location =
    role === "4" ? residenceAddress?.state : role === "5" ? regionData : null;
  const { teamId } = req.params;
  let query = {};

  const andConditions = [];

  if (!teamId && !tokenUser) {
    return res.status(401).json(new ApiResponse(401, {}, "Unauthorized"));
  }

  if (tokenUser.role === "1") {
    query = { teamId: tokenUser._id };
  }
  if (teamId) {
    query = { teamId: teamId };
  }

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

  if (req.query.date) {
    const exactDate = new Date(req.query.date);
    const startOfDay = new Date(exactDate.setHours(0, 0, 0, 0));
    const endOfDay = new Date(exactDate.setHours(23, 59, 59, 999));

    andConditions.push({
      teamActivity: { $gte: startOfDay, $lte: endOfDay },
    });
  }

  // Apply andConditions if both filters are present
  if (andConditions.length > 0) {
    query.$and = andConditions;
  }

  // Fetch paginated applications with applied filters
  const applications = await Institution.find(query)
    .select("-__v") // Exclude __v field
    .sort({ teamActivity: -1 })
    .skip(skip)
    .limit(limit + 1)
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
        studentInformationId: studentMongooseId,
        createdAt: app?.teamActivity,
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
        (req.query.userType === "agent" &&
          !result.customUserId?.startsWith("AG")) ||
        (req.query.userType === "student" &&
          !result.customUserId?.startsWith("ST"))
      ) {
        return null; // Skip this iteration if it doesn't match the criteria
      }

      if (findAgent) {
        const agentData = await Company.findOne({ agentId: userId });
        if (agentData) {
          result.agentName = agentData.primaryContact?.firstName || null;
        }
      }
      const studentData = await StudentInformation.findOne({
        _id: studentMongooseId,
      }).lean();
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
          studentId
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
      const temp = studentCourseFeeApprovedTemp(firstName);
      await sendEmail({
        to: email,
        subject: " Course Fee Application Approved ",
        htmlContent: temp,
      });
      if (findAgent) {
        const temp = courseFeeAgentApplicationApproved(
          findAgent.accountDetails.primaryContactPerson.name,
          firstName,
          studentId
        );
        await sendEmail({
          to: findAgent.accountDetails.founderOrCeo.email,
          subject: ` Course Fee Application Approved `,
          htmlContent: temp,
        });
      }
    } else if (status === "rejected") {
      const temp = studentCourseFeeRejectedTemp(firstName, message);
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
          studentId
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
          htmlContent: studentVisaApprovedTemp(
            firstName,
            institution?.visa?.country || ""
          ),
        });

        // Email to agent (if available)
        if (findAgent) {
          const temp = visaAgentApplicationApproved(
            findAgent.accountDetails.primaryContactPerson.name,
            institution?.visa?.country || "",
            message,
            firstName,
            studentId
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
          htmlContent: studentEmbassyVisaApprovedTemp(
            firstName,
            institution?.visa?.country || ""
          ),
        });

        // Email to agent (if available)
        if (findAgent) {
          const temp = visaAgentEmbassyApplicationApproved(
            findAgent.accountDetails.primaryContactPerson.name,
            institution?.visa?.country || "",
            firstName,
            studentId
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
          htmlContent: studentVisaRejectedTemp(
            firstName,
            institution?.visa?.country || "",
            message
          ),
        });

        // Email to agent (if available)
        if (findAgent) {
          const temp = visaAgentApplicationRejected(
            findAgent.accountDetails.primaryContactPerson.name,
            institution?.visa?.country || "",
            message,
            firstName,
            studentId
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
          htmlContent: studentEmbassyVisaRejectedTemp(
            firstName,
            institution?.visa?.country || "",
            message
          ),
        });

        // Email to agent (if available)
        if (findAgent) {
          const temp = visaAgentEmbassyApplicationRejected(
            findAgent.accountDetails.primaryContactPerson.name,
            institution?.visa?.country || "",
            message,
            firstName,
            studentId
          );
          await sendEmail({
            to: findAgent.accountDetails.founderOrCeo.email,
            subject: "Visa Application Rejected by Embassy",
            htmlContent: temp,
          });
        }
        break;

      default:
        console.log("status provided wont have email procedure applied");
    }
  } else {
    return res
      .status(400)
      .json(new ApiResponse(400, {}, "Invalid section provided"));
  }

  // Save the updated institution data
  await institution.save();

  // Return success response
  let resMessage = "Accepted Application Status Updated";
  if (status == "rejected") {
    resMessage = "Rejected Application Status Updated";
  }

  return res
    .status(200)
    .json(new ApiResponse(200, { institution }, resMessage));
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
          studentId
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
      const temp = studentCourseFeeApprovedTemp(firstName);
      await sendEmail({
        to: email,
        subject: " Course Fee Application Approved ",
        htmlContent: temp,
      });
      if (findAgent) {
        const temp = courseFeeAgentApplicationApproved(
          findAgent.accountDetails.primaryContactPerson.name,
          firstName,
          studentId
        );
        await sendEmail({
          to: findAgent.accountDetails.founderOrCeo.email,
          subject: ` Course Fee Application Approved `,
          htmlContent: temp,
        });
      }
    } else if (status === "rejected") {
      const temp = studentCourseFeeRejectedTemp(firstName, message);
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
          studentId
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
          htmlContent: studentVisaApprovedTemp(
            firstName,
            institution?.visa?.country || ""
          ),
        });

        // Email to agent (if available)
        if (findAgent) {
          const temp = visaAgentApplicationApproved(
            findAgent.accountDetails.primaryContactPerson.name,
            institution?.visa?.country || "",
            message,
            firstName,
            studentId
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
          htmlContent: studentEmbassyVisaApprovedTemp(
            firstName,
            institution?.visa?.country || ""
          ),
        });

        // Email to agent (if available)
        if (findAgent) {
          const temp = visaAgentEmbassyApplicationApproved(
            findAgent.accountDetails.primaryContactPerson.name,
            institution?.visa?.country || "",
            firstName,
            studentId
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
          htmlContent: studentVisaRejectedTemp(
            firstName,
            institution?.visa?.country || "",
            message
          ),
        });

        // Email to agent (if available)
        if (findAgent) {
          const temp = visaAgentApplicationRejected(
            findAgent.accountDetails.primaryContactPerson.name,
            institution?.visa?.country || "",
            message,
            firstName,
            studentId
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
          htmlContent: studentEmbassyVisaRejectedTemp(
            firstName,
            institution?.visa?.country || "",
            message
          ),
        });

        // Email to agent (if available)
        if (findAgent) {
          const temp = visaAgentEmbassyApplicationRejected(
            findAgent.accountDetails.primaryContactPerson.name,
            institution?.visa?.country || "",
            message,
            firstName,
            studentId
          );
          await sendEmail({
            to: findAgent.accountDetails.founderOrCeo.email,
            subject: "Visa Application Rejected by Embassy",
            htmlContent: temp,
          });
        }
        break;

      default:
        console.log("status provided wont have email procedure applied");
    }
  } else {
    return res
      .status(400)
      .json(new ApiResponse(400, {}, "Invalid section provided"));
  }

  if (tokenUser.role === "1") {
    institution.teamId = tokenUser._id;
    institution.teamActivity = new Date();
  }

  // Save the updated institution data
  await institution.save();

  // Return success response
  let resMessage = "Accepted Application Status Updated";
  if (status == "rejected") {
    resMessage = "Rejected Application Status Updated";
  }

  return res
    .status(200)
    .json(new ApiResponse(200, { institution }, resMessage));
});

const getTotalApplicationCount = asyncHandler(async (req, res) => {
  try {
    const { role, residenceAddress, regionData } = req.user;
    const location =
      role === "4" ? residenceAddress?.state : role === "5" ? regionData : null;
    let baseMatch = { deleted: false };

    if (role === "4" || role === "5") {
      const agentIds = await Agent.find({
        "companyDetails.province": { $regex: location, $options: "i" },
        role: "2",
        deleted: false,
      }).distinct("_id");

      const studentIds = await StudentInformation.find({
        studentId: { $exists: true },
        "residenceAddress.state":  { $regex: location, $options: "i" },
        deleted: false,
      }).distinct("studentId");

      const matchedStudents = await StudentInformation.find({
        $or: [
          { studentId: { $in: studentIds } },
          { agentId: { $in: agentIds } },
        ],
      }).lean();

      const extractedIds = matchedStudents.map((student) =>
        student.agentId
          ? student.agentId.toString()
          : student.studentId.toString()
      );
      if (extractedIds.length > 0) {
        baseMatch = {
          ...baseMatch,
          userId: { $in: extractedIds },
        };
      } else {
        return res.status(200).json(
          new ApiResponse(
            200,
            {
              totalCount : 0,
              pendingCount : 0,
              approvedCount : 0,
            },
            "Application counts retrieved successfully (Location-wise for Role 4 & 5)"
          )
        );
      }
    }

    const totalCount = await Institution.countDocuments({
      ...baseMatch,
      $or: [
        { "offerLetter.status": { $exists: true } },
        { "visa.status": { $exists: true } },
        { "courseFeeApplication.status": { $exists: true } },
      ],
    });

    const pendingCount = await Institution.countDocuments({
      ...baseMatch,
      $or: [
        { "offerLetter.status": "underreview" },
        { "visa.status": "underreview" },
        { "courseFeeApplication.status": "underreview" },
      ],
    });

    const approvedCount = await Institution.countDocuments({
      ...baseMatch,
      $or: [
        { "offerLetter.status": "approved" },
        { "visa.status": "approved" },
        { "courseFeeApplication.status": "approved" },
      ],
    });

    return res.status(200).json(
      new ApiResponse(
        200,
        {
          totalCount,
          pendingCount,
          approvedCount,
        },
        "Application counts retrieved successfully (Location-wise for Role 4 & 5)"
      )
    );
  } catch (error) {
    console.error("Error fetching application counts:", error);
    return res
      .status(500)
      .json(new ApiResponse(500, {}, "Internal server error"));
  }
});

const getTotalTicketCount = asyncHandler(async (req, res) => {
  const totalCount = await Ticket.countDocuments({ deleted: false });

  const pendingCount = await Ticket.countDocuments({
    status: "underreview",
    deleted: false,
  });

  const approvedCount = await Ticket.countDocuments({
    status: "resolved",
    deleted: false,
  });

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        totalCount,
        pendingCount,
        approvedCount,
      },
      "Ticket counts retrieved successfully"
    )
  );
});

const getTotalUserCount = asyncHandler(async (req, res) => {
  const { year } = req.query;

  let dateFilter = { deleted: false };
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
  const { residenceAddress, role, regionData } = req.user;
  const location =
    role === "4" ? residenceAddress?.state : role === "5" ? regionData : null;
  if (status === "notapproved") {
    statusCheck = ["notapproved", "requestedForReapproval"];
  } else {
    statusCheck = [status];
  }

  let formattedAgents = [];
  let formattedStudents = [];
  let totalCompanies = 0;
  let totalStudents = 0;
  let totalPages = 0;
  let totalStudentPages = 0;
  let agentStringIds =[];
  let startOfDay;
  let endOfDay;

  if (date) {
    const exactDate = new Date(date);
    startOfDay = new Date(exactDate.setHours(0, 0, 0, 0));
    endOfDay = new Date(exactDate.setHours(23, 59, 59, 999));
  }

  let agentCondition = {};
  let studentCondition = {};

  if (role === "4" || role === "5") {
    if (location) {
      let agentStringIds = [];
      const agentIds  = await Agent.find({
        "companyDetails.province": { $eq: location },
        role: "2",
      }).distinct("_id");
      agentStringIds = [...agentIds].map(id => id.toString());

      agentCondition.agentId = { $in: agentStringIds };
      studentCondition.$or = [
        {
          $and: [
            { studentId: { $exists: true } },
            { "residenceAddress.state": { $regex: location, $options: "i" } },
          ],
        },
        { agentId: { $in: agentStringIds } },
      ];
    }
  }

  const searchCondition = {
    ...agentCondition,
    ...(search
      ? {
          $or: [
            { "primaryContact.firstName": new RegExp(search, "i") },
            { "primaryContact.lastName": new RegExp(search, "i") },
            { agId: new RegExp(search, "i") },
          ],
        }
      : {}),
    ...(status ? { "pageStatus.status": { $in: statusCheck } } : {}),
    ...(date && { createdAt: { $gte: startOfDay, $lte: endOfDay } }),
    pageCount: 6,
    deleted: false,
  };

  const studentSearchCondition = {
    ...studentCondition,
    ...(search
      ? {
          $or: [
            { "personalInformation.firstName": new RegExp(search, "i") },
            { "personalInformation.lastName": new RegExp(search, "i") },
            { stId: new RegExp(search, "i") },
          ],
        }
      : {}),
    ...(status ? { "pageStatus.status": { $in: statusCheck } } : {}),
    ...(date && { createdAt: { $gte: startOfDay, $lte: endOfDay } }),
    pageCount: 3,
    deleted: false,
  };

  let agentLimit = Math.ceil(limit / 2);
  let studentLimit = limit - agentLimit;

  let agents = [];
  if (userType === "agent" || !userType) {
    agents = await Company.find(searchCondition)
      .select(
        "primaryContact.firstName primaryContact.lastName agId agentId _id pageStatus createdAt teamActivity"
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
        agentId: company.agentId,
        _id: company._id,
        message: company.pageStatus?.message || "",
        status: company.pageStatus?.status || "",
        createdAt: company?.teamActivity,
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
        "personalInformation.firstName personalInformation.lastName stId _id pageStatus createdAt teamActivity"
      )
      .sort({ createdAt: -1 })
      .skip((page - 1) * studentLimit)
      .limit(studentLimit)
      .lean();

    // console.log(students, studentSearchCondition);

    formattedStudents = students.map((student) => ({
      firstName: student.personalInformation?.firstName || "N/A",
      lastName: student.personalInformation?.lastName || "N/A",
      stId: student.stId,
      _id: student._id,
      message: student.pageStatus?.message || "",
      status: student.pageStatus?.status || "",
      createdAt: student?.teamActivity,
      type: "student",
    }));

    totalStudents = await StudentInformation.countDocuments(
      studentSearchCondition
    );
    totalStudentPages = Math.ceil(totalStudents / studentLimit);
  }

  const combinedResults = [...formattedAgents, ...formattedStudents];

  res.status(200).json({
    data: combinedResults,
    totalCompanies,
    totalStudents,
    totalPages,
    totalStudentPages,
    totalUsers: Number(totalCompanies) + Number(totalStudents) || 0,
    currentPage: page,
  });
});

const getAllDataAgentStudentForSubadmin = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const { search, status, date, userType } = req.query;

  const tokenUser = req.user;
  const { teamId } = req.params;

  if (!teamId && !tokenUser) {
    return res.status(401).json(new ApiResponse(401, {}, "Unauthorized"));
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
    ...(status ? { "pageStatus.status": status } : {}),
    ...(date && { teamActivity: { $gte: startOfDay, $lte: endOfDay } }),
    ...(tokenUser.role === "1" && { teamId: tokenUser._id }),
    ...(teamId && { teamId: teamId }),
    pageCount: 6,
    deleted: false,
  };

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
    ...(status ? { "pageStatus.status": status } : {}),
    ...(date && { teamActivity: { $gte: startOfDay, $lte: endOfDay } }),
    ...(tokenUser.role === "1" && { teamId: tokenUser._id }),
    ...(teamId && { teamId: teamId }),
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
        "primaryContact.firstName primaryContact.lastName agId agentId  _id pageStatus createdAt teamActivity"
      )
      .sort({ teamActivity: -1 })
      .skip((page - 1) * agentLimit)
      .limit(agentLimit)
      .lean();

    formattedAgents = agents.map((company) => {
      const { firstName, lastName } = company.primaryContact || {};
      return {
        firstName: firstName || "N/A",
        lastName: lastName || "N/A",
        agId: company.agId,
        agentId: company.agentId,
        _id: company._id,
        message: company.pageStatus?.message || "",
        status: company.pageStatus?.status || "",
        createdAt: company?.teamActivity,
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
        "personalInformation.firstName personalInformation.lastName stId _id pageStatus createdAt teamActivity"
      )
      .sort({ teamActivity: -1 })
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
      createdAt: student?.teamActivity,
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
      const additionalStudents = await StudentInformation.find(
        studentSearchCondition
      )
        .select(
          "personalInformation.firstName personalInformation.lastName stId _id pageStatus.message createdAt teamActivity"
        )
        .sort({ teamActivity: -1 })
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
          createdAt: student?.teamActivity,
          type: "student",
        }))
      );
    } else if (formattedStudents.length < studentLimit) {
      // Fetch more agents if less students found
      const additionalAgents = await Company.find(searchCondition)
        .select(
          "primaryContact.firstName primaryContact.lastName agId agentId _id pageStatus.message createdAt teamActivity"
        )
        .sort({ teamActivity: -1 })
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
            agentId: company.agentId,
            _id: company._id,
            message: company.pageStatus?.message || "",
            createdAt: company?.teamActivity,
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
    totalUsers: Number(totalCompanies) + Number(totalStudents) || 0,
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
  const tokenUser = req.user;

  // Validate status
  const validStatuses = ["completed", "rejected"];
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
  const session = await mongoose.startSession();
  session.startTransaction();

  let oldStatus = document.pageStatus.status;

  document.pageStatus = {
    status,
    message: message || "",
  };
  if (tokenUser.role === "1") {
    document.teamId = tokenUser._id;
    document.teamActivity = new Date();
  }

  let email;
  if (type === "company") {
    const agentId = await Company.findById(id);
    const agentData = await Agent.findById(agentId.agentId);
    email = agentData.accountDetails.founderOrCeo.email;
    if (status === "completed") {
      const temp = agentAccountApproved(
        agentData.accountDetails.primaryContactPerson.name
      );
      await sendEmail({
        to: email,
        subject: "Your Agent Account is Approved Start Managing Your Clients!",
        htmlContent: temp,
      });
    }

    if (status === "rejected") {
      console.log("rejected+++++>>>>", "+++++>>>>");
      const temp = agentRegistrationRejected(
        agentData.accountDetails.primaryContactPerson.name,
        message
      );
      await sendEmail({
        to: email,
        subject: "Your Agent Account is Rejected Start Managing Your Clients!",
        htmlContent: temp,
      });
    }
  }

  if (type === "student") {
    const studentData = await StudentInformation.findById(id);
    email = studentData.personalInformation.email;
    console.log(email, "++++>>>>>>>>>>");
    if (status === "completed") {
      const temp = studentAccountApproved(
        studentData.personalInformation.firstName
      );
      await sendEmail({
        to: email,
        subject: "Your Student Account is Approved!",
        htmlContent: temp,
      });
    }

    if (status === "rejected") {
      const temp = studentRegistrationRejected(
        studentData.personalInformation.firstName,
        message
      );
      await sendEmail({
        to: email,
        subject: "Your Student Account is Rejected",
        htmlContent: temp,
      });
    }
  }
  if (status === "completed") {
    await restoreDeletedStatus(id, type, session);
  }

  await document.save({ session });
  await session.commitTransaction();
  session.endSession();

  let resMessage = "Accepted Approval Status Updated";
  if (status == "rejected") {
    resMessage = "Rejected Approval Status Updated";
  }
  return res.status(200).json(new ApiResponse(200, document, resMessage));
});

const getCompanyData = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const company = await Company.findOne({ agentId: id });
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
  const { role, residenceAddress, regionData } = req.user;
  const location =
    role === "4" ? residenceAddress?.state : role === "5" ? regionData : null;
 let matchFilter = { deleted: false, updatedAt:-1 };
  if (searchQuery) {
    matchFilter.$or = [
      {
        "personalInformation.firstName": { $regex: searchQuery, $options: "i" },
      },
      {
        "personalInformation.lastName": { $regex: searchQuery, $options: "i" },
      },
      { "personalInformation.email": { $regex: searchQuery, $options: "i" } },
      {
        "personalInformation.phone.phone": {
          $regex: searchQuery,
          $options: "i",
        },
      },
      { stId: { $regex: searchQuery, $options: "i" } },
    ];
  }

  if (isApproved) {
    matchFilter["pageStatus.status"] = "completed";
  }
  let aggregationPipeline = [{ $match: matchFilter }];
  if (role === "4" || role === "5") {
    aggregationPipeline.push(
      {
        $addFields: {
          convertedAgentId: { $toObjectId: "$agentId" },
        },
      },
      {
        $lookup: {
          from: "agents",
          localField: "convertedAgentId",
          foreignField: "_id",
          as: "agentDetails",
        },
      },
      {
        $addFields: {
          agentProvince: {
            $arrayElemAt: ["$agentDetails.companyDetails.province", 0],
          },
        },
      },
      {
        $match: {
          $or: [
            {
              $and: [
                { agentId: { $exists: true, $ne: null } },
                { agentProvince: location },
              ],
            },
            {
              $and: [
                { studentId: { $exists: true, $ne: null } },
                { "residenceAddress.state": location },
              ],
            },
          ],
        },
      }
    );
  }
  aggregationPipeline.push(
    {
      $project: {
        _id: 1,
        "personalInformation.firstName": 1,
        "personalInformation.lastName": 1,
        "personalInformation.email": 1,
        "personalInformation.phone.phone": 1,
        studentId: 1,
        stId: 1,
        agentDetails: 1,
      },
    },
    { $sort: { createdAt: -1 } }
  );

  // Clone the pipeline to count documents properly
  let countPipeline = [...aggregationPipeline, { $count: "totalCount" }];

  const [students, totalCountResult] = await Promise.all([
    StudentInformation.aggregate([
      ...aggregationPipeline,
      { $skip: skip },
      { $limit: limit },
    ]),
    StudentInformation.aggregate(countPipeline),
  ]);

  const totalDocuments =
    totalCountResult.length > 0 ? totalCountResult[0].totalCount : 0;
  const totalPages = Math.ceil(totalDocuments / limit);

  const pagination = {
    currentPage: page,
    previousPage: page > 1 ? page - 1 : null,
    nextPage: page < totalPages ? page + 1 : null,
    totalPages,
    totalDocuments,
  };

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { pagination, data: students },
        "Data retrieved successfully"
      )
    );
});

const deleteStudentInformation = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const student = await StudentInformation.findById(id);
  if (!student) {
    return res
      .status(404)
      .json(new ApiResponse(404, {}, "Student information not found"));
  }

  if (student.studentId) {
    const studentData = await Student.findById(student.studentId);
    if (!studentData) {
      return res
        .status(404)
        .json(new ApiResponse(404, {}, "Student not found"));
    }
    if (studentData) {
      studentData.deleted = true;
      await studentData.save();
    }
  }

  student.deleted = true;
  await student.save();

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Student Delete Successfully"));
});

const uploadDocument = asyncHandler(async (req, res) => {
  const { body: payload } = req;

  const validation = adminDocumentSchema.safeParse(payload);
  if (!validation.success) {
    return res
      .status(400)
      .json(new ApiResponse(400, {}, validation.error.errors));
  }

  const student = await StudentInformation.findById(payload.studentId);
  if (!student) {
    return res.status(404).json(new ApiResponse(404, {}, "Student not found"));
  }

  const newDocument = new adminDocument({
    document: payload.document,
    studentId: payload.studentId,
    documentType: payload.documentType,
    documentName: payload.documentName,
    applicationId: payload.applicationId,
  });

  await newDocument.save();
  return res
    .status(201)
    .json(new ApiResponse(201, newDocument, "Document uploaded successfully"));
});

const getAllAgent = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  const search = req.query.search || "";
  const isApproved = req.query.isApproved;
  const { role, residenceAddress, regionData } = req.user;
  const location =
    role === "4" ? residenceAddress?.state : role === "5" ? regionData : null;

 const baseMatch = {
    deleted: false,
    ...(isApproved && { "pageStatus.status": "completed" }),
     updatedAt: -1
  };


  let agentFilter = [];

  if (role === "4" || role === "5") {
    agentFilter.push(
      {
        $lookup: {
          from: "agents",
          localField: "agentId",
          foreignField: "_id",
          as: "agentDetails",
        },
      },
      { $unwind: { path: "$agentDetails", preserveNullAndEmptyArrays: true } },
      {
        $match: {
          "agentDetails.companyDetails.province": location,
        },
      }
    );
  }

  const pipeline = [
    { $match: baseMatch },
    ...agentFilter,
    {
      $lookup: {
        from: "agents",
        localField: "agentId",
        foreignField: "_id",
        as: "agentData",
      },
    },
    { $unwind: { path: "$agentData", preserveNullAndEmptyArrays: true } },
    {
      $match: {
        $or: [
          { "primaryContact.firstName": { $regex: search, $options: "i" } },
          {
            "agentData.accountDetails.founderOrCeo.email": {
              $regex: search,
              $options: "i",
            },
          },
          {
            "agentData.accountDetails.founderOrCeo.phone": {
              $regex: search,
              $options: "i",
            },
          },
          { agId: { $regex: search, $options: "i" } },
        ],
      },
    },
    {
      $project: {
        _id: "$agentId",
        agentId: "$agentId",
        id: "$agentId",
        agId: "$agId",
        name: "$primaryContact.firstName",
        email: "$agentData.accountDetails.founderOrCeo.email",
        phone: "$agentData.accountDetails.founderOrCeo.phone",
      },
    },
    { $sort: { createdAt: -1 } },
    {
      $facet: {
        total: [{ $count: "count" }],
        data: [{ $skip: skip }, { $limit: limit }],
      },
    },
    {
      $addFields: {
        totalAgents: { $arrayElemAt: ["$total.count", 0] },
      },
    },
  ];

  const result = await Company.aggregate(pipeline);

  const agents = result[0].data;
  const totalAgents = result[0].totalAgents || 0;
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
        agents: agents,
        pagination,
      },
      "Agents retrieved successfully"
    )
  );
});

const deleteAgent = asyncHandler(async (req, res) => {
  const { agentId } = req.params; //agentId
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
    const studentInfoList = await StudentInformation.find({ agentId }).session(
      session
    );

    for (const studentInfo of studentInfoList) {
      studentInfo.deleted = true;
      await studentInfo.save({ session });

      if (studentInfo.studentId) {
        const student = await Student.findById(studentInfo.studentId).session(
          session
        );
        if (student) {
          student.deleted = true;
          await student.save({ session });
        }
      }
      await Withdrawal.updateMany(
        { userId: agentId },
        { $set: { deleted: true } },
        { session }
      );

      await Institution.updateMany(
        { studentInformationId: studentInfo._id },
        { $set: { deleted: true } },
        { session }
      );
    }
    await Withdrawal.updateMany(
      { userId: agentId },
      { $set: { deleted: true } },
      { session }
    );

    await Institution.updateMany(
      { userId: agentId },
      { $set: { deleted: true } },
      { session }
    );

    await Ticket.updateMany(
      { createdBy: agentId },
      { $set: { deleted: true } },
      { session }
    );

    await AirTicketing.updateMany(
      { userId: agentId },
      { $set: { deleted: true } },
      { session }
    );

    await session.commitTransaction();
    session.endSession();

    // await sendEmail({
    //   to: email,
    //   subject: "Your Account Has Been Deleted – Further Action Required",
    //   htmlContent: accountDeletedSuccessfully(firstName, userId),
    // });

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          {},
          "Agent and related Information deleted successfully"
        )
      );
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    console.log(err);
  }
});

const getAllStudentApplications = asyncHandler(async (req, res) => {
  const { searchData, page = 1, limit = 10, submittedBy } = req.query;
  const { role, residenceAddress, regionData } = req.user;
  const location =
    role === "4"
      ? residenceAddress?.state
      : role === "5"
      ? regionData
      : undefined;
  const searchQuery = searchData ? String(searchData) : undefined;
  const skip = (page - 1) * limit;

  let filter = searchQuery
    ? {
        $or: [
          { firstName: { $regex: searchQuery, $options: "i" } },
          { lastName: { $regex: searchQuery, $options: "i" } },
          { stId: { $regex: searchQuery, $options: "i" } },
        ],
        "pageStatus.status": "completed",
        deleted: false,
      }
    : { "pageStatus.status": "completed", deleted: false };

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

  let aggregatePipeline = [
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
        deleted: 1,
        updatedAt: 1,
        createdAt: 1,
        studentId: 1,
        statusCounts: {
          offerLetterStatus: "$institutions.offerLetter.status",
          courseFeeApplicationStatus:
            "$institutions.courseFeeApplication.status",
          visaStatus: "$institutions.visa.status",
        },
        "pageStatus.status": 1,
      },
    },
    {
      $group: {
        _id: "$_id",
        pageStatus: { $first: "$pageStatus" },
        stId: { $first: "$stId" },
        deleted: { $first: "$deleted" },
        updatedAt: { $first: "$updatedAt" },
        createdAt: { $first: "$createdAt" },
        agentId: { $first: "$agentId" },
        studentId: { $first: "$studentId" },
        personalInformation: { $first: "$personalInformation" },
        institutionCount: {
          $sum: {
            $sum: [
              {
                $cond: [
                  { $ifNull: ["$statusCounts.offerLetterStatus", false] },
                  1,
                  0,
                ],
              },
              {
                $cond: [
                  {
                    $ifNull: [
                      "$statusCounts.courseFeeApplicationStatus",
                      false,
                    ],
                  },
                  1,
                  0,
                ],
              },
              {
                $cond: [{ $ifNull: ["$statusCounts.visaStatus", false] }, 1, 0],
              },
            ],
          },
        },
        underReviewCount: {
          $sum: {
            $sum: [
              {
                $cond: [
                  { $eq: ["$statusCounts.offerLetterStatus", "underreview"] },
                  1,
                  0,
                ],
              },
              {
                $cond: [
                  {
                    $eq: [
                      "$statusCounts.courseFeeApplicationStatus",
                      "underreview",
                    ],
                  },
                  1,
                  0,
                ],
              },
              {
                $cond: [
                  { $eq: ["$statusCounts.visaStatus", "underreview"] },
                  1,
                  0,
                ],
              },
            ],
          },
        },
        approvedCount: {
          $sum: {
            $sum: [
              {
                $cond: [
                  { $eq: ["$statusCounts.offerLetterStatus", "approved"] },
                  1,
                  0,
                ],
              },
              {
                $cond: [
                  {
                    $eq: [
                      "$statusCounts.courseFeeApplicationStatus",
                      "approved",
                    ],
                  },
                  1,
                  0,
                ],
              },
              {
                $cond: [
                  { $eq: ["$statusCounts.visaStatus", "approved"] },
                  1,
                  0,
                ],
              },
              {
                $cond: [
                  { $eq: ["$statusCounts.visaStatus", "approvedbyembassy"] },
                  1,
                  0,
                ],
              },
            ],
          },
        },
      },
    },
    {
      $addFields: {
        firstName: "$personalInformation.firstName",
        lastName: "$personalInformation.lastName",
        deleted: "$deleted",
        agentId: { $ifNull: ["$agentId", null] },
      },
    },
    {
      $addFields: {
        agentIdAsObjectId: {
          $cond: {
            if: { $isArray: ["$agentId"] },
            then: { $first: "$agentId" },
            else: { $toObjectId: "$agentId" },
          },
        },
      },
    },
    {
      $lookup: {
        from: "companies",
        localField: "agentIdAsObjectId",
        foreignField: "agentId",
        as: "agentDetails",
        pipeline: [
          {
            $project: {
              "primaryContact.firstName": 1,
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
            then: {
              $arrayElemAt: ["$agentDetails.primaryContact.firstName", 0],
            },
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
          { $sort: { updatedAt: -1 } },
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
  if (role === "4" || role === "5") {
    const agentIds = await Agent.find({
      "companyDetails.province": { $eq: location },
      role: "2",
      deleted: false,
    }).distinct("_id");

    const studentIds = await StudentInformation.find({
      studentId: { $exists: true },
      "residenceAddress.state": { $eq: location },
      deleted: false,
    }).distinct("studentId");

    const combinedIds = [...agentIds].map((id) => id.toString());

    aggregatePipeline.unshift({
      $match: {
        $or: [
          { studentId: { $in: studentIds } },
          { agentId: { $in: combinedIds } },
        ],
      },
    });
  }
  const result = await StudentInformation.aggregate(aggregatePipeline);

  const totalCount = result[0]?.metadata[0]?.totalCount || 0;
  const data = result[0]?.data || [];
  const totalPages = Math.ceil(totalCount / limit);
  const hasNextPage = page < totalPages;
  const hasPreviousPage = page > 1;

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        currentPage: parseInt(page),
        nextPage: hasNextPage ? parseInt(page) + 1 : null,
        previousPage: hasPreviousPage ? parseInt(page) - 1 : null,
        totalPages,
        totalCount,
        data,
      },
      "Data retrieved successfully"
    )
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

    res.status(200).json(
      new ApiResponse(
        200,
        {
          visaStamp: updatedInstitution.visa.visaStamp,
          ppr: updatedInstitution.visa.ppr,
        },
        "Visa details updated successfully."
      )
    );
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

    res.status(200).json(
      new ApiResponse(
        200,
        {
          visaStamp: updatedInstitution.visa.visaStamp,
          ppr: updatedInstitution.visa.ppr,
        },
        "Visa details fetched successfully."
      )
    );
  } catch (error) {
    console.log("Error fetching visa details:", error);
    res.status(500).json({
      message: "An error occurred while fetching visa details.",
    });
  }
};

const getTotalApplicationOverviewForAdmin = asyncHandler(async (req, res) => {
  try {
    const { type, year, month } = req.query;
    const { role, residenceAddress, regionData } = req.user;

    const location =
      role === "4" ? residenceAddress?.state : role === "5" ? regionData : null;

    if (role !== "0" && role !== "1" && role !== "4" && role !== "5") {
      return res
        .status(403)
        .json(
          new ApiResponse(
            403,
            {},
            "You are not authorized to view this information"
          )
        );
    }

    let match = {
      ...(type && type !== "all"
        ? { [`${type}.status`]: { $exists: true } }
        : {}),
      deleted: false,
    };

    // Date filtering
    if (year && month) {
      const startDate = new Date(`${year}-${month}-01T00:00:00Z`);
      const endDate = new Date(startDate);
      endDate.setMonth(endDate.getMonth() + 1);
      match.createdAt = { $gte: startDate, $lt: endDate };
    }

    if (role === "4" || role === "5") {
      const agentIds = await Agent.find({
        "companyDetails.province": location,
        role: "2",
        deleted: false,
      }).distinct("_id");

      const studentIds = await StudentInformation.find({
        studentId: { $exists: true },
        "residenceAddress.state": location,
        deleted: false,
      }).distinct("studentId");

      const matchedStudents = await StudentInformation.find({
        $or: [
          { studentId: { $in: studentIds } },
          { agentId: { $in: agentIds } },
        ],
      }).lean();

      const extractedIds = matchedStudents.map((student) =>
        student.agentId
          ? student.agentId.toString()
          : student.studentId.toString()
      );

      if (extractedIds.length > 0) {
        match = {
          ...match,
          userId: { $in: extractedIds },
        }; // Update baseMatch dynamically
      }else {
        return res.status(200).json(
          new ApiResponse(
            200,
            {
              totalApplications : 0,
              offerLetterCount : 0,
              courseFeeApplication : 0,
              visaCount : 0,
            },
            "Application counts fetched successfully"
          )
        );
      }
    }
    const totalApplications = await Institution.countDocuments(match);

    const offerLetterCount = await Institution.countDocuments({
      ...match,
      "offerLetter.status": { $exists: true },
    });

    const courseFeeApplication = await Institution.countDocuments({
      ...match,
      "courseFeeApplication.status": { $exists: true },
    });

    const visaCount = await Institution.countDocuments({
      ...match,
      "visa.status": { $exists: true },
    });

    return res.status(200).json(
      new ApiResponse(
        200,
        {
          totalApplications,
          offerLetterCount,
          courseFeeApplication,
          visaCount,
        },
        "Application counts fetched successfully"
      )
    );
  } catch (error) {
    console.error("Error fetching application overview:", error);
    return res
      .status(500)
      .json(new ApiResponse(500, {}, "Internal server error"));
  }
});

const getTotalUsersCount = asyncHandler(async (req, res) => {
  const { year, userType } = req.query;
  const { role, residenceAddress, regionData } = req.user;
  const location =
    role === "4" ? residenceAddress?.state : role === "5" ? regionData : null;

  const matchFilter = { deleted: false, "pageStatus.status": "completed" };

  if (year) {
    const startOfYear = new Date(Date.UTC(year, 0, 1)); // 2025-01-01T00:00:00.000Z
    const endOfYear = new Date(Date.UTC(year, 11, 31, 23, 59, 59, 999)); // 2025-12-31T23:59:59.999Z
    matchFilter.createdAt = { $gte: startOfYear, $lte: endOfYear };
  }

  let agentMatchFilter = { ...matchFilter };
  let studentMatchFilter = { ...matchFilter };

  if (role === "4" || role === "5") {
    const agents = await Agent.find({
      "companyDetails.province": location,
    }).select("_id");
    const agentIds = agents.map((agent) => agent._id);
    const agentUsers = await Company.aggregate([
      {
        $lookup: {
          from: "agents",
          localField: "agentId",
          foreignField: "_id",
          as: "companyInfo",
        },
      },
      { $match: { "companyInfo.companyDetails.province": location } },

      { $project: { _id: 1 } },
    ]);
    const filteredAgentIds = agentUsers.map((agent) => agent._id);

    const studentUsers = await StudentInformation.find({
      $or: [
        { $and: [{ agentId: { $in: agentIds } }] },
        {
          $and: [
            { studentId: { $exists: true, $ne: null } },
            { "residenceAddress.state": location },
          ],
        },
      ],
    }).select("_id");

    const filteredStudentIds = studentUsers.map((student) => student._id);

    agentMatchFilter._id = { $in: filteredAgentIds };
    studentMatchFilter._id = { $in: filteredStudentIds };
  }

  const agentMonthlyCounts = await Company.aggregate([
    { $match: agentMatchFilter },
    {
      $group: {
        _id: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } },
        count: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        year: "$_id.year",
        month: "$_id.month",
        count: 1,
      },
    },
    { $sort: { year: 1, month: 1 } },
  ]);
  // console.log(agentMonthlyCounts)
  const studentMonthlyCounts = await StudentInformation.aggregate([
    { $match: studentMatchFilter },
    {
      $group: {
        _id: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } },
        count: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        year: "$_id.year",
        month: "$_id.month",
        count: 1,
      },
    },
    { $sort: { year: 1, month: 1 } },
  ]);

  const monthlyCounts = {};
  if (userType === "agent") {
    monthlyCounts.agents = agentMonthlyCounts;
  } else if (userType === "student") {
    monthlyCounts.students = studentMonthlyCounts;
  } else {
    monthlyCounts.agents = agentMonthlyCounts;
    monthlyCounts.students = studentMonthlyCounts;
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        monthlyCounts,
        "User monthly count retrieved successfully"
      )
    );
});

const getApplicationMonthlyCount = asyncHandler(async (req, res) => {
  try {
    const { year, applicationType } = req.query;
    const { role, residenceAddress, regionData } = req.user;
    const location =
      role === "4" ? residenceAddress?.state : role === "5" ? regionData : null;
    let matchFilter = { deleted: false };

    if (year) {
      const startOfYear = new Date(`${year}-01-01`);
      const endOfYear = new Date(`${year}-12-31`);
      matchFilter.createdAt = { $gte: startOfYear, $lte: endOfYear };
    }

    if (applicationType) {
      matchFilter[`${applicationType}.status`] = { $exists: true };
    }

    if (role === "4" || role === "5") {
      const agentIds = await Agent.find({
        "companyDetails.province": location,
        role: "2",
        deleted: false,
      }).distinct("_id");

      const studentIds = await StudentInformation.find({
        studentId: { $exists: true },
        "residenceAddress.state": location,
        deleted: false,
      }).distinct("studentId");

      const matchedStudents = await StudentInformation.find({
        $or: [
          { studentId: { $in: studentIds } },
          { agentId: { $in: agentIds } },
        ],
      }).lean();

      const extractedIds = matchedStudents.map((student) =>
        student.agentId
          ? student.agentId.toString()
          : student.studentId.toString()
      );
      if (extractedIds.length > 0) {
        matchFilter = {
          ...matchFilter,
          userId: { $in: extractedIds },
        };
      }else {
        return res
        .status(200)
        .json(
          new ApiResponse(
            200,
            { applicationCounts: [] },
            "Application monthly count retrieved successfully (Location-wise for Role 4 & 5)"
          )
        );
      }
    }

    const applicationMonthlyCounts = await Institution.aggregate([
      { $match: matchFilter },
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" },
          },
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          year: "$_id.year",
          month: "$_id.month",
          count: 1,
        },
      },
      { $sort: { year: 1, month: 1 } },
    ]);

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { applicationCounts: applicationMonthlyCounts },
          "Application monthly count retrieved successfully (Location-wise for Role 4 & 5)"
        )
      );
  } catch (error) {
    console.error("Error fetching application monthly counts:", error);
    return res
      .status(500)
      .json(new ApiResponse(500, {}, "Internal server error"));
  }
});

const downloadAllStudentsAsCSV = asyncHandler(async (req, res) => {
  try {
    // Fetch all students from the database
    const students = await StudentInformation.find({ deleted: false }).lean();

    // Prepare data for CSV
    const csvData = students.map((student) => ({
      ID: student._id,
      "First Name": student.personalInformation?.firstName || "",
      "Last Name": student.personalInformation?.lastName || "",
      Email: student.personalInformation?.email || "",
      Phone: student.personalInformation?.phone?.phone || "",
      "Student ID": student.stId || "",
      "Preferred Country": student.preferences?.preferredCountry || "",
      "Preferred State": student.preferences?.preferredState || "",
      "Preferred Program": student.preferences?.preferredProgram || "",
      "Preferred Level of Education":
        student.preferences?.preferredLevelOfEducation || "",
      "Preferred Institution": student.preferences?.preferredInstitution || "",
      "Residence Address": student.residenceAddress?.address || "",
      "Residence Country": student.residenceAddress?.country || "",
      "Residence State": student.residenceAddress?.state || "",
      "Residence City": student.residenceAddress?.city || "",
      "Residence Zipcode": student.residenceAddress?.zipcode || "",
      "Mailing Address": student.mailingAddress?.address || "",
      "Mailing Country": student.mailingAddress?.country || "",
      "Mailing State": student.mailingAddress?.state || "",
      "Mailing City": student.mailingAddress?.city || "",
      "Mailing Zipcode": student.mailingAddress?.zipcode || "",
      "Passport Upload": student.passportDetails?.passportUpload || "",
      "Country of Citizenship":
        student.passportDetails?.countryOfCitizenship || "",
      "Passport Number": student.passportDetails?.passportNumber || "",
      "Passport Expiry Date": student.passportDetails?.expireDate || "",
      "Page Status": student.pageStatus?.status || "",
      "Status Message": student.pageStatus?.message || "",
      Deleted: student.deleted ? "Yes" : "No",
    }));

    const csvDataString = json2csv(csvData, {
      fields: Object.keys(csvData[0]), // Dynamically use keys for column headers
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
    const agents = await Agent.find({ deleted: false }).lean();

    const companyData = await Company.find({
      agentId: { $in: agents.map((agent) => agent._id) },
    }).lean();

    const companyLookup = companyData.reduce((acc, company) => {
      acc[company.agentId] = company;
      return acc;
    }, {});

    // Populate `agId` for each agent by looking up in the `Company` collection
    const agentData = agents.map((agent) => {
      const company = companyLookup[agent._id];

      // Extract all nested schema data
      const companyDetails = company?.companyDetails || {};
      const primaryContact = company?.primaryContact || {};
      const commissionContact = company?.commissionContact || {};
      const admissionsContacts = company?.admissionsContacts || [];
      const bankDetails = company?.bankDetails || {};
      const companyOverview = company?.companyOverview || {};
      const companyOperations = company?.companyOperations || {};
      const references = company?.references || [];

      return {
        "Agent Name": agent.accountDetails?.primaryContactPerson?.name || "",
        "Agent Email": agent.accountDetails?.primaryContactPerson?.email || "",
        "Agent ID": company?.agId || "N/A",
        "Team ID": company?.teamId || "N/A",
        "Business Name": companyDetails.businessName || "N/A",
        "Business Address": companyDetails.address || "N/A",
        "Business Country": companyDetails.country || "N/A",
        "Business Province/State": companyDetails.provinceState || "N/A",
        "Business City": companyDetails.city || "N/A",
        "Business Postal Code": companyDetails.postalCode || "N/A",
        "Business Phone Number": companyDetails.phoneNumber || "N/A",
        "Business Website": companyDetails.website || "N/A",
        "Business LinkedIn": companyDetails.linkedin || "N/A",
        "Business WhatsApp Number": companyDetails.whatsappNumber || "N/A",
        "Primary Contact Name": `${primaryContact.firstName || ""} ${
          primaryContact.lastName || ""
        }`.trim(),
        "Primary Contact Position": primaryContact.positionJobTitle || "N/A",
        "Primary Contact Email": primaryContact.emailUsername || "N/A",
        "Primary Contact Country": primaryContact.country || "N/A",
        "Primary Contact Phone Number": primaryContact.phoneNumber || "N/A",
        "Commission Contact Name": commissionContact.fullName || "N/A",
        "Commission Contact Position":
          commissionContact.positionJobTitle || "N/A",
        "Commission Contact Email": commissionContact.email || "N/A",
        "Commission Contact Phone": commissionContact.phoneNumber || "N/A",
        "Admissions Contacts": admissionsContacts
          .map(
            (contact) => `${contact.fullName} (${contact.destinationCountry})`
          )
          .join("; "),
        "Bank Name": bankDetails.bankName || "N/A",
        "Bank Branch Name": bankDetails.branchName || "N/A",
        "Bank Country": bankDetails.country || "N/A",
        "Bank Province/State": bankDetails.provinceState || "N/A",
        "Bank Address": bankDetails.address || "N/A",
        "Bank City": bankDetails.city || "N/A",
        "Bank Postal Code": bankDetails.postalCode || "N/A",
        "Bank SWIFT/BIC Code": bankDetails.swiftBicCode || "N/A",
        "Bank Sort Code": bankDetails.sortCode || "N/A",
        "Bank Account Name": bankDetails.bankAccountName || "N/A",
        "Bank Account Number": bankDetails.bankAccountNumber || "N/A",
        "Bank IBAN": bankDetails.iban || "N/A",
        "Operation Start Year":
          companyOverview.businessOperationStartYear || "N/A",
        "Number of Students": companyOverview.numberOfStudents || "N/A",
        "Popular Destinations":
          companyOverview.popularDestinations?.join(", ") || "N/A",
        "Student Source Country": companyOverview.studentSourceCountry || "N/A",
        "Government Licensed": companyOverview.governmentLicensed || "N/A",
        "Business Registration Number":
          companyOverview.businessRegistrationNumber || "N/A",
        "Business Registration Type":
          companyOverview.businessRegistrationType || "N/A",
        "Business Registration Document":
          companyOverview.businessRegistrationDocument || "N/A",
        "Company PAN": companyOverview.companyPan || "N/A",
        "Company GST": companyOverview.companyGST || "N/A",
        "Higher Education Programmes":
          companyOverview.higherEducationProgrammes?.join(", ") || "N/A",
        "Finance Sources": companyOverview.financeSources?.join(", ") || "N/A",
        "Study Destinations":
          companyOverview.studyDestinations?.join(", ") || "N/A",
        "Business Profile Document":
          companyOverview.businessProfileDocument || "N/A",
        "Number of Counselors": companyOperations.numberOfCounselors || "N/A",
        "Average Experience Years":
          companyOperations.averageExperienceYears || "N/A",
        "Advertisement Methods":
          companyOperations.advertisementMethods?.join(", ") || "N/A",
        "Social Media Platforms":
          companyOperations.socialMediaPlatforms?.join(", ") || "N/A",
        "Reference ReferenceType": references[0].referenceType || "N/A",
        "Reference ContactPerson": references[0].contactPerson || "N/A",
        "Reference InstitutionName": references[0].institutionName || "N/A",
        "Reference Designation": references[0].designation || "N/A",
        "Reference Country": references[0].country || "N/A",
        "Reference ContactNumber": references[0].contactNumber || "N/A",
        "Reference Email": references[0].email || "N/A",
        Deleted: company?.deleted ? "Yes" : "No",
      };
    });

    // Prepare the CSV data
    const csvDataString = json2csv(agentData, {
      fields: [
        "Agent Name",
        "Agent Email",
        "Agent ID",
        "Team ID",
        "Business Name",
        "Business Address",
        "Business Country",
        "Business Province/State",
        "Business City",
        "Business Postal Code",
        "Business Phone Number",
        "Business Website",
        "Business LinkedIn",
        "Business WhatsApp Number",
        "Primary Contact Name",
        "Primary Contact Position",
        "Primary Contact Email",
        "Primary Contact Country",
        "Primary Contact Phone Number",
        "Commission Contact Name",
        "Commission Contact Position",
        "Commission Contact Email",
        "Commission Contact Phone",
        "Admissions Contacts",
        "Bank Name",
        "Bank Branch Name",
        "Bank Country",
        "Bank Province/State",
        "Bank Address",
        "Bank City",
        "Bank Postal Code",
        "Bank SWIFT/BIC Code",
        "Bank Sort Code",
        "Bank Account Name",
        "Bank Account Number",
        "Bank IBAN",
        "Operation Start Year",
        "Number of Students",
        "Popular Destinations",
        "Student Source Country",
        "Government Licensed",
        "Business Registration Number",
        "Business Registration Type",
        "Business Registration Document",
        "Company PAN",
        "Company GST",
        "Higher Education Programmes",
        "Finance Sources",
        "Study Destinations",
        "Business Profile Document",
        "Number of Counselors",
        "Average Experience Years",
        "Advertisement Methods",
        "Social Media Platforms",
        "Reference ReferenceType",
        "Reference ContactPerson",
        "Reference InstitutionName",
        "Reference Designation",
        "Reference Country",
        "Reference ContactNumber",
        "Reference Email",
        "Deleted",
      ],
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
    const applications = await Institution.find()
      .select("-__v") // Exclude the `__v` field
      .lean();
    // Transform applications and fetch related data
    const transformedApplications = await Promise.all(
      applications.map(async (app) => {
        const userId = app.userId;
        const userType = app.studentInformationId ? "student" : "agent";

        // Initialize result object with common fields
        const result = {
          ApplicationID: app.applicationId || "N/A",
          // InstitutionID: app._id || "N/A",
          // UserID: userId || "N/A",
          UserType: userType,
          FullName: "N/A",
          AgentName: "N/A",
          // Status: "N/A",
          // Message: "N/A",
          Type: "N/A", // Whether it's 'offerLetter' or 'courseFeeApplication'
          CustomUserID: "N/A",
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

        // Add fields depending on the type of application (offerLetter or courseFeeApplication)
        if (app.offerLetter?.personalInformation) {
          // OfferLetter fields
          result.Type = "offerLetter";
          result.FullName =
            app.offerLetter.personalInformation?.fullName || "N/A";
          // result.Status = app.offerLetter.status || "N/A";
          // result.Message = app.offerLetter.message || "N/A";
          result.offerLetterStatus = app.offerLetter.status || "N/A";
          result.offerLetterMessage = app.offerLetter.message || "N/A";
          // result.offerLetterType = app.offerLetter.type || "N/A";
          result.educationLevel =
            app.offerLetter.educationDetails?.educationLevel || "N/A";
          result.markSheet10 =
            app.offerLetter.educationDetails?.markSheet10 || "N/A";
          result.markSheet12 =
            app.offerLetter.educationDetails?.markSheet12 || "N/A";
          result.markSheetUnderGraduate =
            app.offerLetter.educationDetails?.markSheetUnderGraduate || "N/A";
          result.markSheetPostGraduate =
            app.offerLetter.educationDetails?.markSheetPostGraduate || "N/A";
          result.country = app.offerLetter.preferences?.country || "N/A";
          result.institution =
            app.offerLetter.preferences?.institution || "N/A";
          result.course = app.offerLetter.preferences?.course || "N/A";
          result.intake = app.offerLetter.preferences?.intake || "N/A";
          result.offerLetterPrice =
            app.offerLetter.preferences?.offerLetterPrice || "N/A";
          result.ieltsOverallBand =
            app.offerLetter.ieltsScore?.overallBand || "N/A";
          result.ieltsReading = app.offerLetter.ieltsScore?.reading || "N/A";
          result.ieltsSpeaking = app.offerLetter.ieltsScore?.speaking || "N/A";
          result.ieltsWriting = app.offerLetter.ieltsScore?.writing || "N/A";
          result.ieltsListening =
            app.offerLetter.ieltsScore?.listening || "N/A";
          result.ptesOverallBand = app.offerLetter.ptes?.overallBand || "N/A";
          result.ptesReading = app.offerLetter.ptes?.reading || "N/A";
          result.ptesSpeaking = app.offerLetter.ptes?.speaking || "N/A";
          result.ptesWriting = app.offerLetter.ptes?.writing || "N/A";
          result.ptesListening = app.offerLetter.ptes?.listening || "N/A";
          result.toeflOverallBand = app.offerLetter.toefl?.overallBand || "N/A";
          result.toeflReading = app.offerLetter.toefl?.reading || "N/A";
          result.toeflSpeaking = app.offerLetter.toefl?.speaking || "N/A";
          result.toeflWriting = app.offerLetter.toefl?.writing || "N/A";
          result.toeflListening = app.offerLetter.toefl?.listening || "N/A";
          result.certificateUrls =
            app.offerLetter.certificate?.url.join(", ") || "N/A";
        }

        if (app.courseFeeApplication?.personalDetails) {
          // Course Fee Application fields
          result.Type = "courseFeeApplication";
          result.FullName =
            app.courseFeeApplication.personalDetails?.fullName || "N/A";
          // result.courseFeeInstitution =
          //   app.courseFeeApplication.preferences?.institution || "N/A";
          // result.courseFeeCountry =
          //   app.courseFeeApplication.personalDetails?.address?.country || "N/A";
          // result.courseFeeIntake =
          //   app.courseFeeApplication.preferences?.intake || "N/A";
          // result.courseFeeCourse =
          //   app.courseFeeApplication.preferences?.course || "N/A";
          // result.courseFeeAmount =
          //   app.courseFeeApplication.preferences?.amount || "N/A";

          // Add new fields from schemas
          // Student Documents
          result.studentAadharCard =
            app.courseFeeApplication.studentDocument?.aadharCard || "N/A";
          result.studentPanCard =
            app.courseFeeApplication.studentDocument?.panCard || "N/A";

          // Parent Documents
          result.fatherAadharCard =
            app.courseFeeApplication.parentDocument?.fatherAadharCard || "N/A";
          result.fatherPanCard =
            app.courseFeeApplication.parentDocument?.fatherPanCard || "N/A";
          result.motherAadharCard =
            app.courseFeeApplication.parentDocument?.motherAadharCard || "N/A";
          result.motherPanCard =
            app.courseFeeApplication.parentDocument?.motherPanCard || "N/A";

          // Sibling Documents
          result.siblingAadharCard =
            app.courseFeeApplication.siblingsDocument?.siblingAdharCard ||
            "N/A";
          result.siblingPanCard =
            app.courseFeeApplication.siblingsDocument?.siblingPanCard || "N/A";

          // Offer Letter and Passport
          result.offerLetter =
            app.courseFeeApplication.offerLetterAnsPassport?.offerLetter ||
            "N/A";
          result.passport =
            app.courseFeeApplication.offerLetterAnsPassport?.passport || "N/A";
        }

        if (app.visa?.personalDetails) {
          // Visa fields
          result.Type = "visa";
          // result.visaStatus = app.visa.status || "N/A";
          // result.visaMessage = app.visa.message || "N/A";
          // result.visaType = app.visa.type || "N/A";
          result.FullName = app.visa.personalDetails?.fullName || "N/A";
          result.visaCountry = app.visa.country || "N/A";
          result.visaLoa = app.visa.loa || "N/A";
          result.visaOfferLetter = app.visa.offerLetter || "N/A";
          result.visaGicLetter = app.visa.gicLetter || "N/A";
          result.visaMedical = app.visa.medical || "N/A";
          result.visaPcc = app.visa.pcc || "N/A";
          result.visaPal = app.visa.pal || "N/A";
          result.visaCertificateUrls =
            app.visa.certificate?.join(", ") || "N/A";
          result.visaStamp = app.visa.visaStamp || "N/A";
          result.visaPpr = app.visa.ppr || "N/A";
        }

        return result;
      })
    );

    // Prepare CSV data
    const csvDataString = json2csv(transformedApplications, {
      fields: [
        "ApplicationID",
        // "InstitutionID",
        // "UserID",
        "UserType",
        "CustomUserID",
        "FullName",
        "AgentName",
        "Type",
        // "offerLetterStatus",
        // "offerLetterMessage",
        // "offerLetterType",
        "educationLevel",
        "markSheet10",
        "markSheet12",
        "markSheetUnderGraduate",
        "markSheetPostGraduate",
        "country",
        "institution",
        "course",
        "intake",
        "offerLetterPrice",
        "ieltsOverallBand",
        "ieltsReading",
        "ieltsSpeaking",
        "ieltsWriting",
        "ieltsListening",
        "ptesOverallBand",
        "ptesReading",
        "ptesSpeaking",
        "ptesWriting",
        "ptesListening",
        "toeflOverallBand",
        "toeflReading",
        "toeflSpeaking",
        "toeflWriting",
        "toeflListening",
        "certificateUrls",
        "studentAadharCard",
        "studentPanCard",
        "fatherAadharCard",
        "fatherPanCard",
        "motherAadharCard",
        "motherPanCard",
        "siblingAadharCard",
        "siblingPanCard",
        "offerLetter",
        "passport",
        "visaCountry",
        "visaLoa",
        "visaOfferLetter",
        "visaGicLetter",
        "visaMedical",
        "visaPcc",
        "visaPal",
        "visaCertificateUrls",
        "visaStamp",
        "visaPpr",
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

  const deletedDocument = await adminDocument.findOneAndDelete({
    document: fileUrl,
  });

  if (!deletedDocument) {
    return res.status(404).json(new ApiResponse(404, {}, "Document not found"));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Document deleted successfully"));
});

const getRecievedDocument = asyncHandler(async (req, res) => {
  // Fetch all documents for the given query
  const documents = await adminDocument
    .find({ applicationId: req.query.applicationId })
    .select("-__v")
    .sort({ createdAt: -1 })
    .lean();

  // Check if documents were found
  if (documents.length === 0) {
    return res
      .status(404)
      .json(new ApiResponse(404, {}, "No documents found for this user"));
  }

  // Return success response with the list of documents
  return res.status(200).json(
    new ApiResponse(
      200,
      {
        documents,
      },
      "Documents retrieved successfully"
    )
  );
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
  getRecievedDocument,
};
