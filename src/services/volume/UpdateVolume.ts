import { PrismaClient } from '@prisma/client';
import { PartialVolume } from '../../schemas/volume';

class UpdateVolume {
  public async call(params: PartialVolume) {
    const { id, ...rest } = params;
    const prisma = new PrismaClient();

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
