import { PrismaClient } from '@prisma/client';

class DeleteVolume {
  public async call(id: string) {
    const prisma = new PrismaClient();

    const deleteVolume = await prisma.volume.delete({
      where: {
        id: id
      }
    });
    await prisma.$disconnect();
    return deleteVolume;
  }
}

export default DeleteVolume;
