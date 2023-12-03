import { FastifyInstance } from 'fastify';
import GenerateCode from '../services/activationCode/GenerateCode';
import z from 'zod';
import ValidateCode from '../services/activationCode/ValidateCode';

const routes = async (fastify: FastifyInstance) => {
  const codeSchema = z.object({ phone: z.string() });
  const validateCodeSchema = z.object({ phone: z.string(), code: z.string() });

  fastify.post('/send', async (request, reply) => {
    try {
      const { phone } = codeSchema.parse(request.body);
      const generateCode = new GenerateCode();
      const result = await generateCode.execute(phone);
      reply.status(201).send(result);
    } catch (error) {
      throw error;
    }
  });

  fastify.post('/validate', async (request, reply) => {
    try {
      const { phone, code } = validateCodeSchema.parse(request.body);
      const validateCode = new ValidateCode();
      const result = await validateCode.execute(phone, code);

      return result;
    } catch (error) {
      throw error;
    }
  });
};

export default routes;
