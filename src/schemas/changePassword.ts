import { z } from 'zod';

const ChangePasswordSchema = z.object({
  password: z.string(),
  newPassword: z.string()
});

export type ChangePasswordType = z.infer<typeof ChangePasswordSchema>;

export default ChangePasswordSchema;
