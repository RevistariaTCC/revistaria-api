import { FastifyInstance } from 'fastify';
import userRoutes from './users.routes';

const routes = async (fastify: FastifyInstance) => {
  fastify.register(userRoutes);
};

export default routes;
