import prisma from '../../adapters/prisma-adapter';
import AppError from '../../errors/AppError';

class DeleteCollection {
  public async execute(id: string) {
    try {
      const collection = await prisma.collection.findUnique({
        where: {
          id: id
        }
      });

      if (!collection) throw new AppError('Collection not found!', 404);

      return await prisma.collection.delete({
        where: {
          id: id
        }
      });
    } catch (error) {
      throw error;
    }
  }
}

export default DeleteCollection;
