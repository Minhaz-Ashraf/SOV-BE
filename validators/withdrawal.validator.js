import { z } from "zod";

// Schema for bank details
export const bankDetailsSchema = z.object({
  bankName: z.string().nonempty("Bank name is required"),
  branchName: z.string().nonempty("Branch name is required"),
  country: z.string().nonempty("Country is required"),
  province: z.string().nonempty("Province is required"),
  address: z.string().nonempty("Address is required"),
  city: z.string().nonempty("City is required"),
  postalCode: z.string().nonempty("Postal code is required"),
  bankAccountName: z.string().nonempty("Bank account name is required"),
  bankAccountNumber: z.string().nonempty("Bank account number is required"),
  swiftBicCode: z.string().optional(),
  iban: z.string().optional(), // Optional IBAN field
});

// Schema for document upload (Aadhar and Pan card)
// Schema for document upload (Aadhar and Pan card URLs)
export const documentUploadSchema = z.object({
  aadharCard: z.string().nonempty("Aadhar card URL is required"),
  panCard: z.string().nonempty("Pan card URL is required"),
  parentAadharCard: z.string().optional(),
  parentPanCard: z.string().optional(),
});


// Combined schema for withdrawal details
export const withdrawalDetailsSchema = z.object({
  studentBankDetails: bankDetailsSchema,
  parentBankDetails: bankDetailsSchema,
  documentUpload: documentUploadSchema,
  studentInformationId : z.string().nonempty("studentId is required"),
  appliedFor : z.string().nonempty("appliedFor is required"),
});


