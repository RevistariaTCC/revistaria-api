import { PrismaClient } from '@prisma/client';
import { Collection } from '../../schemas/collection';

class CreateCollection {
  public async call(params: Collection) {
    const prisma = new PrismaClient();
    let {categories, ...rest } = params

    const collection = await prisma.collection.create({
      data: {
        categories: {
          connect: categories.map(item => ({id: item}))
        },
        ...rest
      }
    });

    await prisma.$disconnect();
    return collection;
  }
}

export default CreateCollection;
