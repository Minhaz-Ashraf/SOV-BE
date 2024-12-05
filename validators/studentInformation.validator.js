import { z } from "zod";

// Define the main Zod schema for the student profile
const phoneSchema = z.object({
  countryCode: z.string().nonempty("Country code is required"),
  phone: z.string().nonempty("Phone number is required"),
});

// Schema for personal information
export const personalInformationSchema = z.object({
  title: z.string().nonempty("Title is required"),
  firstName: z.string().nonempty("First Name is required"),
  lastName: z.string().nonempty("Last Name is required"),
  gender: z.string().nonempty("Gender is required"),
  maritalStatus: z.string().nonempty("Marital Status is required"),
  dob: z
    .string()
    .nonempty("Date of Birth is required"),
    
  firstLanguage: z.string().nonempty("First Language is required"),
  email: z.string().email("Enter a valid email address").nonempty("Email is required"),
  phone: phoneSchema,
  profilePicture: z.string().optional(),
});

// Schema for passport details
export const passportDetailsSchema = z.object({
  passportUpload: z.string().nonempty("Passport upload is required"),
  countryOfCitizenship: z.string().nonempty("Country of Citizenship is required"),
  passportNumber: z.string().nonempty("Passport Number is required"),
  expireDate: z
    .string()
    .nonempty("Expire Date is required")
});

// Combined schema
export const studentPersonalAndPassportSchema = z.object({
  personalInformation: personalInformationSchema,
  passportDetails: passportDetailsSchema,
});


export const residenceAddressSchema = z.object({
  address: z.string().nonempty("Address is required"),
  country: z.string().nonempty("Country is required"),
  state: z.string().nonempty("State is required"),
  city: z.string().nonempty("City is required"),
  zipcode: z.string().nonempty("Zip Code is required"),
});

// Schema for mailing address
export const mailingAddressSchema = z.object({
  address: z.string().nonempty("Address is required"),
  country: z.string().nonempty("Country is required"),
  state: z.string().nonempty("State is required"),
  city: z.string().nonempty("City is required"),
  zipcode: z.string().nonempty("Zip Code is required"),
});

// Combined schema for residence and mailing addresses
export const studentResidenceAndMailingAddressSchema = z.object({
  residenceAddress: residenceAddressSchema,
  mailingAddress: mailingAddressSchema,
});

// Define the Zod schema for preferences
export const studentPreferencesSchema = z.object({
  preferredCountry: z.string().nonempty("Preferred Country is required"),
  preferredState: z.string().nonempty("Preferred State is required"),
  preferredProgram: z.string().nonempty("Preferred Program is required"),
  preferredLevelOfEducation: z
    .string()
    .nonempty("Preferred Level of Education is required"),
  preferredInstitution: z
    .string()
    .nonempty("Preferred Institution is required"),
});
