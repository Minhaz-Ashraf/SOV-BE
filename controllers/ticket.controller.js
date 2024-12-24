import { Student } from "../models/student.model.js";
import { StudentInformation } from "../models/studentInformation.model.js";
import { Ticket } from "../models/ticket.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import {
  createTicketSchema,
  updateTicketStatusSchema,
} from "../validators/ticket.validator.js";
import mongoose from "mongoose";
import { Company } from "../models/company.model.js";
import { Agent } from "../models/agent.model.js";
import path from "path";
import fs from "fs";
import { parse as json2csv } from "json2csv";
import { agentSideTicketApResolved, studentSideTicketResolved } from "../utils/mailTemp.js";
import { fileURLToPath } from "url";
import { sendEmail } from "../utils/sendMail.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
async function generateTicketId() {
  const today = new Date();

  // Format the date components (DDMMYY)
  const day = today.getDate().toString().padStart(2, "0");
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const year = today.getFullYear().toString().slice(2);

  // Construct the base Ticket ID without the sequence number
  const baseId = `TK-${year}${month}${day}`;

  // Find the last created ticket with a matching date prefix (e.g., T-240926)
  const lastTicket = await Ticket.findOne({
    ticketId: { $regex: `^${baseId}` },
  }) // Search for existing IDs with the same base
    .sort({ ticketId: -1 }) // Sort by descending order to get the last created one
    .exec();

  let sequenceNumber = 1; // Default sequence number

  if (lastTicket) {
    // Extract the last two digits (sequence number) from the last ticketId
    const lastId = lastTicket.ticketId;
    const lastSequence = parseInt(lastId.slice(-2), 10); // Get the last 2 digits of the ticketId

    // Increment the sequence number for the new ID
    sequenceNumber = lastSequence + 1;
  }

  // Format the sequence number as a two-digit number
  const sequenceStr = sequenceNumber.toString().padStart(2, "0");

  // Return the unique Ticket ID (e.g., T-24092601)
  return `${baseId}${sequenceStr}`;
}

export const createTicket = asyncHandler(async (req, res) => {
  const { body: payload } = req;

  // Validate the payload using Zod schema
  const validation = createTicketSchema.safeParse(payload);
  if (!validation.success) {
    return res
      .status(400)
      .json(new ApiResponse(400, {}, validation.error.errors));
  }

  const payment = payload.priorityStatus === "Urgent" ? 12 : 0;

  const ticketId = await generateTicketId();
  const { userType } = payload;
  let name;
  let email;
  let phone;
  let userId;
  if (userType === "agent") {
    const company = await Company.findOne({ agentId: req.user._id }).select("primaryContact.firstName agId agentId");
    if (company) {
      const contactData = await Agent.findById(company.agentId).select("accountDetails.founderOrCeo.email accountDetails.founderOrCeo.phone");
      name = company?.primaryContact?.firstName;
      userId = company.agId;
      phone = contactData?.accountDetails?.founderOrCeo?.phone;
      email = contactData?.accountDetails?.founderOrCeo?.email;
    }
  } else if (userType === 'student') {
    const student = await StudentInformation.findOne({ studentId: req.user._id }).select("personalInformation.firstName personalInformation.lastName stId studentId");

    if (student) {
      const contactData = await Student.findById(student.studentId).select('phone email');
      name = `${student.personalInformation.firstName} ${student.personalInformation.lastName}`.trim();
      userId = student?.stId;
      phone = contactData?.phone?.code + ' ' + contactData?.phone?.number;
      email = contactData?.email;
    }
  }
  const newTicket = await Ticket.create({
    ticketType: payload.ticketType,
    priorityStatus: payload.priorityStatus,
    description: payload.description,
    payment,
    ticketId: ticketId,
    createdBy: req.user._id,
    userType: payload.userType,
    createdById: userId || "",
    name: name || "",
    phone: phone || "",
    email: email || "",
  });

  const createdTicket = await Ticket.findById(newTicket._id)
    .select("-__v")
    .exec();

  return res
    .status(201)
    .json(new ApiResponse(201, createdTicket, "Ticket created successfully"));
});

