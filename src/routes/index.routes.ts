import { FastifyInstance } from 'fastify';
import userRoutes from './users.routes';
import categoriesRoutes from './categories.routes';
import collectionRoutes from './collections.routes';

const routes = async (fastify: FastifyInstance) => {
  fastify.register(userRoutes);
  fastify.register(categoriesRoutes);
  fastify.register(collectionRoutes);
};

export default routes;
