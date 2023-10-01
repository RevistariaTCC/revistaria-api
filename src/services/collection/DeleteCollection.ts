import { PrismaClient } from '@prisma/client';
import AppError from '../../errors/AppError';

class DeleteCollection {
  public async call(id: string) {
    try {
      const prisma = new PrismaClient();
      const collection = await prisma.collection.findUnique({
        where: {
          id: id
        }
      });

      if (!collection) throw new AppError('Collection not found!', 404);

      const deletedCollection = await prisma.collection.delete({
        where: {
          id: id
        }
      });

      await prisma.$disconnect();
      return deletedCollection;
    } catch (error) {
      throw error;
    }
  }
}

export default DeleteCollection;
