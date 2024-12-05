import { z } from "zod";

// Zod validation schema for Ticket
export const createTicketSchema = z.object({
  ticketType: z.enum(['Application', 'Technical', 'Financial', 'Other'], { message: "Invalid ticket type." }),  // Must be one of these values
  priorityStatus: z.enum(['Normal', 'Urgent'], { message: "Invalid priority status." }),  // Must be 'Normal' or 'Urgent'
  description: z.string().min(1, { message: "Description is required." }),  // Non-empty string
  payment: z.number().min(0, { message: "Payment must be a non-negative number." }).optional(),  // Optional, default is 0
  status: z.string().optional(),  // Optional field for status
});

export const updateTicketStatusSchema = z.object({
  status: z.enum(['underReview', 'resolved'], {
    required_error: "Status is required", // This message will be shown if status is missing
  })
});

// export const getAllTicketsSchema = z.object({
//   page: z.string().optional(),  // Page number (optional)
//   limit: z.string().optional(), // Limit per page (optional)
//   priorityStatus: z.enum(['Normal', 'Urgent']).optional(), // Filter by priorityStatus (optional)
//   status: z.enum(['underReview', 'resolved', 'closed', 'open']).optional(), // Filter by status (optional)
// });