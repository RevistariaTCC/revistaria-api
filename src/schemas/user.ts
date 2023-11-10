import { z } from 'zod';

const UserSchema = z.object({
  id: z.string().optional(),
  email: z.string().email(),
  name: z.string(),
  birthdate: z.coerce.date(),
  phone: z.string(),
  password: z.string(),
  passwordHash: z.string().optional(),
  collections: z.string().array().optional(),
  interests: z.string().array().optional(),
  newsletter: z.boolean(),
});

const UpdateSchema = UserSchema.partial();

export type PartialUser = z.infer<typeof UpdateSchema>;

export type User = z.infer<typeof UserSchema>;

export default UserSchema;
