import prisma from "../../adapters/prisma-adapter";

//TODO: Add pagination at lists
class ListVolumes {
  public async execute() {

    return await prisma.volume.findMany({
      include: {
        collection: true
      }
    });
  }
}

export default ListVolumes;
