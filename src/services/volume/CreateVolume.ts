import { PrismaClient } from '@prisma/client';
import { Volume } from '../../schemas/volume';

class CreateVolume {
  public async call(params: Volume) {
    const prisma = new PrismaClient();

    const volume = await prisma.volume.create({
      data: params
    });

    await prisma.$disconnect();
    return volume;
  }
}

export default CreateVolume;
