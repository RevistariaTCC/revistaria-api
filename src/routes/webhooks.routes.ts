import { FastifyInstance } from 'fastify';
import { IParams } from '../types';
import UpdateReservation from '../services/reservation/UpdateReservation';

const routes = async (fastify: FastifyInstance) => {
  fastify.get<{ Params: IParams }>(
    '/reservations/:id',
    async (request, reply) => {
      try {
        const { id } = request.params;
        const updateReservation = new UpdateReservation();
        await updateReservation.execute(id);

        reply.status(200).send('Reserva atualizada com sucesso!');
      } catch (error) {
        throw error;
      }
    }
  );
};

export default routes;
