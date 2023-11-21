import prisma from '../../adapters/prisma-adapter';

class ListNotificationsByUser {
  public async execute(userID: string) {
    try {
      return await prisma.notification.findMany({
        where: {
          userId: userID
        },
        orderBy: {
          createdAt: "desc"
        }
      });
    } catch (error) {
      throw error;
    }
  }
}
export default ListNotificationsByUser;
