import { z } from 'zod';

const CategoriesSchema = z.object({
  id: z.string().optional(),
  name: z.string()
});

const UpdateSchema = CategoriesSchema.partial();
export type Category = z.infer<typeof CategoriesSchema>;
export type PartialCategory = z.infer<typeof UpdateSchema>;

export default CategoriesSchema;
