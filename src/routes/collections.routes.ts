import { FastifyInstance } from 'fastify';
import CollectionSchema from '../schemas/collection';
import CreateCollection from '../services/collection/CreateCollection';
import ListCollections from '../services/collection/ListCollections';
import { IParams, iQuery } from '../types';
import GetCollections from '../services/collection/GetCollection';

const routes = async (fastify: FastifyInstance) => {
  fastify.post('/', async (request, reply) => {
    try {
      const collection = CollectionSchema.parse(request.body);
      const createCollectionService = new CreateCollection();
      const result = await createCollectionService.execute(collection);
      reply.status(201).send(result);
    } catch (error) {
      throw error;
    }
  });

  fastify.get<{ Querystring: iQuery }>('/', async (request, reply) => {
    try {
      const { search } = request.query;
      const listCollectionsService = new ListCollections();
      const result = await listCollectionsService.execute(search);
      reply.status(200).send(result);
    } catch (error) {
      throw error;
    }
  });

  fastify.get<{ Params: IParams }>(
    '/:id',
    async (request, reply) => {
      try {
        const {id} = request.params
        const getCollections = new GetCollections()
        const result = await getCollections.execute(id)
        reply.status(200).send(result);
      } catch (error) {
        throw error;
      }
    }
  );
};

export default routes;
