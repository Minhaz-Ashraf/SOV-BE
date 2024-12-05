import { z } from "zod";

export const registerStudentSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z
    .string()
    .email("Enter a valid email address")
    .nonempty("Email is required"),
  country: z.string().min(1, "Country is required"),
  code: z.string().min(1, "Phone code is required"),
  number: z.string().min(1, "Phone number is required"),
  studentType: z.string().min(1, "Student type is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const registerAgentSchema = z.object({
  companyDetails: z.object({
    companyName: z.string().min(1, "Company Name is required"),
    // tradeName: z.string().optional(),
    address: z.string().min(1, "Address is required"),
    country: z.string().min(1, "Country is required"),
    province: z.string().min(1, "Province/State is required"),
    city: z.string().min(1, "City is required"),
    postalCode: z.string().min(1, "Postal Code is required"),
  }),
  accountDetails: z.object({
    founderOrCeo: z.object({
      email: z.string().email("Invalid email").min(1, "Email of Founder/CEO is required"),
      phone: z.string().min(1, "Phone of Founder/CEO is required"),
    }),
    primaryContactPerson: z.object({
      name: z.string().min(1, "Primary Contact Person Name is required"),
      email: z.string().email("Invalid email").min(1, "Primary Contact Person Email is required"),
      phone: z.string().optional(),
    }),
    referralSource: z.string().optional(),
  }),
  password: z.string().min(1, "Password is required"),
});


export const loginSchema = z.object({
  role: z.string().min(1, "Enter the type"),
  email: z
    .string()
    .email("Enter a valid email address")
    .nonempty("Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const changePasswordSchema = z.object({
  newPassword: z.string().min(6, "Password must be at least 6 characters long"),
});

// export const verifyOtpSchema = z.object({
//   email: z
//     .string()
//     .email({ message: "Invalid email address" })
//     .nonempty({ message: "Email is required" }),
//   otp: z
//     .string()
//     .length(4, { message: "OTP must be exactly 4 digits" })
//     .regex(/^\d+$/, { message: "OTP must be numeric" }),
// });

export const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

export const resendOtpSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .nonempty({ message: "Email is required" }),
});

export const verifyOtpSchema = z.object({
  email: z.string().email("Invalid email address"),
  otp: z.string().min(4, "OTP must be at least 4 characters long"),
  type: z.enum(['2', '3'], "Type must be either '2' (agent) or '3' (student)"),
});

export const resetPasswordSchema = z.object({
  email: z.string().email(),
  type: z.enum(['2', '3']), // '2' for Agent, '3' for Student
  otp: z.string().min(4), // Assuming OTP is 4 digits or more
  newPassword: z.string().min(6), // Minimum length of 6 for the password
});

