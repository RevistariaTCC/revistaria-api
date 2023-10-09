import prisma from "../../adapters/prisma-adapter";
import AppError from "../../errors/AppError";

class ReadNotificationById {
  public async execute(id: string) {
    try {
      const notificationFind = await prisma.notification.findUnique({
        where: {
          id: id
        }
      })

      if(!notificationFind) throw new AppError('Notification not found.', 404);

      return await prisma.notification.update({
        where: {
          id
        },
        data: {
          status: "READ"
        }
      })
    } catch (error) {
      throw error
    }
  }
}
export default ReadNotificationById;