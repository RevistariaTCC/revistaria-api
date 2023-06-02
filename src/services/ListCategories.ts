import { PrismaClient } from '@prisma/client';

//TODO: Add pagination at lists
class ListCategories {
  public async call() {
    const prisma = new PrismaClient();

    const categories = await prisma.category.findMany({include: {
      collections: true
    }});

    await prisma.$disconnect();

    return categories;
  }
}

export default ListCategories;
