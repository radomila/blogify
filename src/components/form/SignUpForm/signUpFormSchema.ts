import { z } from 'zod';

export const signUpFormSchema = z
  .object({
    email: z.string().email('Invalid e-mail address format. Use the tooltip above the field for guidance.').nonempty('Email is not provided.'),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long.' })
      .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter.' })
      .regex(/[0-9]/, { message: 'Password must contain at least one number.' })
      .nonempty('Password is required'),
    confirmPassword: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long.' })
      .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter.' })
      .regex(/[0-9]/, { message: 'Password must contain at least one number.' })
      .nonempty('Password have to be confirmed'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
