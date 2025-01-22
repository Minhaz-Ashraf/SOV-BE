import { z } from "zod";

const AddressSchema = z.object({
  street: z.string().nonempty("Street is required"),
  city: z.string().nonempty("City is required"),
  state: z.string().nonempty("State is required"),
  postalCode: z.string().nonempty("Postal Code is required"),
  country: z.string().nonempty("Country is required"),
});

// Zod schema for Personal Information
const PersonalInformationSchema = z.object({
  fullName: z.string().nonempty("Full Name is required"),
  email: z.string().email("Invalid email address").nonempty("Email is required"),
  phoneNumber: z.string().nonempty("Phone Number is required"),
  address: AddressSchema,  // Address schema is required here
});

// Zod schema for Education Details
const EducationDetailsSchema = z.object({
  educationLevel: z.enum(['diploma', 'underGraduate', 'postGraduate', "diplomaPG", "certificationCourse"]),  // Ensures only the allowed values are used
  markSheet10: z.string().optional(), // Optional string for 10th marksheet
  markSheet12: z.string().optional(), // Optional string for 12th marksheet
  markSheetUnderGraduate: z.string().optional(), // Optional string for undergraduate marksheet
  markSheetPostGraduate: z.string().optional(), // Optional string for postgraduate marksheet
});

// Zod schema for Preferences
const PreferencesSchema = z.object({
  country: z.string().nonempty("Country is required"),
  institution: z.string().nonempty("Institution is required"),
  course: z.string().nonempty("Course is required"),
  intake: z.string().nonempty("Intake is required"),
});

const IELTSSchema = z.object({
  reading: z.number().optional(),
  speaking: z.number().optional(),
  writing: z.number().optional(),
  listening: z.number().optional(),
  overallBand: z.number().optional(),  // Already optional
});

// Zod schema for PTE Score
const PTESchema = z.object({
  listening: z.number().optional(),
  reading: z.number().optional(),
  writing: z.number().optional(),
  speaking: z.number().optional(),
  overallBand: z.number().optional(),
});

// Zod schema for TOEFL intakeScore
const TOEFLSchema = z.object({
  listening: z.number().optional(),
  reading: z.number().optional(),
  writing: z.number().optional(),
  speaking: z.number().optional(),
  overallBand: z.number().optional(),
});

// Zod schema for Document Upload
const CertificateUploadSchema = z.object({
  url: z.array(z.string()),
});

// Zod schema for the Offer Letter section
export const OfferLetterSchema = z.object({
  personalInformation: PersonalInformationSchema,
  educationDetails: EducationDetailsSchema,
  preferences: PreferencesSchema,
  ieltsScore: IELTSSchema.optional(),
  ptes: PTESchema.optional(),  // PTE score section, optional
  toefl: TOEFLSchema.optional(),  // TOEFL score section, optional
  certificate: CertificateUploadSchema.optional(),
  studentInformationId: z.string().nonempty("studentInformationId is required"),
});


// Zod schema for Personal Information
const PersonalInformationGICSchema = z.object({
  fullName: z.string().optional(),  // Now optional
  email: z.string().email("Invalid email address").optional(),  // Now optional
  phoneNumber: z.string().optional(),  // Now optional
  address: AddressSchema.optional(),  // Now optional
});

// Zod schema for Document Upload
const DocumentUploadSchema = z.object({
  offerLetter: z.string().nonempty("Offer Letter is required"),  // Required field for offer letter
  feeReceipt: z.string().nonempty("Fee Receipt is required"),  // Required field for fee receipt
  gicLetter: z.string().nonempty("GIC Letter is required"),  // Required field for GIC letter
  medical: z.string().nonempty("Medical document is required"),  // Required field for medical
  pcc: z.string().nonempty("Police Clearance Certificate (PCC) is required"),  // Required field for PCC
  pal: z.string().nonempty("Pre-Arrival Letter (PAL) is required"),  // Required field for PAL
  ielts: z.string().nonempty("IELTS certificate is required"),  // Required field for IELTS certificate
});

// Zod schema for GIC
export const GICSchema = z.object({
  personalDetails: PersonalInformationGICSchema,
  documentUpload: DocumentUploadSchema,
  studentInformationId: z.string().nonempty("studentInformationId is required"),
});

const StudentDocumentSchema = z.object({
  aadharCard: z.string().optional(),
  panCard: z.string().optional(),
});

// Zod schema for Parent Document
const ParentDocumentSchema = z.object({
  fatherAadharCard: z.string().optional(),
  fatherPanCard: z.string().optional(),
  motherAadharCard: z.string().optional(),
  motherPanCard: z.string().optional(),
});

// Zod schema for Offer Letter and Passport
const OfferLetterAnsPassportSchema = z.object({
  offerLetter: z.string().optional(),
  passport: z.string().optional(),
});

// Main Zod schema for Course Fee Application
export const CourseFeeApplicationSchema = z.object({
  personalDetails:PersonalInformationSchema,
  studentDocument: StudentDocumentSchema,
  parentDocument: ParentDocumentSchema.optional(),
  offerLetterAnsPassport: OfferLetterAnsPassportSchema,
  studentInformationId: z.string().nonempty("studentInformationId is required"),
});

export const VisaSchema = z.object({
  personalDetails: PersonalInformationSchema,
  loa:z.string().optional(),
  offerLetter: z.string().optional(),
  gicLetter: z.string().optional(),
  medical: z.string().optional(),
  pcc: z.string().optional(),
  pal: z.string().optional(),
  certificate: z.array(z.string()).optional(),
  lor: z.string().optional(),
  sop: z.string().optional(),
  blockedaccount: z.string().optional()
});
export const VisaEditSchema = z.object({
  personalDetails: PersonalInformationSchema,
});
export const VisaUpdateSchema = z.object({
  loa: z.string().optional(),
  offerLetter: z.string().optional(),
  gicLetter: z.string().optional(),
  medical: z.string().optional(),
  pcc: z.string().optional(),
  pal: z.string().optional(),
  certificate: z.array(z.string()).optional(),
});
