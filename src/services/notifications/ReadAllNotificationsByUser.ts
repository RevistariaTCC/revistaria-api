import prisma from '../../adapters/prisma-adapter';

class ReadAllNotificationsByUser {
  public async execute(userID: string) {
    try {
      return await prisma.notification.updateMany({
        data: {
          status: 'READ'
        },
        where: {
          userId: userID
        }
      });
    } catch (error) {
      throw error;
    }
  }
}

export default ReadAllNotificationsByUser;
