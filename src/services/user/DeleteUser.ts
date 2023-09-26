import { PrismaClient } from "@prisma/client";
import AppError from "../../errors/AppError";
class DeleteUser {
  public async execute(id: string) {
    const prisma = new PrismaClient();

    const userFinded = await prisma.user.findUnique({
      where: {
        id
      }
    });
  
    if(!userFinded) {
      throw new AppError('User not found.', 404);
    }
    
    const user = await prisma.user.delete({
      where: {
        id
      }
    })

    return user;
  }
}

export default DeleteUser;