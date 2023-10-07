import prisma from "../../adapters/prisma-adapter";

//TODO: Add pagination at lists
class ListCollections {
  public async execute() {
    return await prisma.collection.findMany({
      include: {
        categories: true,
        volumes: true
      }
    });
  }
}

export default ListCollections;
