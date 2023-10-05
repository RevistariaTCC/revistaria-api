import { Category } from '../../schemas/category';
import prisma from "../../adapters/prisma-adapter";

class CreateCategory {
  public async execute({ name }: Category) {
    return await prisma.category.create({
      data: {
        name: name
      }
    });
  }
}

export default CreateCategory;
 