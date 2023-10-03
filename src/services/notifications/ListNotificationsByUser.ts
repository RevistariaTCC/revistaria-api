import { PrismaClient } from "@prisma/client";

class ListNotificationsByUser {
  public async execute(userID: string) {
    try {
      const prisma = new PrismaClient()

      const result = await prisma.notification.findMany({
        where: {
          userId: userID
        }
      })
      await prisma.$disconnect()
      return result;
    } catch (error) {
      throw error
    }
  }
}
export default ListNotificationsByUser;