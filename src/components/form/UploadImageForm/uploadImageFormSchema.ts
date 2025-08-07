import { z } from 'zod';

export const uploadImageFormSchema = z.object({
  imageTitle: z.string().nonempty(),
  imageUrl: z.string().nonempty(),
});
