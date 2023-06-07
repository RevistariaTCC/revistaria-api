import { Category } from '../../schemas/category';
import { PrismaClient } from '@prisma/client';

class CreateCategory {
  public async call({ name }: Category) {
    const prisma = new PrismaClient();

    const category = await prisma.category.create({
      data: {
        name: name
      }
    });

    await prisma.$disconnect();

    return category;
  }
}

export default CreateCategory;
