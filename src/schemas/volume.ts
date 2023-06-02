import {z} from "zod";

const VolumeSchema = z.object({
  title: z.string(),
  image: z.string(),
  collectionId: z.number(),
  status: z.enum(['AVAILABLE', 'UNAVAILABLE'])
})


export type Volume = z.infer<typeof VolumeSchema>

export default VolumeSchema