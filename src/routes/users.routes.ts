import { FastifyInstance } from 'fastify';

const routes = async (fastify: FastifyInstance) => {
  fastify.get('/ping', async (request, reply) => {
    return 'pong\n';
  });
};

export default routes;
