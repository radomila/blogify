import { z } from 'zod';

export const createEditPostFormSchema = z.object({
  title: z.string().nonempty(),
  text: z.string().nonempty(),
});
