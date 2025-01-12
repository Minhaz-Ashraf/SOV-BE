import { Types } from "mongoose";
import { AirTicketing } from "../models/airTicketingModel.js";
import { Company } from "../models/company.model.js";
import { StudentInformation } from "../models/studentInformation.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

async function generateAirId() {
  const today = new Date();

  const year = today.getUTCFullYear().toString().slice(2); // Last 2 digits of the year
  const month = (today.getMonth() + 1).toString().padStart(2, "0"); // Month with leading zero if necessary
  const day = today.getDate().toString().padStart(2, "0"); // Day with leading zero if necessary

  const baseId = `AIR-${year}${month}${day}`;

  const count = await AirTicketing.countDocuments({
    airId: { $regex: `^${baseId}` },
  }).exec();

  const sequenceNumber = count + 1;

  const sequenceStr = sequenceNumber.toString().padStart(2, "0"); // Ensure it's always 2 digits

  return `${baseId}${sequenceStr}`;
}

export const createAirTicketingRequest = async (req, res) => {
  try {
    const {
      sourceLocation,
      destinationLocation,
      passportDetails,
      pprOrVisaStamp,
      travelDate,
      flightPreference,
      personName
    } = req.body;

    const userType = req.user.role === "2" ? "agent" : "student";
    let userName;
    let userInformationId;
    let customId;

    if(userType === "agent") {
        const userData = await Company.findOne({agentId : req.user._id});
        userInformationId = userData._id;
        userName = userData.primaryContact.firstName + " " + userData.primaryContact.lastName;
        customId = userData.agId;
    }else {
        const userData = await StudentInformation.findOne({studentId : req.user._id});
        userInformationId = userData._id;
        userName = userData.personalInformation.firstName + " " + userData.personalInformation.lastName;
        customId = userData.stId;
    }

    const newRequest = await AirTicketing.create({
      sourceLocation,
      destinationLocation,
      passportDetails,
      pprOrVisaStamp,
      travelDate,
      flightPreference,
      personName,
      userType,
      userName,
      userInformationId,
      userId : req.user._id,
      customId : customId,
      airId: await generateAirId(),
    });

    return res.status(201).json(
      new ApiResponse(
        201,
        newRequest,
        "Air ticketing request created successfully"
      )
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json(
      new ApiResponse(500, null, error.message)
    );
  }
};

export const updateAirTicketingRequest = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedRequest = await AirTicketing.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedRequest) {
      return res.status(404).json(
        new ApiResponse(404, null, "Request not found")
      );
    }

    return res.status(200).json(
      new ApiResponse(
        200,
        updatedRequest,
        "Air ticketing request updated successfully"
      )
    );
  } catch (error) {
    return res.status(500).json(
      new ApiResponse(500, null, error.message)
    );
  }
};

export const replaceAirTicketingRequest = async (req, res) => {
  const { id } = req.params;

  try {
    const {
      sourceLocation,
      destinationLocation,
      passportDetails,
      pprOrVisaStamp,
      travelDate,
      flightPreference,
      personName,
      userType,
      userName,
      userInformationId,
      userId,
    } = req.body;

    const updatedRequest = await AirTicketing.findByIdAndUpdate(
      id,
      {
        sourceLocation,
        destinationLocation,
        passportDetails,
        pprOrVisaStamp,
        travelDate,
        flightPreference,
        personName,
        userType,
        userName,
        userInformationId,
        userId,
      },
      { new: true, overwrite: true, runValidators: true }
    );

    if (!updatedRequest) {
      return res.status(404).json(
        new ApiResponse(404, null, "Request not found")
      );
    }

    return res.status(200).json(
      new ApiResponse(
        200,
        updatedRequest,
        "Air ticketing request replaced successfully"
      )
    );
  } catch (error) {
    return res.status(500).json(
      new ApiResponse(500, null, error.message)
    );
  }
};

export const getAllAirTicketingRequests = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const query = {};
    const andConditions = [];
    
    if (req.query.searchQuery) {
        const regex = { $regex: req.query.searchQuery, $options: "i" };
        if (req.user && req.user.role === '0') {
            andConditions.push({
              $or: [
                { customId: regex },
                { airId: regex },
                { userName: regex },
              ],
            });
        } else {
            andConditions.push({
              airId: regex,
            });
        }
    }

    if (andConditions.length > 0) {
        query.$and = andConditions;
    }

    // console.log(andConditions)

    const requests = await AirTicketing.find(query)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit + 1)
    .lean();

    const totalRecords = await AirTicketing.countDocuments(query);

    // Pagination logic
    const totalPages = Math.ceil(totalRecords / limit);

    const hasNextPage = requests.length > limit;
    const paginatedRequests = hasNextPage ? requests.slice(0, -1) : requests;

    return res.status(200).json(
      new ApiResponse(
        200,
        {
          totalRecords,
          currentPage: page,
          previousPage: page > 1 ? page - 1 : null,
          nextPage: hasNextPage ? page + 1 : null,
          totalPages,
          limit,
          requests: paginatedRequests,
        },
        "Air ticketing requests fetched successfully"
      )
    );
  } catch (error) {
    return res.status(500).json(
      new ApiResponse(500, null, error.message)
    );
  }
};

export const getAirTicketingRequestById = async (req, res) => {
  const { id } = req.params;

  try {
    const request = await AirTicketing.findById(id);

    if (!request) {
      return res.status(404).json(
        new ApiResponse(404, null, "Request not found")
      );
    }

    return res.status(200).json(
      new ApiResponse(
        200,
        request,
        "Air ticketing request fetched successfully"
      )
    );
  } catch (error) {
    return res.status(500).json(
      new ApiResponse(500, null, error.message)
    );
  }
};
