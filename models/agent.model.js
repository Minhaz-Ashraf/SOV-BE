import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

// Agent schema for agent sign-up
const agentSchema = new Schema(
  {
    companyDetails: {
      companyName: {
        type: String,
        required: [true, "Company Name is required"],
      },
      // tradeName: {
      //   type: String,
      // },
      address: {
        type: String,
        required: [true, "Address is required"],
      },
      country: {
        type: String,
        required: [true, "Country is required"],
      },
      province: {
        type: String,
        required: [true, "Province/State is required"],
      },
      city: {
        type: String,
        required: [true, "City is required"],
      },
      postalCode: {
        type: String,
        required: [true, "Postal Code is required"],
      },
    },
    accountDetails: {
      founderOrCeo: {
        email: {
          type: String,
          required: [true, "Email of Founder/CEO is required"],
          trim: true,
        },
        phone: {
          type: String,
          required: [true, "Phone of Founder/CEO is required"],
        },
      },
      primaryContactPerson: {
        name: {
          type: String,
          required: [true, "Primary Contact Person Name is required"],
        },
        email: {
          type: String,
          required: [true, "Primary Contact Person Email is required"],
          trim: true,
        },
        phone: {
          type: String,
          required: [true, "Primary Contact Person Phone is required"],
        },
      },
      referralSource: {
        type: String,
      },
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    emailOtp: {
      type: String,
    },
    otpExpiry: {
      type: Date,
    },
    isOtpVerified: {
      type: Boolean,
      default: false,
    },
    // approved: {
    //   type: Boolean,
    //   default: false,
    // },
    role: {
      type: String,
      default: '2', // [0-admin, 1-subAdmin, 2-agent]
    },
    deleted: {
      type: Boolean,
      default: false,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    }
  },
  {
    timestamps: true,  // Automatically add createdAt and updatedAt fields
  }
);

// Password encryption before saving the agent
agentSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// OTP encryption before saving
agentSchema.pre("save", async function (next) {
  if (this.otp && this.isModified("otp")) {
    this.otp = await bcrypt.hash(this.otp, 10);
  }
  next();
});

// Password verification method
agentSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// OTP verification method
agentSchema.methods.isOtpCorrect = async function (otp) {
  return await bcrypt.compare(otp, this.otp);
};

export const Agent = mongoose.model("Agent", agentSchema);
