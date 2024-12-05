import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

// Agent schema for temporary agent sign-up
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

const tempAgentSchema = new Schema(
  {
    companyDetails: {
      companyName: {
        type: String,
      },
      tradeName: {
        type: String,
      },
      address: {
        type: String,
      },
      country: {
        type: String,
      },
      province: {
        type: String,
      },
      city: {
        type: String,
      },
      postalCode: {
        type: String,
      },
    },
    accountDetails: {
      founderOrCeo: {
        email: {
          type: String,
          trim: true,
        },
        phone: {
          type: String,
        },
      },
      primaryContactPerson: {
        name: {
          type: String,
        },
        email: {
          type: String,
          trim: true,
        },
        phone: {
          type: String,
        },
      },
      referralSource: {
        type: String,
      },
    },
    password: {
      type: String,
    },
    otp: {
      type: String, // Store OTP as a hashed value
    },
    otpExpiry: {
      type: Date,
    },
    isOtpVerified: {
      type: Boolean,
      default: false,
    },
    approved: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      default: '2', // [0-admin, 1-subAdmin, 2-agent]
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Password encryption before saving the agent
// tempAgentSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

// OTP encryption before saving (optional but can enhance security)
tempAgentSchema.pre("save", async function (next) {
  if (this.otp && this.isModified("otp")) {
    this.otp = await bcrypt.hash(this.otp, 10);
  }
  next();
});

// Password verification method
tempAgentSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// OTP verification method
tempAgentSchema.methods.isOtpCorrect = async function (otp) {
  return await bcrypt.compare(otp, this.otp);
};

export const TempAgent = mongoose.model("TempAgent", tempAgentSchema);
