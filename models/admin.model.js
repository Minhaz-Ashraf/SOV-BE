import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const adminSchema = new Schema(
  {
    profilePicture: {
      type: String,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    dob: {
      type: Date,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    phone: {
      type: String,
      unique: true,
    },
    role: {
      type: String,
      enum:["0", "1", "2", "3", "4", "5"]
    },
    isDeleted:{
      type: Boolean,
      default: false,
    },
    gender: {
      type: String,
      required: false,
    },
    maritalStatus: {
      type: String,
      required: false,
    },
    dateOfJoining: {
      type: Date,
      required: false,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
    discriminatorKey: "role",
  }
);

// Encrypt password before saving the admin
adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Password comparison method
adminSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export const Admin = mongoose.model("Admin", adminSchema);
