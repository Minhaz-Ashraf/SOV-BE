import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const phoneSchema = new Schema(
  {
    code: {
      type: String,
    },
    number: {
      type: String,
    },
  },
  { _id: false }
);

const tempStudentSchema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    country: {
      type: String,
    },
    phone: {
      type: phoneSchema,
    },
    studentType: {
      type: String,
    },
    password: {
      type: String,
    },
    otp: {
      type: String,
    },
    otpExpiry: {
      type: Date,
    },
    isOtpVerified: {
      type: Boolean,
      default: false,
    },
    hearAbout: {
      type: String,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Password encryption before saving the student
// tempStudentSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });
tempStudentSchema.index({ createdAt: 1 }, { expireAfterSeconds: 60 });

// OTP encryption before saving (optional but can enhance security)
tempStudentSchema.pre("save", async function (next) {
  if (this.otp && this.isModified("otp")) {
    this.otp = await bcrypt.hash(this.otp, 10);
  }
  next();
});

// Password comparison method
tempStudentSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// OTP comparison method
tempStudentSchema.methods.isOtpCorrect = async function (otp) {
  return await bcrypt.compare(otp, this.otp);
};

export const TempStudent = mongoose.model("TempStudent", tempStudentSchema);
