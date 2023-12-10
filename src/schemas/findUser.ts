import { z } from 'zod';
import { validateCpf } from '../utils/ValidateCpf';

const FindUserSchema = z.object({
    cpf: z.string().refine((cpf: string) => validateCpf(cpf), 'CPF inválido.'),
})

export type FindUser = z.infer<typeof FindUserSchema>;

export default FindUserSchema;