export const getTicketById = asyncHandler(async (req, res) => {
  const { ticketId } = req.params;

  const ticket = await Ticket.findOne({ _id: ticketId, deleted : false }).select("-__v").exec();
     
  if (!ticket) {
    return res.status(404).json(new ApiResponse(404, {}, "Ticket not found"));
  }


  return res
    .status(200)
    .json(new ApiResponse(200, ticket, "Ticket fetched successfully"));
});

export const getAllTickets = asyncHandler(async (req, res) => {
  const {
    page = "1",
    limit = "10",
    priorityStatus,
    status,
    searchData,
    date,
    userType
  } = req.query;

  const pageNumber = parseInt(page, 10);
  const limitNumber = parseInt(limit, 10);

  const query = {deleted: false};

  if (userType) {
    query.userType = userType;
  }

  if (priorityStatus) {
    query.priorityStatus = priorityStatus;
  }
  if (status) {
    query.status = status;
  }
  if (searchData) {
    query.$or = [
      { studentId: { $regex: searchData, $options: "i" } },
      { ticketType: { $regex: searchData, $options: "i" } },
      { description: { $regex: searchData, $options: "i" } },
      { status: { $regex: searchData, $options: "i" } },
      { createdBy: { $regex: searchData, $options: "i" } },
      { ticketId: { $regex: searchData, $options: "i" } },
    ];
  }

  // Add date filtering based on createdAt field
  if (date) {
    query.createdAt = {};
    const startDate = new Date(date); // Set to the given date
    startDate.setHours(0, 0, 0, 0); // Start of the day
  
    const endDate = new Date(date); // Clone the given date
    endDate.setHours(23, 59, 59, 999); // End of the day

    if (startDate) {
      query.createdAt.$gte = new Date(startDate); // Start date (inclusive)
    }
    if (endDate) {
      query.createdAt.$lte = new Date(endDate); // End date (inclusive)
    }
  }

  const tickets = await Ticket.find(query)
    .select("-__v") // Exclude the __v field
    .sort({ updatedAt: -1 })
    .skip((pageNumber - 1) * limitNumber) // Skip documents for pagination
    .limit(limitNumber) // Limit number of documents per page
    .exec();

  if (!tickets || tickets.length === 0) {
    return res.status(404).json(new ApiResponse(404, {}, "No tickets found"));
  }

  // Prepare the ticket data with additional information based on createdBy
  const ticketsData = await Promise.all(
    tickets.map(async (ticket) => {
      return {
        _id: ticket._id,
        ticketId: ticket.ticketId,
        name: ticket.name || "",
        userType: ticket.userType || "",
        priorityStatus: ticket.priorityStatus,
        createdDate: ticket.createdAt,
        userId: ticket.createdById || "",
        status: ticket.status, 
        _id: ticket._id,
        solutionText: ticket.solutionText || "",
        resolvedText: ticket.resolvedText || "",
        phone: ticket.phone || "",
        email : ticket.email || ""
      };
    })
  );

  // Count total number of tickets for pagination metadata
  const totalTickets = await Ticket.countDocuments(query);

  // Return success response with tickets and pagination metadata
  return res.status(200).json(
    new ApiResponse(
      200,
      {
        tickets: ticketsData,
        totalTickets,
        currentPage: pageNumber,
        totalPages: Math.ceil(totalTickets / limitNumber),
      },
      "Tickets fetched successfully"
    )
  );
});


