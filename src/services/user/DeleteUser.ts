import prisma from "../../adapters/prisma-adapter";
import AppError from "../../errors/AppError";
class DeleteUser {
  public async execute(id: string) {
    try {
      const userFinded = await prisma.user.findUnique({
        where: {
          id
        }
      });
    
      if(!userFinded) {
        throw new AppError('User not found.', 404);
      }
      
      return await prisma.user.delete({
        where: {
          id
        }
      }) 
    } catch (error) {
      throw error
    }
  }
}

export default DeleteUser;