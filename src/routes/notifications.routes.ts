import { User } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import ListNotificationsByUser from '../services/notifications/ListNotificationsByUser';
import ReadAllNotificationsByUser from '../services/notifications/ReadAllNotificationsByUser';
import { IParams } from '../types';
import ReadNotificationById from '../services/notifications/ReadNotificationById';

const routes = async (fastify: FastifyInstance) => {
  fastify.get(
    '/',
    { onRequest: [fastify.authenticate] },
    async (request, reply) => {
      try {
        const user = request.user as User;

        const listNotificationsByUser = new ListNotificationsByUser();
        const result = await listNotificationsByUser.execute(user.id);

        reply.status(200).send(result);
      } catch (error) {
        throw error;
      }
    }
  );

  fastify.put(
    '/readAll',
    { onRequest: [fastify.authenticate] },
    async (request, reply) => {
      try {
        const user = request.user as User;
        const readAllNotificationsByUser = new ReadAllNotificationsByUser();
        await readAllNotificationsByUser.execute(user.id);
        reply.status(200).send({});
      } catch (error) {
        throw error;
      }
    }
  );

  fastify.put<{ Params: IParams }>(
    '/:id/read',
    { onRequest: [fastify.authenticate] },
    async (request, reply) => {
      try {
        const { id } = request.params;
        const user = request.user as User
        const readNotificationById = new ReadNotificationById();
        const result = readNotificationById.execute(id, user);

        reply.status(200).send(result);
      } catch (error) {
        throw error;
      }
    }
  );
};

export default routes;
