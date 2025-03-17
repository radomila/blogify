import { z } from "zod";

export const signUpFormSchema = z
  .object({
    email: z
      .string()
      .email("Please enter valid email address.")
      .nonempty("Email is not provided."),
    password: z.string().min(8).max(12).nonempty("Password is required"),
    confirmPassword: z
      .string()
      .min(8)
      .max(12)
      .nonempty("Password have to be confirmed. "),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
