import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Student } from "../models/student.model.js";
import { Agent } from "../models/agent.model.js";
import { Admin } from "../models/admin.model.js";
import { TeamMember } from "../models/team.model.js";

const verifyJwt = asyncHandler(async (req, res, next) => {
  try {
  
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer", "");
    
    if (!token) {
      return res
        .status(401)
        .json(new ApiResponse(401, {}, "Unauthorized request"));
    }

    const decodeToken = await jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET
    );
    let user;
    if (decodeToken.role === "3") {
      user = await Student.findById(decodeToken.id).select(
        "-password -refreshToken"
      );
    } else if (decodeToken.role === "2") {
      user = await Agent.findById(decodeToken.id).select(
        "-password -refreshToken"
      );
    }

    if (!user) {
      return res
        .status(401)
        .json(new ApiResponse(401, {}, "Invalid accessToken"));
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error)
    return res.status(401).json(new ApiResponse(401, {}, "Unauthorized user"));
  }
});

const verifyAdmin = asyncHandler(async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer", "");

    if (!token) {
      return res
        .status(401)
        .json(new ApiResponse(401, {}, "Unauthorized request"));
    }
     
    const decodeToken = await jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET
    );

    // console.log()
    
    let user;
    if (decodeToken.role === "0") {
      user = await Admin.findById(decodeToken.id).select(
        "-password "
      );
    }else if(decodeToken.role === "1"){
      user = await TeamMember.findById(decodeToken.id).select(
        "-password "
      );
    }

    if (user.role !== "0" && user.role !== "1") {
      return res
        .status(401)
        .json(new ApiResponse(401, {}, "Unauthorized user"));
    }

    if (!user) {
      return res
        .status(401)
        .json(new ApiResponse(401, {}, "Invalid accessToken"));
    }
   
    req.user = user;
    next();
  } catch (error) {
    console.log(error)
    return res.status(401).json(new ApiResponse(401, {}, "Unauthorized user"));
  }
});

export { verifyJwt, verifyAdmin };
