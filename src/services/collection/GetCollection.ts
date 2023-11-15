import prisma from '../../adapters/prisma-adapter';
import AppError from '../../errors/AppError';

class GetCollection {
  public async execute(id: string) {
    try {
      const collection = await prisma.collection.findUnique({
        where: {
          id: id
        },
        include: {
          categories: true,
          volumes: true
        }
      });
      if (!collection) {
        throw new AppError('Collection not found.', 404);
      }
      return collection;
    } catch (error) {
      throw error;
    }
  }
}

export default GetCollection;
