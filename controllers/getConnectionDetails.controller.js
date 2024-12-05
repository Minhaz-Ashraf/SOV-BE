import { Admin } from "../models/admin.model.js";
import { Agent } from "../models/agent.model.js";
import { Student } from "../models/student.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { encryptData } from "../utils/EncryptionUtility.js";

const getConnectionDetails = asyncHandler(async (req, res) => {
    const data = req.user;
  
    if (!data) {
      return res.status(401).json(new ApiResponse(401, {}, "Unauthorized"));
    }
  
    let userData;
    if (data.role === "0") { // Admin
      const admin = await Admin.findById(data._id).select("firstName lastName role _id");
      if (!admin) {
        return res.status(404).json(new ApiResponse(404, {}, "Admin not found"));
      }
      userData = {
        name: `${admin.firstName} ${admin.lastName}`,
        role: admin.role,
        _id: admin._id
      };
    } else if (data.role === "2") { // Agent
      const agent = await Agent.findById(data._id).select("primaryContactPerson.name role _id");
      if (!agent) {
        return res.status(404).json(new ApiResponse(404, {}, "Agent not found"));
      }
      userData = {
        name: agent.companyDetails.companyName,
        role: agent.role,
        _id: agent._id
      };
    } else if (data.role === "3") { // Student
      const student = await Student.findById(data._id).select("firstName lastName role _id");
      if (!student) {
        return res.status(404).json(new ApiResponse(404, {}, "Student not found"));
      }
      userData = {
        name: `${student.firstName} ${student.lastName}`,
        role: student.role,
        _id: student._id
      };
    } else {
      return res.status(400).json(new ApiResponse(400, {}, "Invalid role"));
    }
  
    // Encrypt the selected data
    const encryptedData = encryptData(JSON.stringify(userData));
  
    // Sending encrypted connection details as response
    return res.status(200).json(new ApiResponse(200, { encryptedData }, "Connection Details fetched successfully"));
  });

  export default getConnectionDetails;