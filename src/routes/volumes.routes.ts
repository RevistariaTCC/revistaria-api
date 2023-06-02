import { FastifyInstance } from 'fastify';
import VolumeSchema from '../schemas/volume';
import CreateVolume from '../services/CreateVolume';
import ListVolumes from '../services/ListVolumes';

const routes = async (fastify: FastifyInstance) => {
  fastify.post('/', async (request, reply) => {
    try {
      const volume = VolumeSchema.parse(request.body);
      const createVolumeService = new CreateVolume();
      const result = await createVolumeService.call(volume);
      reply.status(201).send(result);
    } catch (error) {
      throw error;
    }
  });
  fastify.get('/', async (request, reply) => {
    try {
      const listVolumesService = new ListVolumes();
      const result = await listVolumesService.call();

      reply.status(200).send(result);
    } catch (error) {
      throw error;
    }
  })
}

export default routes;