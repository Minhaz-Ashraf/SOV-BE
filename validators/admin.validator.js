import { z } from "zod";


 const loginSchema = z.object({
    role: z.string().min(1, "Enter the type"),
    email: z
      .string()
      .email("Enter a valid email address")
      .nonempty("Email is required"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
  });

const changePasswordSchema = z.object({
    oldPassword: z.string().min(6, "Password must be at least 6 characters long"),
    newPassword: z.string().min(6, "Password must be at least 6 characters long"),
  });

  const changeEmailSchema = z.object({
    password: z.string().min(6, "Password must be at least 6 characters long"),
    email: z
    .string()
    .email("Enter a valid email address")
    .nonempty("Email is required"),
  });
  

 const editDataSchema = z.object({
  profilePicture: z.string().optional(), // Optional profile picture
  firstName: z.string().min(1, { message: "First name is required" }), // Required first name
  lastName: z.string().min(1, { message: "Last name is required" }),  // Required last name
  dob: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), { message: "Invalid date format" })
    .optional(), // Optional date of birth, validated as string in ISO format
  phone: z
    .string()
    .min(1, { message: "Phone number is required" }),  // Required phone number
});


export {loginSchema, changePasswordSchema, changeEmailSchema, editDataSchema };
