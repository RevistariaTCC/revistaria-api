import { PrismaClient } from '@prisma/client';
import AppError from '../../errors/AppError';

class DeleteCategory {
  public async call(id: string) {
    try {
      const prisma = new PrismaClient();
      const category = await prisma.category.findUnique({
        where: {
          id: id
        }
      });

      if (!category) throw new AppError('Category not found!', 404);

      const deletedCategory = await prisma.category.delete({
        where: {
          id: id
        }
      });

      return deletedCategory;
    } catch (error) {
      throw error;
    }
  }
}

export default DeleteCategory;
