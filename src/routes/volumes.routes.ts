import { FastifyInstance } from 'fastify';
import VolumeSchema from '../schemas/volume';
import CreateVolume from '../services/volume/CreateVolume';
import ListVolumes from '../services/volume/ListVolumes';
import DeleteVolume from '../services/volume/DeleteVolume';
import UpdateVolume from '../services/volume/UpdateVolume';

const routes = async (fastify: FastifyInstance) => {
  fastify.post('/', async (request, reply) => {
    try {
      const volume = VolumeSchema.parse(request.body);
      const createVolumeService = new CreateVolume();
      const result = await createVolumeService.execute(volume);
      reply.status(201).send(result);
    } catch (error) {
      throw error;
    }
  });

  fastify.get('/', async (request, reply) => {
    try {
      const listVolumesService = new ListVolumes();
      const result = await listVolumesService.execute();

      reply.status(200).send(result);
    } catch (error) {
      throw error;
    }
  });

  fastify.delete('/:id', async (request, reply) => {
    try {
      const { id } = request.params as { id: string };

      const deleteVolume = new DeleteVolume();
      const result = await deleteVolume.execute(id);
      reply.status(200).send(result);
    } catch (error) {
      throw error;
    }
  });

  fastify.put('/:id', async (request, reply) => {
    try {
      const { id } = request.params as { id: string };

      const volume = VolumeSchema.partial().parse(request.body);
      const updateVolume = new UpdateVolume();
      const result = await updateVolume.execute({ id, ...volume });
      reply.status(200).send(result);
    } catch (error) {
      throw error;
    }
  });
};

export default routes;
