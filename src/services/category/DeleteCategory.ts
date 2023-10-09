import prisma from "../../adapters/prisma-adapter";
import AppError from '../../errors/AppError';

class DeleteCategory {
  public async execute(id: string) {
    try {
      const category = await prisma.category.findUnique({
        where: {
          id: id
        }
      });

      if (!category) throw new AppError('Category not found!', 404);

      return await prisma.category.delete({
        where: {
          id: id
        }
      });
    } catch (error) {
      throw error;
    }
  }
}

export default DeleteCategory;
