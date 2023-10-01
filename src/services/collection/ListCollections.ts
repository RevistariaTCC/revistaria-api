import { PrismaClient } from '@prisma/client';

//TODO: Add pagination at lists
class ListCollections {
  public async call() {
    const prisma = new PrismaClient();

    const collections = await prisma.collection.findMany({
      include: {
        categories: true,
        volumes: true
      }
    });
    
    await prisma.$disconnect();
    return collections;
  }
}

export default ListCollections;
