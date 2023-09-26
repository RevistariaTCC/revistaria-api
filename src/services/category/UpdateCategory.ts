import { PrismaClient } from '@prisma/client';
import { PartialCategory } from '../../schemas/category';
import AppError from '../../errors/AppError';

class UpdateCategory {
  public async call(params: PartialCategory) {
    try {
      const { id, ...rest } = params;
      const prisma = new PrismaClient();
      const category = await prisma.category.findUnique({
        where: {
          id: id
        }
      });

      if (!category) throw new AppError('Category not found!', 404);

      const updatedCategory = await prisma.category.update({
        where: {
          id: id
        },
        data: { ...rest }
      });

      return updatedCategory;
    } catch (error) {
      throw error;
    }
  }
}

export default UpdateCategory;
