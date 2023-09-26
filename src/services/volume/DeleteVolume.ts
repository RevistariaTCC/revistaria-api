import { PrismaClient } from '@prisma/client';
import AppError from '../../errors/AppError';

class DeleteVolume {
  public async call(id: string) {
    const prisma = new PrismaClient();

    const volume = await prisma.volume.findUnique({
      where: {
        id: id
      }
    })

    if (!volume)
      throw new AppError("Volume not found!", 404)

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
