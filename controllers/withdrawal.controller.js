import { Agent } from "../models/agent.model.js";
import { Institution } from "../models/institution.model.js";
import { StudentInformation } from "../models/studentInformation.model.js";
import { Withdrawal } from "../models/withdrawal.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { withdrawalRequestAdmin, withdrawalSuccessfulAgent, withdrawalSuccessfulStudent } from "../utils/mailTemp.js";
import { sendEmail } from "../utils/sendMail.js";
import { withdrawalDetailsSchema } from "../validators/withdrawal.validator.js";
import dotenv from "dotenv";

dotenv.config();

const adminEmails = process.env.ADMIN_EMAIL?.split(',');

  const   withdrawal = asyncHandler(async (req, res) => {
    const { body: payload } = req;
  
    // Validate payload using Zod
    const validation = withdrawalDetailsSchema.safeParse(payload);
    if (!validation.success) {
      const errorMessage = validation.error.errors[0].message;
      return res.status(400).json(new ApiResponse(400, {}, `Validation Error: ${errorMessage}`));
    }
  
    const withdrawalDetails = validation.data;
  
    // Check if the withdrawal record already exists for the user
    const existingWithdrawal = await Withdrawal.findOne({ userId:req.user.id });
  
    // If withdrawal record exists for another user, deny access
    if (existingWithdrawal && existingWithdrawal.userId !== req.user.id) {
      return res.status(403).json(new ApiResponse(403, {}, "Unauthorized: You are not allowed to update this record"));
    }
  
    // Prepare data for saving or updating
    const data = {
      userId: req.user.id,
      studentBankDetails: withdrawalDetails.studentBankDetails,
      parentBankDetails: withdrawalDetails.parentBankDetails,
      documentUpload: withdrawalDetails.documentUpload,
      studentInformationId: withdrawalDetails.studentInformationId,
      appliedFor: withdrawalDetails.appliedFor
    };

    const latestInstitution = await Institution.findOne({ studentInformationId : withdrawalDetails.studentInformationId, "visa.status" : "rejectedbyembassy" })
    .sort({ updatedAt: -1 })
    .exec();

    if (!latestInstitution) {
      return res.status(404).json(new ApiResponse(404, {}, "No Institution record found for the given Student Information ID"));
    }

    // Update the visa status to "withdrawalrequest"
    latestInstitution.visa.status = "withdrawalrequest";
    await latestInstitution.save();

    const studentInfo = await StudentInformation.findById(withdrawalDetails.studentInformationId);
    if (!studentInfo) {
      return res.status(404).json(new ApiResponse(404, {}, "Student information not found"));
    }
  
    const studentName = studentInfo.personalInformation.firstName;
    const studentId = studentInfo.stId;

    // const emailContent = withdrawalRequestAdmin( studentName, studentId, withdrawalDetails.appliedFor );
    // adminEmails?.map(async (adminEmail) =>{
    //   await sendEmail({
    //     to: adminEmail,
    //     subject: `Withdrawal Request - Action Required`,
    //     htmlContent: emailContent,
    //   });
    // })
  
    if (existingWithdrawal) {
      // Update the existing withdrawal record
      const updatedWithdrawal = await Withdrawal.findOneAndUpdate(
        { userId: existingWithdrawal.userId },
        { $set: data },
        { new: true }
      );
  
      return res.status(200).json(new ApiResponse(200, updatedWithdrawal, "Withdrawal details updated successfully"));
    } else {
      // Create a new withdrawal record
      const newWithdrawal = await Withdrawal.create(data);
      return res.status(201).json(new ApiResponse(201, newWithdrawal, "Withdrawal details saved successfully"));
    }
    
  });


  const getWithdrawalDetails = asyncHandler(async (req, res) => {
    // Fetch the withdrawal details for the authenticated user
    const { userId } = req.params;
    
    const withdrawalDetails = await Withdrawal.findOne({ userId });
  
    // If no record is found, return a 404 response
    if (!withdrawalDetails) {
      return res.status(404).json(new ApiResponse(404, {}, "No withdrawal details found for this user"));
    }
  
    // Return the found withdrawal details
    return res.status(200).json(new ApiResponse(200, withdrawalDetails, "Withdrawal details retrieved successfully"));
  });

  

  const setVisaToWithdrawalComplete = asyncHandler(async (req, res) => {
    const { studentInformationId } = req.body;

    if (!studentInformationId) {
      return res.status(400).json(new ApiResponse(400, {}, "Student Information ID is required"));
    }

    const withdrawalDetails = await Withdrawal.findOne({ studentInformationId }).sort({createdAt : -1});

    if (!withdrawalDetails) {
      return res.status(404).json(new ApiResponse(404, {}, "No withdrawal details found for this student information ID"));
    }
  
    // Try to find the agent, but proceed even if not found
    const agent = await Agent.findById(withdrawalDetails.userId);
    const agentName = agent?.accountDetails?.primaryContactPerson?.name || "Unknown Agent";
    const agentEmail = agent?.accountDetails?.founderOrCeo?.email || null;
  
    // Fetch the student information
    const studentInfo = await StudentInformation.findById(studentInformationId);
    if (!studentInfo) {
      return res.status(404).json(new ApiResponse(404, {}, "Student information not found"));
    }
  
    const studentName = studentInfo.personalInformation.firstName;
    const studentId = studentInfo.stId;
    const studentEmail = studentInfo.personalInformation.email;
  
    // Send email to agent
    if(agent && agentEmail){
      const agentEmailContent = withdrawalSuccessfulAgent(agentName, studentName, studentId, withdrawalDetails.appliedFor );
      await sendEmail({
        to: agentEmail,
        subject: "Withdrawal payment transferred successfully",
        htmlContent: agentEmailContent,
      });
    }
  
    // Send email to student
    const studentEmailContent = withdrawalSuccessfulStudent(studentName,withdrawalDetails.appliedFor );
    await sendEmail({
      to: studentEmail,
      subject: "Withdrawal payment transferred successfully",
      htmlContent: studentEmailContent,
    });
  
    if (!studentInformationId) {
      return res.status(400).json(new ApiResponse(400, {}, "Student Information ID is required"));
    }
  
    // Find the document with visa status "withdrawalrequest"
    const institution = await Institution.findOne({
      studentInformationId,
      "visa.status": "withdrawalrequest",
    }).exec();
  
    if (!institution) {
      return res.status(404).json(new ApiResponse(404, {}, "No Institution record with visa status 'withdrawalrequest' found for the given Student Information ID"));
    }
  
    // Update the visa status to "withdrawalcomplete"
    institution.visa.status = "withdrawalcomplete";
    await institution.save();
  
    return res.status(200).json(new ApiResponse(200, institution, "Visa status updated to 'withdrawalcomplete' successfully"));
  });
  
  export {withdrawal, setVisaToWithdrawalComplete, getWithdrawalDetails}