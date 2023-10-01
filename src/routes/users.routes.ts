import { FastifyInstance } from 'fastify';
import ListUser from '../services/user/ListUser';
import GetUserById from '../services/user/GetUserById';
import { IParams, IBoundCollection } from '../types';
import DeleteUser from '../services/user/DeleteUser';
import UserSchema, { PartialUser } from '../schemas/user';
import CreateUser from '../services/user/CreateUser';
import LinkInterests from '../services/user/LinkInterests';
import { User } from '@prisma/client';
import { InterestSchema } from '../schemas/userInterests';
import LinkCollection from '../services/user/LinkCollection';

const routes = async (fastify: FastifyInstance) => {

  fastify.addHook('onSend', (request, reply, payload: string, done) => {
    const newPayload = JSON.parse(payload)
    delete newPayload.passwordHash
    done(null, JSON.stringify(newPayload))
  })

  fastify.get("/", async(request, reply) => {
    try {
      const listUserService = new ListUser();
      const result = await listUserService.execute();

      reply.status(200).send(result);

    } catch (error) {
      throw error;
    }
  })

  fastify.get<{Params: IParams}>("/:id", async(request, reply) => {
    try {
      const { id } = request.params
      const getUserById = new GetUserById();
      const result = await getUserById.execute(id);
      reply.status(200).send(result);
    } catch (error) {
      throw error;
    }
  })

  fastify.post('/', async(request, reply) => {
    try {
      const user = UserSchema.parse(request.body);
      const createUserService = new CreateUser();
      const result: PartialUser = await createUserService.execute(user);
      reply.status(201).send(result);
    } catch (error) {
      throw error;
    }
  });

  fastify.delete<{Params: IParams}>("/:id", async(request, reply) => {
    try {
      const { id } = request.params
      const deleteUser = new DeleteUser();
      await deleteUser.execute(id);

      reply.status(200).send("User deleted with success!");
    } catch (error) {
      throw error;
    }
  })

  fastify.put('/link-interests', { onRequest: [fastify.authenticate]}, async(request, reply) => {
    const categoryIDs = InterestSchema.parse(request.body)
    const linkInterests = new LinkInterests();
    const user  = request.user as User
    const result = await linkInterests.connect({user, categoryIDs})
    reply.status(200).send(result);
  })

  fastify.put('/unlink-interests', { onRequest: [fastify.authenticate]}, async(request, reply) => {
    const categoryIDs = InterestSchema.parse(request.body)
    const linkInterests = new LinkInterests();
    const user  = request.user as User
    const result = await linkInterests.disconnect({user, categoryIDs})
    reply.status(200).send(result);
  })

  fastify.put<{Params: IBoundCollection}>('/link-collection/:collectionID', { onRequest: [fastify.authenticate]}, async(request, reply) => {
    const { collectionID } = request.params;
    const user  = request.user as User

    const linkCollection = new LinkCollection();

    const result = await linkCollection.connect({collectionID, user});

    reply.status(200).send(result);
  })

  fastify.put<{Params: IBoundCollection}>('/unlink-collection/:collectionID', { onRequest: [fastify.authenticate]}, async(request, reply) => {
    const { collectionID } = request.params;
    const user  = request.user as User

    const linkCollection = new LinkCollection();

    const result = await linkCollection.disconnect({collectionID, user});

    reply.status(200).send(result);
  })
};

export default routes;
