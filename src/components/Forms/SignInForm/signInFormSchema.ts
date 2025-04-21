import { z } from 'zod';

export const signInFormSchema = z.object({
  email: z.string().email('Invalid e-mail address format. Use the tooltip above the field for guidance.').nonempty('Email is not provided.'),
  password: z.string().nonempty('Password is required'),
});
