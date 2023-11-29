import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import fastifyJwt from '@fastify/jwt';
import userRoutes from './users.routes';
import categoriesRoutes from './categories.routes';
import collectionsRoutes from './collections.routes';
import notificationRoutes from './notifications.routes';
import volumesRoutes from './volumes.routes';
import sessionsRoutes from './sessions.routes';
import webhooksRoutes from './webhooks.routes';
import codesRoutes from './codes.routes'

import authConfig from '../config/auth';

const routes = async (fastify: FastifyInstance) => {
  fastify.register(fastifyJwt, {
    secret: authConfig.jwt.secret
  });

  fastify.decorate(
    'authenticate',
    async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        await request.jwtVerify();
      } catch (err) {
        reply.send(err);
      }
    }
  );

  fastify.register(userRoutes, { prefix: '/users' });
  fastify.register(categoriesRoutes, { prefix: '/categories' });
  fastify.register(collectionsRoutes, { prefix: '/collections' });
  fastify.register(notificationRoutes, { prefix: '/notifications' });
  fastify.register(volumesRoutes, { prefix: '/volumes' });
  fastify.register(sessionsRoutes, { prefix: '/sessions' });
  fastify.register(webhooksRoutes, { prefix: '/webhooks' });
  fastify.register(codesRoutes, { prefix: '/activation-code' });
};

export default routes;
