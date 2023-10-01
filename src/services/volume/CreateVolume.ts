import { PrismaClient } from '@prisma/client';
import { Volume } from '../../schemas/volume';
import notificationsQueue from '../../queues/notifications';

class CreateVolume {
  public async call(params: Volume) {
    const prisma = new PrismaClient();

    const volume = await prisma.volume.create({
      data: params
    });

    await prisma.$disconnect();
    await notificationsQueue.add('create', {...volume});
    return volume;
  }
}

export default CreateVolume;