export const getAllTicketsSubadmin = asyncHandler(async (req, res) => {
  const {
    page = "1",
    limit = "10",
    priorityStatus,
    status,
    searchData,
    date,
    userType
  } = req.query;

  const pageNumber = parseInt(page, 10);
  const limitNumber = parseInt(limit, 10);

  const tokenUser = req.user;
  const {teamId} = req.params;

  const query = {deleted : false};

  if(!teamId && !tokenUser){
    return res.status(401).json(new ApiResponse(401, {}, "Unauthorized"));
  }

  if (tokenUser.role === "1") {
    query.teamId = tokenUser._id;
  }
  if(teamId){
    query.teamId = teamId;
  }
  if (userType) {
    query.userType = userType;
  }

  if (priorityStatus) {
    query.priorityStatus = priorityStatus;
  }
  if (status) {
    query.status = status;
  }
  if (searchData) {
    query.$or = [
      { studentId: { $regex: searchData, $options: "i" } },
      { ticketType: { $regex: searchData, $options: "i" } },
      { description: { $regex: searchData, $options: "i" } },
      { status: { $regex: searchData, $options: "i" } },
      { createdBy: { $regex: searchData, $options: "i" } },
      { ticketId: { $regex: searchData, $options: "i" } },
    ];
  }

  // Add date filtering based on createdAt field
  if (date) {
    query.createdAt = {};
    const startDate = new Date(date); // Set to the given date
    startDate.setHours(0, 0, 0, 0); // Start of the day
  
    const endDate = new Date(date); // Clone the given date
    endDate.setHours(23, 59, 59, 999); // End of the day

    if (startDate) {
      query.createdAt.$gte = new Date(startDate); // Start date (inclusive)
    }
    if (endDate) {
      query.createdAt.$lte = new Date(endDate); // End date (inclusive)
    }
  }

  const tickets = await Ticket.find(query)
    .select("-__v") // Exclude the __v field
    .sort({ updatedAt: -1 })
    .skip((pageNumber - 1) * limitNumber) // Skip documents for pagination
    .limit(limitNumber) // Limit number of documents per page
    .exec();

  if (!tickets || tickets.length === 0) {
    return res.status(404).json(new ApiResponse(404, {}, "No tickets found"));
  }

  // Prepare the ticket data with additional information based on createdBy
  const ticketsData = await Promise.all(
    tickets.map(async (ticket) => {
      return {
        _id: ticket._id,
        ticketId: ticket.ticketId,
        name: ticket.name || "",
        userType: ticket.userType || "",
        priorityStatus: ticket.priorityStatus,
        createdDate: ticket.createdAt,
        userId: ticket.createdById || "",
        status: ticket.status, 
        _id: ticket._id,
        solutionText: ticket.solutionText || "",
        resolvedText: ticket.resolvedText || "",
        phone: ticket.phone || "",
        email : ticket.email || ""
      };
    })
  );

  // Count total number of tickets for pagination metadata
  const totalTickets = await Ticket.countDocuments(query);

  // Return success response with tickets and pagination metadata
  return res.status(200).json(
    new ApiResponse(
      200,
      {
        tickets: ticketsData,
        totalTickets,
        currentPage: pageNumber,
        totalPages: Math.ceil(totalTickets / limitNumber),
      },
      "Tickets fetched successfully"
    )
  );
});

// export const getAllTickets = asyncHandler(async (req, res) => {
//     const { page = '1', limit = '10', priorityStatus, status, searchData, startDate, endDate } = req.query;

//     const pageNumber = parseInt(page, 10);
//     const limitNumber = parseInt(limit, 10);

//     const query = {};

//     if (priorityStatus) {
//       query.priorityStatus = priorityStatus;
//     }
//     if (status) {
//       query.status = status;
//     }
//     if (searchData) {
//       query.$or = [
//         { studentId: { $regex: searchData, $options: 'i' } },
//         { ticketType: { $regex: searchData, $options: 'i' } },
//         { description: { $regex: searchData, $options: 'i' } },
//         { status: { $regex: searchData, $options: 'i' } },
//         { createdBy: { $regex: searchData, $options: 'i' } },
//         { ticketId: { $regex: searchData, $options: 'i' } }
//       ];
//     }

//     // Add date filtering based on createdAt field
//     if (startDate || endDate) {
//       query.createdAt = {};
//       if (startDate) {
//         query.createdAt.$gte = new Date(startDate);  // Start date (inclusive)
//       }
//       if (endDate) {
//         query.createdAt.$lte = new Date(endDate);    // End date (inclusive)
//       }
//     }

