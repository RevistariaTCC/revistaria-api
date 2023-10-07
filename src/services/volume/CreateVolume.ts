import prisma from "../../adapters/prisma-adapter";
import { Volume } from '../../schemas/volume';
import notificationsQueue from '../../queues/notifications';

class CreateVolume {
  public async execute(params: Volume) {

    const volume = await prisma.volume.create({
      data: params
    });
    await notificationsQueue.add('create', {...volume});
    return volume;
  }
}

export default CreateVolume;
