import z from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be atleast 2 characters.")
    .max(50, "Name must be under 50 characters")
    .regex(/^[a-zA-Z\s.'-]+$/, "Invalid name format."),
  email: z.string().trim().email("Please enter a valid email address."),
  message: z.string().trim().min(10, "Message must be at least 10 characters."),
});