//     const tickets = await Ticket.find(query)
//       .select('-__v') // Exclude the __v field
//       .sort({ createdAt: -1 }).skip((pageNumber - 1) * limitNumber) // Skip documents for pagination
//       .limit(limitNumber) // Limit number of documents per page
//       .exec();

//     if (!tickets || tickets.length === 0) {
//       return res.status(404).json(new ApiResponse(404, {}, "No tickets found"));
//     }

//     // Count total number of tickets for pagination metadata
//     const totalTickets = await Ticket.countDocuments(query);

//     // Return success response with tickets and pagination metadata
//     return res.status(200).json(new ApiResponse(200, {
//       tickets,
//       totalTickets,
//       currentPage: pageNumber,
//       totalPages: Math.ceil(totalTickets / limitNumber),
//     }, "Tickets fetched successfully"));
//   });

export const updateTicketStatus = asyncHandler(async (req, res) => {
  const { ticketId } = req.params;
  const { status, solution, resolvedText } = req.body;

  // Validate the status using Zod schema
  const validation = updateTicketStatusSchema.safeParse({ status });
  if (!validation.success) {
    return res
      .status(400)
      .json(new ApiResponse(400, {}, validation.error.errors));
  }

  // Find the ticket by ticketId
  const ticket = await Ticket.findOne({ _id: ticketId });

  if (!ticket) {
    return res.status(404).json(new ApiResponse(404, {}, "Ticket not found"));
  }

  const createdById = ticket.createdById || "";
  let email = null;
  let recipientName = null;
  let emailTemplate = null;
  let emailSubject = null;

  if (createdById.startsWith("AG")) {
    const agent = await Agent.findOne({ _id: ticket.createdBy });
    if (agent) {
      email = agent.accountDetails.founderOrCeo.email;
      recipientName = agent.accountDetails.primaryContactPerson.name;

      emailTemplate = agentSideTicketApResolved(recipientName, ticket.priorityStatus || "", ticket.ticketType || "", resolvedText || "");
      emailSubject = `Ticket Resolved - Solution Provided`;
    }
  } else if (createdById.startsWith("ST")) {
    const student = await Student.findOne({ _id: ticket.createdBy });
    if (student) {
      email = student.email;
      recipientName = student.firstName;

      emailTemplate = studentSideTicketResolved(recipientName, ticket.priorityStatus || "", ticket.ticketType || "", resolvedText || "");
      emailSubject = `Ticket Resolved - Solution Provided`;
    }
  }


  // Update the status of the ticket
  if (status) {
    ticket.status = status;
    if (status === "resolved" && email && emailTemplate) {
      await sendEmail({
        to: email,
        subject: emailSubject,
        htmlContent: emailTemplate,
      });
    }
  }
  if (solution) {
    ticket.solutionText = solution;
  }
  if (resolvedText) {
    ticket.resolvedText = resolvedText;
  }
  await ticket.save();

  // Return success response with the updated ticket
  return res
    .status(200)
    .json(new ApiResponse(200, ticket, "Ticket status updated successfully"));
});


export const updateTicketStatusBySubadmin = asyncHandler(async (req, res) => {
  const { ticketId } = req.params;
  const { status, solution, resolvedText } = req.body;
  const user = req.user;

  // Validate the status using Zod schema
  const validation = updateTicketStatusSchema.safeParse({ status });
  if (!validation.success) {
    return res
      .status(400)
      .json(new ApiResponse(400, {}, validation.error.errors));
  }

  // Find the ticket by ticketId
  const ticket = await Ticket.findOne({ _id: ticketId });

  if (!ticket) {
    return res.status(404).json(new ApiResponse(404, {}, "Ticket not found"));
  }

  // Update the status of the ticket
  if (status) {
    ticket.status = status;
  }
  if (user?._id) {
    ticket.teamId = user._id;
    ticket.teamActivity = new Date();
  }
  if (solution) {
    ticket.solutionText = solution;
  }
  if (resolvedText) {
    ticket.resolvedText = resolvedText;
  }
  await ticket.save();

  // Return success response with the updated ticket
  return res
    .status(200)
    .json(new ApiResponse(200, ticket, "Ticket status updated successfully"));
});

