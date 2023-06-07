import {z} from "zod";

const CollectionSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  image: z.string(),
  collectionGroupId: z.string().optional(),
  categories: z.string().array()
})


export type Collection = z.infer<typeof CollectionSchema>

export default CollectionSchema