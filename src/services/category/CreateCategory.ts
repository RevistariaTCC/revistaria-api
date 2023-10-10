import { Category } from '../../schemas/category';
import prisma from '../../adapters/prisma-adapter';

class CreateCategory {
  public async execute({ name }: Category) {
    try {
      return await prisma.category.create({
        data: {
          name: name
        }
      });
    } catch (error) {
      throw error;
    }
  }
}

export default CreateCategory;
