import { z } from 'zod';

const CollectionSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  image: z.string(),
  collectionGroupId: z.string().optional(),
  categories: z.string().array(),
  description: z.string()
});

const UpdateSchema = CollectionSchema.partial();
export type Collection = z.infer<typeof CollectionSchema>;
export type PartialCollection = z.infer<typeof UpdateSchema>;

export default CollectionSchema;
