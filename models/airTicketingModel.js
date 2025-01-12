import mongoose, { Schema } from 'mongoose';

const AirTicketingRequestSchema = new Schema({
  sourceLocation: { type: String, required: true },
  destinationLocation: { type: String, required: true },
  passportDetails: { type: String, required: false },
  pprOrVisaStamp: { type: [String], required: false },
  travelDate: { type: Date, required: true },
  flightPreference: { type: String, enum: ['stop', 'non-stop'], required: true },
  personName: { type: String, required: false },
  userType: { type: String, required: true , enum: ['student', 'agent']},
  userName: { type: String, required: true},
  userInformationId: { type: Schema.Types.ObjectId, required: true},
  userId : { type: Schema.Types.ObjectId, required: true},
  customId: { type: String, required: true},
  airId: { type: String, required: true},
}, {timestamps: true});

export const AirTicketing = mongoose.model("AirTicketingRequest", AirTicketingRequestSchema);
