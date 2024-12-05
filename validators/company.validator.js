import { z } from "zod";

// Company Details Schema
const CompanyDetailsSchema = z.object({
  businessName: z.string().min(1, { message: "Business Name is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  provinceState: z.string().min(1, { message: "Province/State is required" }),
  city: z.string().min(1, { message: "City is required" }),
  postalCode: z.string().min(1, { message: "Postal Code is required" }),
  phoneNumber: z.string().min(1, { message: "Phone Number is required" }),
  website: z.string().min(1, { message: "Website is required" }),
  linkedin: z.string().optional(), // Optional field
  whatsappNumber: z.string().min(1, { message: "Whatsapp Number is required" }),
});

// Primary Contact Schema
const PrimaryContactSchema = z.object({
  title: z.string().optional(),
  firstName: z.string().min(1, { message: "First Name is required" }),
  lastName: z.string().min(1, { message: "Last Name is required" }),
  positionJobTitle: z
    .string()
    .min(1, { message: "Position/Job Title is required" }),
  emailUsername: z.string().email({ message: "Valid Email is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  phoneNumber: z.string().optional(),
  profilePicture: z.string().optional(),
});

// Commission Contact Schema
const CommissionContactSchema = z.object({
  fullName: z.string().min(1, { message: "Full Name is required" }),
  positionJobTitle: z
    .string()
    .min(1, { message: "Position/Job Title is required" }),
  email: z.string().email({ message: "Valid Email is required" }),
  phoneNumber: z.string().min(1, { message: "Phone Number is required" }),
});

// Admissions Contact Schema
const AdmissionsContactSchema = z.object({
  destinationCountry: z
    .string()
    .optional(),
  fullName: z.string().optional(),
  positionJobTitle: z
    .string()
    .optional(),
  email: z.string().optional(),
  mobileNumber: z.string().optional(),
});

// Company Contact Schema
const CompanyContactSchema = z.object({
  primaryContact: PrimaryContactSchema,
  commissionContact: CommissionContactSchema.optional(), // Optional
  admissionsContacts: z.array(AdmissionsContactSchema).optional(), // Optional array
});

// Bank Details Schema
const BankDetailsSchema = z
  .object({
    bankName: z.string().min(1, { message: "Bank Name is required" }),
    branchName: z.string().min(1, { message: "Branch Name is required" }),
    country: z.string().min(1, { message: "Country is required" }),
    provinceState: z.string().min(1, { message: "Province/State is required" }),
    address: z.string().min(1, { message: "Address is required" }),
    city: z.string().min(1, { message: "City is required" }),
    postalCode: z.string().min(1, { message: "Postal Code is required" }),
    swiftBicCode: z.string().min(1, { message: "SWIFT/BIC Code is required" }),
    sortCode: z.string().min(1, { message: "Sort Code is required" }),
    bankAccountName: z
      .string()
      .min(1, { message: "Bank Account Name is required" }),
    bankAccountNumber: z
      .string()
      .min(1, { message: "Bank Account Number is required" }),
    intermediarySwiftCode: z.string().optional(),
    iban: z.string().min(1, { message: "IBAN is required" }),
  })
  .partial();

// Company Overview Schema
const CompanyOverviewSchema = z.object({
  businessOperationStartYear: z
    .string()
    .min(1, { message: "Business Operation Start Year is required" }),
  numberOfStudents: z
    .number()
    .min(1, { message: "Number of Students is required" }),
  popularDestinations: z
    .array(z.string())
    .min(1, { message: "At least one popular destination is required" }),
  studentSourceCountry: z
    .string()
    .min(1, { message: "Student Source Country is required" }), // Adjusted to singular
  governmentLicensed: z.enum(["Yes", "No", "Not Required in our country"], {
    required_error: "Government License status is required",
  }),
  businessRegistrationNumber: z
    .string()
    .min(1, { message: "Business Registration Number is required" }),
  businessRegistrationType: z
    .string()
    .optional(),
    companyPan: z
    .string()
    .optional(),
    companyGST: z
    .string()
    .optional(),

  businessRegistrationDocument: z
    .string()
    .min(1, { message: "Business Registration Document is required" }), // Assumed as URL
  higherEducationProgrammes: z
    .array(z.string())
    .optional(),
  financeSources: z
    .array(z.string())
    .optional(),
  studyDestinations: z
    .array(z.string())
    .optional(),
  businessProfileDocument: z
    .string()
    .optional(),
});

// Company Operations Schema
const CompanyOperationsSchema = z.object({
  numberOfCounselors: z
    .any()
    // .any(1, { message: "Number of Counselors is required" })
    .optional(),
  averageExperienceYears: z
    .any()
    // .min(1, { message: "Average Experience in Years is required" })
    .optional(),
  advertisementMethods: z
    .array(z.string())
    // .min(1, { message: "At least one advertisement method is required" })
    .optional(),
  socialMediaPlatforms: z
    .array(z.string())
    // .min(1, { message: "At least one social media platform is required" })
    .optional(),
});


// Reference Schema
const ReferenceSchema = z.object({
  referenceType: z.string().optional(),
  contactPerson: z.string().optional(),
  institutionName: z.string().optional(),
  designation: z.string().optional(),
  country: z.string().optional(),
  contactNumber: z.string().optional(),
  email: z.string().optional(),
});

export {
  CompanyDetailsSchema,
  CompanyContactSchema,
  BankDetailsSchema,
  CompanyOverviewSchema,
  CompanyOperationsSchema,
  ReferenceSchema,
};
