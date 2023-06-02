import { FastifyInstance } from 'fastify';
import userRoutes from './users.routes';
import categoriesRoutes from './categories.routes';
import collectionsRoutes from './collections.routes';
import volumesRoutes from './volumes.routes';

const routes = async (fastify: FastifyInstance) => {
  fastify.register(userRoutes);
  fastify.register(categoriesRoutes, { prefix: '/categories' });
  fastify.register(collectionsRoutes, { prefix: '/collections' });
  fastify.register(volumesRoutes, { prefix: '/volumes' });
};

export default routes;
