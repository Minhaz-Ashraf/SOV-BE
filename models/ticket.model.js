import mongoose, { Schema } from "mongoose";

// Ticket Schema
const TicketSchema = new Schema({
  teamId: {
    type: Schema.Types.ObjectId,
    ref: "Admin",
    required: false
  },
  ticketType: {
    type: String, 
    required: true,  // ticketType is mandatory
  },
  priorityStatus: {
    type: String,  // Priority (e.g., Urgent, Normal)
    enum: ['Normal', 'Urgent'],  // Urgent requires payment
    default: 'Normal',
  },
  description: {
    type: String, 
    required: true,  // Description is mandatory
  },
  payment: {
    type: Number, 
    default: 0,    // No payment for normal priority
  },
  status: {
    type: String,  // Fix typo from 'types' to 'type'
    default: "underreview",  // Default status when the ticket is created
  },
  userType: {
    type: String,  // Fix typo from 'types' to 'type'
    default: "agent",  // Default status when the ticket is created
  },
  ticketId: {
    type: String
  },
  createdBy: {
    type: String
  },
  createdById: {
    type: String
  },
  name: {
    type: String
  },
  email:{
    type: String
  },
  phone: {
    type: String
  },
  solutionText:{
    type: String,
    required: false
  },
  resolvedText:{
    type: String,
    required: false
  },
  deleted : {
    type: Boolean,
    default: false,
  }
}, {
  timestamps: true,  // Automatically manage `createdAt` and `updatedAt`
});

// Create Ticket model
export const Ticket = mongoose.model("Ticket", TicketSchema);
