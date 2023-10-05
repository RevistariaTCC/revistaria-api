import prisma from "../../adapters/prisma-adapter";
import { PartialCategory } from '../../schemas/category';
import AppError from '../../errors/AppError';

class UpdateCategory {
  public async execute(params: PartialCategory) {
    try {
      const { id, ...rest } = params;
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

      await prisma.$disconnect();
      return updatedCategory;
    } catch (error) {
      throw error;
    }
  }
}

export default UpdateCategory;
