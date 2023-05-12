import { FastifyInstance } from 'fastify';
import userRoutes from './users.routes';
import categoriesRoutes from './categories.routes'

const routes = async (fastify: FastifyInstance) => {
  fastify.register(userRoutes);
  fastify.register(categoriesRoutes);
};

export default routes;
