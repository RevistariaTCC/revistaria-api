import { FastifyInstance } from 'fastify';
import CollectionSchema from '../schemas/collection';
import CreateCollection from '../services/collection/CreateCollection';
import ListCollections from '../services/collection/ListCollections';

const routes = async (fastify: FastifyInstance) => {
  fastify.post('/', async (request, reply) => {
    try {
      const collection = CollectionSchema.parse(request.body);
      const createCollectionService = new CreateCollection();
      const result = await createCollectionService.call(collection);
      reply.status(201).send(result);
    } catch (error) {
      throw error;
    }
  });

  fastify.get('/', async (request, reply) => {
    try {
      const listCollectionsService = new ListCollections();
      const result = await listCollectionsService.call();

      reply.status(200).send(result);
    } catch (error) {
      throw error;
    }
  });
};

export default routes;
