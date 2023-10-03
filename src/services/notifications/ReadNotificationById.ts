import { PrismaClient } from "@prisma/client";

class ReadNotificationById {
  public async execute(id: string) {
    try {
      const prisma = new PrismaClient()
      const result = await prisma.notification.update({
        where: {
          id
        },
        data: {
          status: "READ"
        }
      })
      await prisma.$disconnect()
      return result
    } catch (error) {
      throw error
    }
  }
}
export default ReadNotificationById;