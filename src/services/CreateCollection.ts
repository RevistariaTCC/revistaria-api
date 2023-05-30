import { PrismaClient } from '@prisma/client';
import { Collection } from '../schemas/collection';

class CreateCollection {
  public async call(params: Collection) {
    const prisma = new PrismaClient();

    const collection = prisma.collection.create({
      data: params
    });

    await prisma.$disconnect();
    return collection;
  }
}

export default CreateCollection;
