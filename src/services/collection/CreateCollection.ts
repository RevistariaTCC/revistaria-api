import prisma from '../../adapters/prisma-adapter';
import { Collection } from '../../schemas/collection';

class CreateCollection {
  public async execute(params: Collection) {
    let { categories, ...rest } = params;

    return await prisma.collection.create({
      data: {
        categories: {
          connect: categories.map((item) => ({ id: item }))
        },
        ...rest
      }
    });
  }
}

export default CreateCollection;
