import { z } from 'zod';

export const residenceAddressSchema = z.object({
    address: z.string().nonempty("Address is required"),
    country: z.string().nonempty("Country is required"),
    state: z.string().nonempty("State is required"),
    city: z.string().nonempty("City is required"),
    zipcode: z.string().nonempty("Zip Code is required"),
  });

export const adminSchema = z.object({
  profilePicture: z.string().url().optional(),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  dob: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid date format",
    })
    .optional(),
  email: z.string().optional(),
  password: z.string().optional(),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9+]*$/, "Phone number can contain only numbers and '+'"),
  residenceAddress: residenceAddressSchema.optional(),
  teamId: z.string().optional(),
});