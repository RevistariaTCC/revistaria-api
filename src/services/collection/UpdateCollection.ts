import { PrismaClient } from '@prisma/client';
import AppError from '../../errors/AppError';
import { PartialCollection } from '../../schemas/collection';

class UpdateCollection {
  public async call(params: PartialCollection) {
    try {
      const { id, categories, ...rest } = params;
      const prisma = new PrismaClient();
      const collection = await prisma.collection.findUnique({
        where: {
          id: id
        }
      });

      if (!collection) throw new AppError('Collection not found!', 404);

      const updatedCollection = await prisma.collection.update({
        where: {
          id: id
        },
        data: {
          categories: {
            connect: categories?.map((item) => ({ id: item }))
          },
          ...rest
        }
      });

      await prisma.$disconnect();
      return updatedCollection;
    } catch (error) {
      throw error;
    }
  }
}

export default UpdateCollection;
