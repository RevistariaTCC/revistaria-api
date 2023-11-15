import { z } from 'zod';

const VolumeSchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  image: z.string(),
  collectionId: z.string(),
  synopsis: z.string(),
  status: z.enum(['AVAILABLE', 'UNAVAILABLE']),
  units: z.number().optional()
});

const UpdateSchema = VolumeSchema.partial();

export type PartialVolume = z.infer<typeof UpdateSchema>;

export type Volume = z.infer<typeof VolumeSchema>;

export default VolumeSchema;