export const getMyTickets = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const {search} = req.query

  // Build search and filter conditions
  let searchQuery = { createdBy: req.user._id, deleted: false };

  if (req.query.ticketId) {
    searchQuery.ticketId = req.query.ticketId;
  }

  if (req.query.priorityStatus) {
    searchQuery.priorityStatus = req.query.priorityStatus;
  }

  if (req.query.status) {
    searchQuery.status = req.query.status;
  }

  if (req.query.date) {
    searchQuery.createdAt = {};
    const startDate = new Date(req.query.date); // Set to the given date
    startDate.setHours(0, 0, 0, 0); // Start of the day
  
    const endDate = new Date(req.query.date); // Clone the given date
    endDate.setHours(23, 59, 59, 999); // End of the day

    if (startDate) {
      searchQuery.createdAt.$gte = new Date(startDate); // Start date (inclusive)
    }
    if (endDate) {
      searchQuery.createdAt.$lte = new Date(endDate); // End date (inclusive)
    }
  }

  if (search) {
    searchQuery.$or = [
      { studentId: { $regex: search, $options: 'i' } },
      { ticketType: { $regex: search, $options: 'i' } },
      { description: { $regex: search, $options: 'i' } },
      { status: { $regex: search, $options: 'i' } },
      { createdBy: { $regex: search, $options: 'i' } },
      { ticketId: { $regex: search, $options: 'i' } }
    ];
  }

  // Fetch tickets with pagination, search, and filter
  const tickets = await Ticket.find(searchQuery).sort({ updatedAt: -1 }).skip(skip).limit(limit);

  // Check if tickets exist
  if (!tickets.length) {
    return res.status(404).json({
      statusCode: 404,
      message: "No tickets found for this user.",
      data: [],
    });
  }

  const totalTickets = await Ticket.countDocuments(searchQuery);
  const totalPages = Math.ceil(totalTickets / limit);

  const pagination = {
    currentPage: page,
    previousPage: page > 1 ? page - 1 : null,
    nextPage: page < totalPages ? page + 1 : null,
    totalPages,
    totalTickets,
  };

  return res.status(200).json({
    statusCode: 200,
    message: "Tickets retrieved successfully",
    data: {
      tickets,
      pagination,
    },
  });
});


export const downloadAllTicketsAsCSV = asyncHandler(async (req, res) => {
  try {
    // Fetch all tickets without any filters
    const tickets = await Ticket.find({})
      .select("-__v") // Exclude the __v field
      .lean();

    if (!tickets || tickets.length === 0) {
      return res
        .status(404)
        .json(new ApiResponse(404, {}, "No tickets found to download"));
    }

    // Transform ticket data to include required fields
    const ticketsData = tickets.map((ticket) => ({
      TicketID: ticket.ticketId || "",
      Name: ticket.name || "",
      UserType: ticket.userType || "",
      PriorityStatus: ticket.priorityStatus || "",
      CreatedDate: ticket.createdAt || "",
      Status: ticket.status || "",
      SolutionText: ticket.solutionText || "",
      ResolvedText: ticket.resolvedText || "",
      Phone: ticket.phone || "",
      Email: ticket.email || "",
    }));

    // Convert JSON to CSV
    const csvDataString = json2csv(ticketsData, {
      fields: [
        "TicketID",
        "Name",
        "UserType",
        "PriorityStatus",
        "CreatedDate",
        "Status",
        "SolutionText",
        "ResolvedText",
        "Phone",
        "Email",
      ],
    });

    const folderPath = path.join(__dirname, "..", "csv");
    const filePath = path.join(folderPath, "tickets.csv");

    // Ensure the folder exists
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }

    // Write the CSV data to a file
    fs.writeFileSync(filePath, csvDataString);

    // Send the CSV file as a response
    res.download(filePath, "tickets.csv", (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
      }
    });
  } catch (error) {
    console.error("Error downloading tickets as CSV:", error);
    res.status(500).send("Internal Server Error");
  }
});
