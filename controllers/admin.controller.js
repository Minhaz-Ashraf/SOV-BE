import { Admin } from "../models/admin.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { generateTokens } from "../utils/genrateToken.js";
import { changeEmailSchema, changePasswordSchema, editDataSchema, loginSchema } from "../validators/admin.validator.js";
import bcrypt from "bcrypt";
import { adminSchema } from "../validators/teamMember.validator.js";
import { TeamMember } from "../models/team.model.js";
import { accountCredentialsTeam } from "../utils/mailTemp.js";

async function generateTeamMemberId() {
  const today = new Date();

  const year = today.getUTCFullYear().toString().slice(2); // Last 2 digits of the year
  const month = (today.getUTCMonth() + 1).toString().padStart(2, "0"); // Month with leading zero if necessary
  const day = today.getUTCDate().toString().padStart(2, "0"); // Day with leading zero if necessary

  const baseId = `TM-${year}${month}${day}`;

  const matchingCount = await TeamMember.countDocuments({
    teamId: { $regex: `^${baseId}` },
    role: "1",
  });

  const newCount = matchingCount + 1;

  const sequenceStr = newCount.toString().padStart(2, "0");

  return `${baseId}${sequenceStr}`;
}


const adminLogin = asyncHandler(async (req, res) => {
  const payload = req.body;
  const validation = loginSchema.safeParse(payload);

  if (!validation.success) {
    return res
      .status(400)
      .json(new ApiResponse(400, {}, validation.error.errors));
  }
  let user;
  if(payload.role === "1"){
    user = await TeamMember.findOne({
      email: payload.email.trim().toLowerCase(),
    });
  }else{
    user = await Admin.findOne({
      email: payload.email.trim().toLowerCase(),
    });
  }
  if (!user) {
    return res.status(404).json(404, {}, "User not found");
  }

  const isPasswordValid = await user.isPasswordCorrect(payload.password);
  if (!isPasswordValid) {
    return res.status(400).json(new ApiResponse(400, {}, "Invalid password"));
  }

  const loggedInUser = await Admin.findById(user._id).select("-password");

  let userData = {
    id: user._id,
    email: user.email,
    role: payload.role,
  };

  const { accessToken } = await generateTokens(userData);

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken: accessToken,
        },
        "Admin logged in successfully"
      )
    );
});

const changePassword = asyncHandler(async(req, res)=>{
    const payload = req.body;
    const validation = changePasswordSchema.safeParse(payload);
  
    if (!validation.success) {
      return res
        .status(400)
        .json(new ApiResponse(400, {}, validation.error.errors));
    }

    const user = await Admin.findOne({ _id: req.user.id });
    if (!user ) {
        return res.status(404).json(new ApiResponse(404, {}, "User not found"));
      }
     
      const isPasswordValid = await bcrypt.compare(payload.oldPassword, user.password);
      if(!isPasswordValid){
        return res.status(400).json(
          new ApiResponse(400, {}, "Invalid password")
        )
      }

      const hashPassword = await bcrypt.hash(payload.newPassword, 10);

      await Admin.findOneAndUpdate(
        { _id: req.user.id },
        {
          $set: {
            password: hashPassword,
          },
        },
        { new: true }
      );

      return res
    .status(200)
    .json(new ApiResponse(200, {}, "password updated successfully"));

}); 

const changeAdminEmail = asyncHandler(async(req,res)=>{
    const payload = req.body;
    const validation = changeEmailSchema.safeParse(payload);
  
    if (!validation.success) {
      return res
        .status(400)
        .json(new ApiResponse(400, {}, validation.error.errors));
    }

    const user = await Admin.findOne({ _id: req.user.id });
    if (!user ) {
        return res.status(404).json(new ApiResponse(404, {}, "User not found"));
      }

      const isPasswordValid = await bcrypt.compare(payload.password, user.password);
      if(!isPasswordValid){
        return res.status(400).json(
          new ApiResponse(400, {}, "Invalid password")
        )
      }
     
      await Admin.findOneAndUpdate(
        { _id: req.user.id },
        {
          $set: {
            email: payload.email,
          },
        },
        { new: true }
      );

      const updatedUser = await Admin.findById(user._id).select("-password");
      return res
    .status(200)
    .json(new ApiResponse(200, updatedUser, "email updated successfully"));

});

const editProfile = asyncHandler(async(req, res)=>{
    const payload = req.body;

    // Validate the incoming data
    const validation = editDataSchema.safeParse(payload);
    if (!validation.success) {
      return res
        .status(400)
        .json(new ApiResponse(400, {}, validation.error.errors));
    }
  
    // Find the admin by their user ID (assuming req.user is populated by middleware)
    const admin = await Admin.findOne({ _id: req.user.id });
    if (!admin) {
      return res.status(404).json(new ApiResponse(404, {}, "Admin not found"));
    }
  
    // Update the allowed fields (excluding email and password)
    const updatedData = {
      firstName: payload.firstName,
      lastName: payload.lastName,
      dob: payload.dob,
      phone: payload.phone,
      profilePicture: payload.profilePicture,
      role: payload.role,
    };
  
    // Perform the update
    const updatedAdmin = await Admin.findOneAndUpdate(
      { _id: req.user.id },
      { $set: updatedData },
      { new: true } // Return the updated document
    ).select("-password"); // Exclude the password from the response
  
    return res
      .status(200)
      .json(new ApiResponse(200, updatedAdmin, "Admin data updated successfully"));
  
})

