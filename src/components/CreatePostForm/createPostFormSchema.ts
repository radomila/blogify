import { z } from 'zod';

export const createPostFormSchema = z.object({
  title: z.string().nonempty(),
  text: z.string().nonempty(),
});
