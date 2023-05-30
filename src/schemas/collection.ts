import {z} from "zod";

const CollectionSchema = z.object({
  name: z.string(),
  image: z.string(),
  collectionGroupId: z.string().optional(),
  categoryIDs: z.string().array()
})


export type Collection = z.infer<typeof CollectionSchema>

export default CollectionSchema