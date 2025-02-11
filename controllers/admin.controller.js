import { Admin } from "../models/admin.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { generateTokens } from "../utils/genrateToken.js";
import {
  changeEmailSchema,
  changePasswordSchema,
  editDataSchema,
  loginSchema,
} from "../validators/admin.validator.js";
import bcrypt from "bcrypt";
import { adminSchema } from "../validators/teamMember.validator.js";
import { TeamMember } from "../models/team.model.js";
import {
  accountCredentialsPartner,
  accountCredentialsPartnerEmployee,
  accountCredentialsPartnerEmployeeUpdate,
  accountCredentialsPartnerUpdate,
  accountCredentialsTeam,
  accountUpdatedTeam,
} from "../utils/mailTemp.js";
import { sendEmail } from "../utils/sendMail.js";
import { Partner } from "./../models/Partner.model.js";
import { ParntnerTeamMember } from "../models/PartnerTeam.model.js";

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
async function generatePartnerId() {
  const today = new Date();

  const year = today.getUTCFullYear().toString().slice(2); // Last 2 digits of the year
  const month = (today.getUTCMonth() + 1).toString().padStart(2, "0"); // Month with leading zero if necessary
  const day = today.getUTCDate().toString().padStart(2, "0"); // Day with leading zero if necessary

  const baseId = `PART-${year}${month}${day}`;

  const matchingCount = await Partner.countDocuments({
    partnerId: { $regex: `^${baseId}` },
    role: "4",
  });

  const newCount = matchingCount + 1;

  const sequenceStr = newCount.toString().padStart(2, "0");

  return `${baseId}${sequenceStr}`;
}
async function generatePartnerTeamId() {
  const today = new Date();

  const year = today.getUTCFullYear().toString().slice(2); // Last 2 digits of the year
  const month = (today.getUTCMonth() + 1).toString().padStart(2, "0"); // Month with leading zero if necessary
  const day = today.getUTCDate().toString().padStart(2, "0"); // Day with leading zero if necessary

  const baseId = `PART-SA-${year}${month}${day}`;

  const matchingCount = await ParntnerTeamMember.countDocuments({
    teamId: { $regex: `^${baseId}` },
    role: "5",
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
  if (payload.role === "1") {
    user = await Admin.findOne({
      email: payload.email.trim().toLowerCase(),
      role: "1",
    });
  } else if (payload.role === "4") {
    user = await Admin.findOne({
      email: payload.email.trim().toLowerCase(),
      role: "4",
    });
  } else if (payload.role === "5") {
    user = await Admin.findOne({
      email: payload.email.trim().toLowerCase(),
      role: "5",
    });
  } else {
    user = await Admin.findOne({
      email: payload.email.trim().toLowerCase(),
      role: "0",
    });
  }
  if (!user) {
    return res.status(404).json(new ApiResponse(404, {}, "User not found"));
  }
  if (user.isDeleted === true) {
    return res
      .status(401)
      .json(new ApiResponse(401, {}, "Your Account Has Been Deleted By Admin"));
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

const changePassword = asyncHandler(async (req, res) => {
  const payload = req.body;
  const validation = changePasswordSchema.safeParse(payload);

  if (req.user.role !== "0") {
    return res.status(403).json(new ApiResponse(403, {}, "Unauthorized"));
  }

  if (!validation.success) {
    return res
      .status(400)
      .json(new ApiResponse(400, {}, validation.error.errors));
  }

  const user = await Admin.findOne({ _id: req.user.id });
  if (!user) {
    return res.status(404).json(new ApiResponse(404, {}, "User not found"));
  }

  const isPasswordValid = await bcrypt.compare(
    payload.oldPassword,
    user.password
  );
  if (!isPasswordValid) {
    return res.status(400).json(new ApiResponse(400, {}, "Invalid password"));
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

const changeAdminEmail = asyncHandler(async (req, res) => {
  const payload = req.body;
  const validation = changeEmailSchema.safeParse(payload);

  if (req.user.role !== "0") {
    return res.status(403).json(new ApiResponse(403, {}, "Unauthorized"));
  }

  if (!validation.success) {
    return res
      .status(400)
      .json(new ApiResponse(400, {}, validation.error.errors));
  }

  const user = await Admin.findOne({ _id: req.user.id });
  if (!user) {
    return res.status(404).json(new ApiResponse(404, {}, "User not found"));
  }

  const isPasswordValid = await bcrypt.compare(payload.password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json(new ApiResponse(400, {}, "Invalid password"));
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

const editProfile = asyncHandler(async (req, res) => {
  const payload = req.body;

  if (req.user.role !== "0") {
    return res.status(403).json(new ApiResponse(403, {}, "Unauthorized"));
  }

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
    .json(
      new ApiResponse(200, updatedAdmin, "Admin data updated successfully")
    );
});

const getProfileData = asyncHandler(async (req, res) => {
  let id;

  if (req.params.teamId && req.params.teamId !== "") {
    id = req.params.teamId;
  } else {
    id = req.user.id;
  }
  const user = await Admin.findById(id).select("-password");

  if (!user) {
    return res.status(404).json(new ApiResponse(404, {}, "user not found"));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, user, "data fetched successfull"));
});

const addTeamMember = asyncHandler(async (req, res) => {
  const payload = req.body;
  const validation = adminSchema.safeParse(payload);
  if (req.user.role !== "0" && req.user.role !== "4") {
    return res.status(403).json(new ApiResponse(403, {}, "Unauthorized"));
  }
  if (!validation.success) {
    return res
      .status(400)
      .json(new ApiResponse(400, {}, validation.error.errors));
  }
  const {
    residenceAddress,
    firstName,
    lastName,
    gender,
    maritalStatus,
    dob,
    email,
    phone,
    profilePicture,
    dateOfJoining,
    password,
    roleType,
    createdBy,
    location,
  } = payload;
  let existingTeamMember;
  if (roleType === "1") {
    existingTeamMember = await TeamMember.findOne({
      email: email.toLowerCase().trim(),
    });
  } else if (roleType === "4") {
    existingTeamMember = await Partner.findOne({
      email: email.toLowerCase().trim(),
    });
  } else if (roleType === "5") {
    existingTeamMember = await ParntnerTeamMember.findOne({
      email: email.toLowerCase().trim(),
    });
  }

  if (existingTeamMember) {
    return res
      .status(409)
      .json(new ApiResponse(409, {}, "Email already in use"));
  }
  const teamId =
    roleType === "1"
      ? await generateTeamMemberId()
      : roleType === "4"
      ? await generatePartnerId()
      : await generatePartnerTeamId();
  let hashedPassword;

  if (password) {
    hashedPassword = password;
  }
  let newTeamMember;

  const ModelCollection =
    roleType === "1"
      ? TeamMember
      : roleType === "4"
      ? Partner
      : ParntnerTeamMember;

  newTeamMember = new ModelCollection({
    role: roleType,
    password: hashedPassword,
    [roleType === "4" ? "partnerId" : "teamId"]: teamId,
    residenceAddress,
    firstName,
    lastName,
    gender,
    maritalStatus,
    dob,
    email,
    phone,
    profilePicture,
    dateOfJoining,
    createdBy,
    regionData: location,
  });
  const savedTeamMember = await newTeamMember.save();
  const partnerData = await Partner.findOne({ _id: createdBy });

  const roleConfig = {
    1: {
      template: accountCredentialsTeam,
      url: "https://sovportal.in/admin/role/auth/login",
      subject: "Portal Account Credentials – Welcome to the Team",
    },
    4: {
      template: accountCredentialsPartner,
      url: "https://sovportal.in/province/login",
      subject: ":Portal Account Credentials – Welcome to the Partner Team",
    },
    5: {
      template: accountCredentialsPartnerEmployee,
      url: "https://sovportal.in/province/login",
      subject: "Portal Account Credentials – Welcome to the Team",
      partnerEmail: partnerData?.email,
      partnerName: partnerData?.firstName,
    },
  };

  if (roleConfig[roleType]) {
    const { template, url, subject, partnerName, partnerEmail } =
      roleConfig[roleType];
    const emailContent = template(
      teamId,
      firstName,
      email,
      password,
      url,
      partnerName,
      partnerEmail
    );

    await sendEmail({
      to: email,
      subject: subject,
      htmlContent: emailContent,
    });
  }

  return res
    .status(201)
    .json(
      new ApiResponse(201, savedTeamMember, "Profile Created successfully")
    );
});

const editTeamMember = asyncHandler(async (req, res) => {
  const { teamID } = req.params;
  const payload = req.body;

  if (req.user.role !== "0" && req.user.role !== "4") {
    return res.status(403).json(new ApiResponse(403, {}, "Unauthorized"));
  }

  // Validate payload against Zod schema
  const validation = adminSchema.safeParse(payload);
  if (!validation.success) {
    return res
      .status(400)
      .json(new ApiResponse(400, {}, validation.error.errors));
  }

  const {
    residenceAddress,
    firstName,
    lastName,
    gender,
    maritalStatus,
    dob,
    phone,
    profilePicture,
    dateOfJoining,
    password,
    createdBy,
    email,
    roleType,
  } = payload;

  try {
    const ModelCollection =
      req.user.role === "0" && req.query.userType === "team"
        ? TeamMember
        : req.user.role === "0" && req.query.userType === "partner"
        ? Partner
        : req.user.role === "4"
        ? ParntnerTeamMember
        : null;
    if (!ModelCollection) {
      return res.status(400).json(new ApiResponse(400, {}, "Invalid role"));
    }

    const existingTeamMember = await ModelCollection.findOne({ _id: teamID });
    if (!existingTeamMember) {
      return res
        .status(404)
        .json(new ApiResponse(404, {}, "Profile not found"));
    }

    if (firstName) existingTeamMember.firstName = firstName;
    if (lastName) existingTeamMember.lastName = lastName;
    if (dob) existingTeamMember.dob = dob;
    if (dateOfJoining) existingTeamMember.dateOfJoining = dateOfJoining;
    if (gender) existingTeamMember.gender = gender;
    if (maritalStatus) existingTeamMember.maritalStatus = maritalStatus;
    if (phone) existingTeamMember.phone = phone;
    if (profilePicture) existingTeamMember.profilePicture = profilePicture;
    if (residenceAddress)
      existingTeamMember.residenceAddress = residenceAddress;
    if (password) existingTeamMember.password = password;
    if (email) {
      const newEmail = email.toLowerCase().trim();
      if (newEmail !== existingTeamMember.email) {
        const emailExists = await ModelCollection.findOne({ email: newEmail });
        if (emailExists) {
          return res
            .status(409)
            .json(new ApiResponse(409, {}, "Email already in use"));
        }
        existingTeamMember.email = newEmail;
      }
    }
    await existingTeamMember.save();

    let partnerData;
    if (req.user.role === "4") {
      partnerData = await Partner.findOne({ _id: createdBy });
    }

    const roleConfig = {
      1: {
        template: accountUpdatedTeam,
        url: "https://sovportal.in/admin/role/auth/login",
        subject: "Your Portal Account Data Updated Successfully",
        teamId: existingTeamMember?.teamId || "",
      },
      4: {
        template: accountCredentialsPartnerUpdate,
        url: "https://sovportal.in/province/login",
        subject: "Partner Account Update - Important Information",
        teamId: existingTeamMember?.partnerId || "",
      },
      5: {
        template: accountCredentialsPartnerEmployeeUpdate,
        url: "https://sovportal.in/province/login",
        subject: "Employee Account Update - Important Information",
        teamId: existingTeamMember?.teamId || "",
      },
    };

    if (roleConfig[roleType]) {
      const {
        template,
        url,

        subject,
      } = roleConfig[roleType];

      const emailContent =
         template(
            existingTeamMember.teamId || existingTeamMember.partnerId,
            existingTeamMember.firstName,
            existingTeamMember.email,
            password,
            url,
            partnerData?.firstName,
            partnerData?.email
          )
      

      await sendEmail({
        to: existingTeamMember.email,
        subject,
        htmlContent: emailContent,
      });
    } else {
      console.warn(`Email not sent - No valid email for role ${req.user.role}`);
    }

    return res
      .status(200)
      .json(new ApiResponse(200, {}, "Profile updated successfully"));
  } catch (error) {
    console.error(" Error updating team member:", error);
    return res
      .status(500)
      .json(
        new ApiResponse(
          500,
          {},
          "An error occurred while updating the team member"
        )
      );
  }
});

const softDeleteTeamMember = asyncHandler(async (req, res) => {
  const { teamID } = req.params;

  if (req.user.role !== "0" && req.user.role !== "4") {
    return res.status(403).json(new ApiResponse(403, {}, "Unauthorized"));
  }
  console.log(req.user.role, req.query.userType);
  try {
    const ModelCollection =
      req.user.role === "0" && req.query.userType === "team"
        ? TeamMember
        : req.user.role === "0" && req.query.userType === "partner"
        ? Partner
        : req.user.role === "4"
        ? ParntnerTeamMember
        : null;
    console.log(ModelCollection);
    const teamMember = await ModelCollection.findOne({ _id: teamID });
    if (!teamMember) {
      return res
        .status(404)
        .json(new ApiResponse(404, {}, "Profile not found"));
    }

    teamMember.isDeleted = true;

    await teamMember.save();

    return res
      .status(200)
      .json(new ApiResponse(200, {}, "Team member soft deleted successfully"));
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(
        new ApiResponse(
          500,
          {},
          "An error occurred while deleting the team member"
        )
      );
  }
});

const getAllTeamMembers = asyncHandler(async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const { role, _id } = req.user;
    const isPartnerRole = role === "4" && _id;
    const Model = isPartnerRole ? ParntnerTeamMember : TeamMember;

    const searchCondition = {
      isDeleted: false,
      $expr: { $eq: ["$role", isPartnerRole ? "5" : "1"] },
    };

    if (isPartnerRole) {
      searchCondition.createdBy = _id;
    }

    if (req.query.searchQuery) {
      const regex = { $regex: req.query.searchQuery, $options: "i" };
      searchCondition.$or = [
        { firstName: regex },
        { lastName: regex },
        { email: regex },
        { phone: regex },
        { teamId: regex },
      ];
    }

    const [totalTeamMembers, teamMembers] = await Promise.all([
      Model.countDocuments(searchCondition),
      Model.find(searchCondition)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
    ]);

    if (!teamMembers.length) {
      return res
        .status(404)
        .json(new ApiResponse(404, {}, "Team members not found"));
    }

    const totalPages = Math.ceil(totalTeamMembers / limit);
    return res.status(200).json(
      new ApiResponse(
        200,
        {
          total: totalTeamMembers,
          currentPage: page,
          previousPage: page > 1 ? page - 1 : null,
          nextPage: page < totalPages ? page + 1 : null,
          totalPages,
          limit,
          teamMembers,
        },
        "Team members fetched successfully"
      )
    );
  } catch (error) {
    console.error("Error fetching team members:", error);
    return res
      .status(500)
      .json(
        new ApiResponse(
          500,
          {},
          "An error occurred while fetching all team members"
        )
      );
  }
});

const getAllPartner = asyncHandler(async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const searchCondition = { role: "4", isDeleted: false };

    if (req.query.searchQuery) {
      const regex = { $regex: req.query.searchQuery, $options: "i" }; // Case-insensitive search

      searchCondition.$or = [
        { firstName: regex },
        { lastName: regex },
        { email: regex },
        { phone: regex },
        { partnerId: regex },
      ];
    }

    const totalTeamMembers = await Partner.countDocuments(searchCondition);
    const totalPages = Math.ceil(totalTeamMembers / limit);
    const teamMembers = await Partner.find(searchCondition)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();
    if (teamMembers.length === 0) {
      return res
        .status(404)
        .json(new ApiResponse(404, {}, "Partner not found"));
    }

    return res.status(200).json(
      new ApiResponse(
        200,
        {
          total: totalTeamMembers,
          currentPage: page,
          previousPage: page > 1 ? page - 1 : null,
          nextPage: page < totalPages ? page + 1 : null,
          totalPages,
          limit,
          teamMembers,
        },
        "Team members fetched successfully"
      )
    );
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(
        new ApiResponse(
          500,
          {},
          "An error occurred while fetchig all team members"
        )
      );
  }
});
const getPartnerEmployees = asyncHandler(async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const { userId } = req.query;
    if (!userId) {
      return res
        .status(400)
        .json(new ApiResponse(400, {}, "User ID is required"));
    }

    const searchCondition = {
      isDeleted: false,
      createdBy: userId,
    };

    if (req.query.searchQuery) {
      const regex = { $regex: req.query.searchQuery, $options: "i" };
      searchCondition.$or = [
        { firstName: regex },
        { lastName: regex },
        { email: regex },
        { phone: regex },
        { teamId: regex },
      ];
    }

    const [totalPartnerEmployee, partnerEmployee] = await Promise.all([
      ParntnerTeamMember.countDocuments(searchCondition),
      ParntnerTeamMember.find(searchCondition)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
    ]);

    if (!partnerEmployee.length) {
      return res
        .status(404)
        .json(new ApiResponse(404, {}, "No employees found"));
    }

    const totalPages = Math.ceil(totalPartnerEmployee / limit);

    return res.status(200).json(
      new ApiResponse(
        200,
        {
          total: totalPartnerEmployee,
          currentPage: page,
          previousPage: page > 1 ? page - 1 : null,
          nextPage: page < totalPages ? page + 1 : null,
          totalPages,
          limit,
          partnerEmployee,
        },
        "Partner employees fetched successfully"
      )
    );
  } catch (error) {
    console.error("Error fetching partner employees:", error);
    return res
      .status(500)
      .json(
        new ApiResponse(
          500,
          {},
          "An error occurred while fetching partner employees"
        )
      );
  }
});
const getProfileDataById = asyncHandler(async (req, res) => {
  const { id } = req.query;
  const user = await Admin.findById(id).select("-password");

  if (!user) {
    return res.status(404).json(new ApiResponse(404, {}, "user not found"));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, user, "data fetched successfull"));
});

export {
  adminLogin,
  changePassword,
  changeAdminEmail,
  editProfile,
  getProfileData,
  softDeleteTeamMember,
  editTeamMember,
  addTeamMember,
  getAllTeamMembers,
  getAllPartner,
  getPartnerEmployees,
  getProfileDataById,
};
