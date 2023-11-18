import prisma from '../../adapters/prisma-adapter';

class GetReservationByUser {
  public async execute(userId: string) {
    try {
      return await prisma.reservation.findMany({
        where: {
          userId: userId
        },
        select: {
          claimed: true,
          createdAt: true,
          claimedDate: true,
          volume: {
            select: {
              title: true,
              image: true,
              collection: {
                select: {
                  name: true
                }
              }
            }
          }
        }
      });
    } catch (error) {
      throw error;
    }
  }
}

export default GetReservationByUser;
