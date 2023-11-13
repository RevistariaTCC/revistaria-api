import prisma from '../../adapters/prisma-adapter';

//TODO: Add pagination at lists
class ListCollections {
  public async execute(search = '') {
    console.log(search);
    return await prisma.collection.findMany({
      where: {
        name: {
          contains: search,
          mode: 'insensitive'
        }
      },
      include: {
        categories: true,
        volumes: true
      }
    });
  }
}

export default ListCollections;
