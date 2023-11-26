import { User, VolumeStatus } from '@prisma/client';
import prisma from '../../adapters/prisma-adapter';
import AppError from '../../errors/AppError';
import reserationsQueue from '../../queues/reservations';

interface iRequest {
  volumeId: string;
  user: User;
}

class ReserveVolume {
  public async execute({ volumeId, user }: iRequest) {
    try {
      const volume = await prisma.volume.findUnique({
        where: {
          id: volumeId
        },
        include: {
          collection: {
            select: {
              name: true
            }
          }
        }
      });

      if (!volume) throw new AppError('Volume not found!', 404);

      if (volume.units == 0 || volume.status === VolumeStatus.UNAVAILABLE)
        throw new AppError('Volume is unavailable!', 403);

      const units = volume.units ?? 0;

      const status =
        units - 1 > 0 ? VolumeStatus.AVAILABLE : VolumeStatus.UNAVAILABLE;

      await prisma.volume.update({
        where: {
          id: volume.id
        },
        data: {
          status: status,
          units: units > 0 ? units - 1 : 0
        }
      });
      
      const reservation = await prisma.reservation.create({
        data: {
          userId: user.id,
          volumeId: volume.id
        },
        select:{
          id: true,
          createdAt: true,
          volume: {
            select: {
              title: true,
              collection: {
                select: {
                  name: true,
                }
              }
            }
          },
          user: true
        }
      });


      reserationsQueue.add('send', {
        reservation: reservation,
        volume: reservation.volume,
        collection: reservation.volume.collection,
        user: reservation.user
      }, { removeOnComplete: true });
    } catch (error) {
      throw error;
    }
  }
}

export default ReserveVolume;
