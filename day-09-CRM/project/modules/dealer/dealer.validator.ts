import { z } from "zod";
import { STATES } from "@/constant/states";

export const dealerSchema = z.object({
  name: z.string().trim().min(5, "Name must be at least 5 characters long"),

  phone: z
    .string()
    .trim()
    .regex(/^(?:\+91)?[6-9]\d{9}$/, "Invalid Indian mobile number"),

  email: z
    .string()
    .trim()
    .email("Invalid email formate")
    .transform((email) => email.toLowerCase()),

  city: z.string().trim().min(1, "city is required"),

  state: z
    .string()
    .trim()
    .refine((state) => STATES.includes(state), "Invalid state"),

  credit_limit: z
    .string()
    .optional()
    .transform((value) => (value?.trim() ? Number(value) : 0))
    .refine((value) => value >= 0, "create limit must be positive"),
});