const getProfileData = asyncHandler(async(req, res)=>{
    const id = req.user.id;
    const user = await Admin.findById(id).select("-password");
     
    if(!user){
        return res.status(404).json( new ApiResponse(404, {}, "user not found") );
    }
 
     return res.status(200).json( new ApiResponse(200, user, "data fetched successfull") );
})

const addTeamMember = asyncHandler(async(req, res) =>{
  const payload = req.body;
  const validation = adminSchema.safeParse(payload);
  if (!validation.success) {
    return res
      .status(400)
      .json(new ApiResponse(400, {}, validation.error.errors));
  }
  const {
    firstName,
    lastName,
    email,
    dob,
    phone,
    profilePicture,
    residenceAddress,
    password,
  } = payload;

  const existingTeamMember = await TeamMember.findOne({ email : email.toLowerCase().trim() });
  if (existingTeamMember) {
    return res
      .status(409)
      .json(new ApiResponse(409, {}, "Email already in use"));
  }
  const teamId = await generateTeamMemberId();

  const newTeamMember = new TeamMember({
    firstName,
    lastName,
    email,
    dob,
    phone,
    profilePicture,
    residenceAddress,
    role: "1",
    password,
    teamId,
  });

  const savedTeamMember = await newTeamMember.save();

  const tempemail = accountCredentialsTeam(
    teamId, firstName, email, password, "https://sovportal.in/"
  );
  await sendEmail({
    to: email,
    subject: `Portal Account Credentials – Welcome to the Team`,
    htmlContent: tempemail,
  });

  return res
  .status(201)
  .json(new ApiResponse(201, savedTeamMember, "Team member created successfully"));

})

const editTeamMember = asyncHandler(async (req, res) => {
  const { teamID } = req.params;
  const payload = req.body;

  // Validate payload against Zod schema
  const validation = adminSchema.safeParse(payload);
  if (!validation.success) {
    return res
      .status(400)
      .json(new ApiResponse(400, {}, validation.error.errors));
  }

  const {
    firstName,
    lastName,
    email,
    dob,
    phone,
    profilePicture,
    residenceAddress,
    password,
  } = payload;

  try {
    // Check if the team member exists
    const existingTeamMember = await TeamMember.findOne({ _id: teamID });
    if (!existingTeamMember) {
      return res
        .status(404)
        .json(new ApiResponse(404, {}, "Team member not found"));
    }

    if (email && email.toLowerCase().trim() !== existingTeamMember.email) {
      const emailExists = await TeamMember.findOne({
        email: email.toLowerCase().trim(),
      });
      if (emailExists) {
        return res
          .status(409)
          .json(new ApiResponse(409, {}, "Email already in use"));
      }
    }

    if (firstName) existingTeamMember.firstName = firstName;
    if (lastName) existingTeamMember.lastName = lastName;
    if (email) existingTeamMember.email = email.toLowerCase().trim();
    if (dob) existingTeamMember.dob = dob;
    if (phone) existingTeamMember.phone = phone;
    if (profilePicture) existingTeamMember.profilePicture = profilePicture;
    if (residenceAddress) existingTeamMember.residenceAddress = residenceAddress;

    if (password) {
      existingTeamMember.password = await bcrypt.hash(password, 10);
    }

    const updatedTeamMember = await existingTeamMember.save();

    return res
      .status(200)
      .json(new ApiResponse(200, updatedTeamMember, "Team member updated successfully"));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, {}, "An error occurred while updating the team member"));
  }
});

const softDeleteTeamMember = asyncHandler(async (req, res) => {
  const { teamID } = req.params;

  try {
    const teamMember = await TeamMember.findOne({ _id: teamID });
    if (!teamMember) {
      return res
        .status(404)
        .json(new ApiResponse(404, {}, "Team member not found"));
    }

    teamMember.isDeleted = true;

    await teamMember.save();

    return res
      .status(200)
      .json(new ApiResponse(200, {}, "Team member soft deleted successfully"));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, {}, "An error occurred while deleting the team member"));
  }
});


const getAllTeamMembers = asyncHandler(async (req, res) => {

  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const searchCondition = {role : "1", isDeleted: false};

    if (req.query.searchQuery) {
      const regex = { $regex: req.query.searchQuery, $options: "i" }; // Case-insensitive search

      searchCondition.$or = [
        { firstName: regex },
        { lastName: regex },
        { email: regex },
        { phone: regex },
        { teamId : regex }
      ];
    }

    const totalTeamMembers = await TeamMember.countDocuments(searchCondition);
    const totalPages = Math.ceil(totalDocs / limit);
    const teamMembers = await TeamMember.find(searchCondition)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .lean();
    if (teamMembers.length === 0) {
      return res
        .status(404)
        .json(new ApiResponse(404, {}, "Team members not found"));
    }

    return res
      .status(200)
      .json(new ApiResponse(200, {
        total: totalTeamMembers,
        currentPage: page,
        previousPage: page > 1 ? page - 1 : null,
        nextPage: page < totalPages ? page + 1 : null,
        totalPages,
        limit,
        teamMembers,
      }, "Team members fetched successfully"));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, {}, "An error occurred while deleting the team member"));
  }
});

export { adminLogin, changePassword, changeAdminEmail, editProfile, getProfileData, softDeleteTeamMember, editTeamMember, addTeamMember, getAllTeamMembers };
