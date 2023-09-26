import { FastifyInstance } from "fastify"
import { IBodySession } from "../types";
import CreateSession from "../services/auth/CreateSession";

const routes = async (fastify: FastifyInstance) => {

  fastify.post<{Body: IBodySession}>("/", async(request, reply) => {
    try {
      const { email, password } = request.body;
      const createSession = new CreateSession();
      const user = await createSession.execute({email, password});
      
      delete user.passwordHash;
      const token = fastify.jwt.sign(user)
      reply.status(200).send({user, token});

    } catch (error) {
      throw error;
    }
  })

  fastify.get("/", { onRequest: [fastify.authenticate]}, async(request, reply) => {
    return request.user
  })

}

export default routes