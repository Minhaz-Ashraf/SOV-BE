import mongoose, { Schema } from "mongoose";

// Reference schema
const ReferenceSchema = new Schema({
    referenceType: {
      type: String,
    },
    contactPerson: {
      type: String,
    },
    institutionName: {
      type: String,
    },
    designation: {
      type: String,
    },
    country: {
      type: String,
    },
    contactNumber: {
      type: String,
    },
    email: {
      type: String,
    },
});
  
// Company Operations schema
const CompanyOperationsSchema = new Schema({
    numberOfCounselors: {
      type: Number,
    },
    averageExperienceYears: {
      type: Number,
    },
    advertisementMethods: {
      type: [String], // Array to hold multiple advertisement methods
    },
    socialMediaPlatforms: {
      type: [String], // Array to hold selected social media platforms
    },
});

// Bank Details schema
const BankDetailsSchema = new Schema({
  bankName: {
    type: String,
  },
  branchName: {
    type: String,
  },
  country: {
    type: String,
  },
  provinceState: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  postalCode: {
    type: String,
  },
  swiftBicCode: {
    type: String,
  },
  sortCode: {
    type: String,
  },
  bankAccountName: {
    type: String,
  },
  bankAccountNumber: {
    type: String,
  },
  intermediarySwiftCode: {
    type: String,
  },
  iban: {
    type: String,
  }
});

// Company Overview schema
const CompanyOverviewSchema = new Schema({
  businessOperationStartYear: {
    type: String,
  },
  numberOfStudents: {
    type: Number,
  },
  popularDestinations: {
    type: [String], // Array of popular countries
  },
  studentSourceCountry: {
    type: String,
  },
  governmentLicensed: {
    type: String,
    enum: ['Yes', 'No', 'Not Required in our country'], // Restrict values to Yes, No, and Not Required
  },
  businessRegistrationNumber: {
    type: String,
  },
  businessRegistrationType: {
    type: String,
  },
  businessRegistrationDocument: {
    type: String, 
  },
  companyPan: {
    type: String, 
  },
  companyGST: {
    type: String, 
  },
  higherEducationProgrammes: {
    type: [String], // Array of programme types (e.g., "Diploma", "Foundation", etc.)
  },
  financeSources: {
    type: [String], // Array of finance sources
  },
  studyDestinations: {
    type: [String], // Array of study destinations
  },
  businessProfileDocument: {
    type: String, // Assume this will be a URL or file path for the document
  }
});

// Define other nested schemas (already present)
const CompanyDetailsSchema = new Schema({
  businessName: {
    type: String,
  },
  address: {
    type: String,
  },
  country: {
    type: String,
  },
  provinceState: {
    type: String,
  },
  city: {
    type: String,
  },
  postalCode: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  website: {
    type: String,
  },
  linkedin: {
    type: String,
  },
  whatsappNumber: {
    type: String,
  }
});

const PrimaryContactSchema = new Schema({
  title: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  positionJobTitle: {
    type: String,
  },
  emailUsername: {
    type: String,
  },
  country: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  profilePicture:{
    type: String,
  }
});

const CommissionContactSchema = new Schema({
  fullName: {
    type: String,
  },
  positionJobTitle: {
    type: String,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
});

const AdmissionsContactSchema = new Schema({
  destinationCountry: {
    type: String,
  },
  fullName: {
    type: String,
  },
  positionJobTitle: {
    type: String,
  },
  email: {
    type: String,
  },
  mobileNumber: {
    type: String,
  },
});

// Main schema with all fields optional
const CompanySchema = new Schema({
  companyDetails: CompanyDetailsSchema,
  primaryContact: PrimaryContactSchema,
  commissionContact: CommissionContactSchema,
  admissionsContacts: [AdmissionsContactSchema], // Array to store multiple admissions contacts
  bankDetails: BankDetailsSchema, // Added Bank Details
  companyOverview: CompanyOverviewSchema, // Added Company Overview
  companyOperations: CompanyOperationsSchema, // Added Company Operations
  references: [ReferenceSchema], // Added References,
  agentId: {
    type: Schema.Types.ObjectId,
    ref: "Agent",
    required: true
  },
  teamId:{
    type: Schema.Types.ObjectId,
    ref: "Admin",
    required: false
  },
  pageCount: {
    type: Number,
    default: 1
  },
  pageStatus:{
    status:{
      type:String,
      default: "registering"
    },
    message:{
      type: String,
    }
  },
  agId: {
    type: String
  },
  tmId: {
    type: String
  },
  deleted: {
    type: Boolean,
    default: false,
  },
  lastLogin: {
    type: Date,
    required: false
  }
}, {
  timestamps: true,  // Automatically add createdAt and updatedAt fields
});

// Model creation
export const Company = mongoose.model("Company", CompanySchema);
