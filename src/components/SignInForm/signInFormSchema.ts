import { z } from 'zod';

export const signInFormSchema = z.object({
  email: z.string().email('Please enter valid email address.').nonempty('Email is not provided.'),
  password: z.string().nonempty('Password is required'),
});
