import { FastifyInstance } from 'fastify';
import ListUser from '../services/user/ListUser';
import GetUserById from '../services/user/GetUserById';
import { IParams } from '../types';
import DeleteUser from '../services/user/DeleteUser';
import UserSchema, { PartialUser } from '../schemas/user';
import CreateUser from '../services/user/CreateUser';
import BoundInterests from '../services/user/BoundInterests';
import { User } from '@prisma/client';
import { InterestSchema } from '../schemas/userInterests';

const routes = async (fastify: FastifyInstance) => {

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
      delete result.passwordHash;
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
  fastify.post('/interests', { onRequest: [fastify.authenticate]}, async(request, reply) => {
    const categoryIDs = InterestSchema.parse(request.body)
    const boundInterests = new BoundInterests();
    const user  = request.user as User
    const result = await boundInterests.execute({user, categoryIDs})
    delete result.passwordHash;

    reply.status(200).send(result);
  })
};

export default routes;
