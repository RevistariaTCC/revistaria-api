import { PrismaClient } from '@prisma/client';

//TODO: Add pagination at lists
class ListVolumes {
  public async call() {
    const prisma = new PrismaClient();

    const volumes = await prisma.volume.findMany({
      include: {
        collection: true
      }
    });
    return volumes;
  }
}

export default ListVolumes;
