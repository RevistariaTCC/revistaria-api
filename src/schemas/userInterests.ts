import { z } from 'zod';

export const InterestSchema = z.string().array();

export type UserInterests = z.infer<typeof InterestSchema>;