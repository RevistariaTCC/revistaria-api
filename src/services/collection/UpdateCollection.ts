import prisma from "../../adapters/prisma-adapter";
import AppError from '../../errors/AppError';
import { PartialCollection } from '../../schemas/collection';

class UpdateCollection {
  public async execute(params: PartialCollection) {
    try {
      const { id, categories, ...rest } = params;
      const collection = await prisma.collection.findUnique({
        where: {
          id: id
        }
      });

      if (!collection) throw new AppError('Collection not found!', 404);

      return await prisma.collection.update({
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

    } catch (error) {
      throw error;
    }
  }
}

export default UpdateCollection;
