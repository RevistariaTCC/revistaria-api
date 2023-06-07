import {z} from "zod";

const CollectionSchema = z.object({
  id: z.number().optional(),
  name: z.string(),
  image: z.string(),
  collectionGroupId: z.number().optional(),
  categories: z.number().array()
})


export type Collection = z.infer<typeof CollectionSchema>

export default CollectionSchema