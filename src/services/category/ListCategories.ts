import prisma from '../../adapters/prisma-adapter';

//TODO: Add pagination at lists
class ListCategories {
  public async execute() {
    const categories = await prisma.category.findMany({
      include: {
        collections: true
      }
    });

    return categories;
  }
}

export default ListCategories;
