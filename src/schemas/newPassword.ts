import { z } from 'zod';
import { validateCpf } from '../utils/ValidateCpf';

const NewPasswordSchema = z.object({
  cpf: z.string().refine((cpf: string) => validateCpf(cpf), 'CPF inválido.'),
  newPassword: z.string()
});

export type NewPasswordType = z.infer<typeof NewPasswordSchema>;

export default NewPasswordSchema;
