import { PrismaClient } from '@prisma/client';
import { PartialVolume } from '../../schemas/volume';
import AppError from '../../errors/AppError';

class UpdateVolume {
  public async call(params: PartialVolume) {
    const { id, ...rest } = params;
    const prisma = new PrismaClient();

    // Buscar o volume na base, caso não exista retornar um erro
    const volume = await prisma.volume.findUnique({
      where: {
        id: id
      }
    })

    if (!volume)
      throw new AppError("Volume not found!", 404)

    const updatedVolume = await prisma.volume.update({
      where: {
        id: id
      },
      data: { ...rest }
    });
    await prisma.$disconnect();

    return updatedVolume;
  }
}

export default UpdateVolume;
