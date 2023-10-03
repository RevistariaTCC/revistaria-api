import { PrismaClient } from "@prisma/client";

class ReadAllNotificationsByUser {
  public async execute(userID: string) {
    try {
      const prisma = new PrismaClient();
      await prisma.notification.updateMany({
        data: {
          status: "READ"
        },
        where: {
          userId: userID
        }
      })

      await prisma.$disconnect()
    } catch (error) {
      throw error
    }
  }
}

export default ReadAllNotificationsByUser;