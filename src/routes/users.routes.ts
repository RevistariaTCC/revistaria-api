import { FastifyInstance } from 'fastify';
import ListUser from '../services/user/ListUser';
import GetUserById from '../services/user/GetUserById';
import { IParams } from '../types';
import DeleteUser from '../services/user/DeleteUser';
import UserSchema, { PartialUser } from '../schemas/user';
import CreateUser from '../services/user/CreateUser';

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

  fastify.get('/ping', async (request, reply) => {
    return 'pong\n';
  });
};

export default routes;
