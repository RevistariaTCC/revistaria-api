import { FastifyInstance } from 'fastify';
import CategoriesSchema from '../schemas/category';
import CreateCategory from '../services/CreateCategory';
import ListCategories from '../services/ListCategories';

const routes = async (fastify: FastifyInstance) => {
  fastify.post('/categories', async (request, reply) => {
    try {
      const category = CategoriesSchema.parse(request.body);

      const createCategoryService = new CreateCategory();
      const result = await createCategoryService.call(category);

      reply.status(201).send(result);

    } catch (error) {
      throw error;
    }
  });

  fastify.get("/categories", async (request, reply) => {
    try {
      const listCategoriesServices = new ListCategories();
      const result = await listCategoriesServices.call();

      reply.status(200).send(result);
    } catch (error) {
      throw error;
    }
  })
};

export default routes;
