import { FastifyInstance } from 'fastify';
import GenerateCode from '../services/activationCode/GenerateCode';
import z from 'zod';
import ValidateCode from '../services/activationCode/ValidateCode';
import GetUserByCpf from '../services/user/GetUserByCpf';

const routes = async (fastify: FastifyInstance) => {
  const codeSchema = z.object({
    phone: z.string().optional(),
    cpf: z.string().optional()
  });
  const validateCodeSchema = z.object({
    phone: z.string().optional(),
    code: z.string(),
    cpf: z.string().optional()
  });

  fastify.post('/send', async (request, reply) => {
    try {
      const { phone, cpf } = codeSchema.parse(request.body);
      const generateCode = new GenerateCode();
      if (cpf) {
        const getUserByCpf = new GetUserByCpf();
        const user = await getUserByCpf.execute({ cpf });
        await generateCode.execute(user.phone);
      }
      if (phone) await generateCode.execute(phone);

      reply.status(204);
    } catch (error) {
      throw error;
    }
  });

  fastify.post('/validate', async (request, reply) => {
    try {
      const { phone, code, cpf } = validateCodeSchema.parse(request.body);
      const validateCode = new ValidateCode();
      let result;

      if (cpf) {
        const getUserByCpf = new GetUserByCpf();
        const user = await getUserByCpf.execute({ cpf });
        result = await validateCode.execute(user.phone, code);
      }

      if (phone) result = await validateCode.execute(phone, code);

      reply.status(201).send(result);
    } catch (error) {
      throw error;
    }
  });
};

export default routes;
