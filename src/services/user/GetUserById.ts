import prisma from "../../adapters/prisma-adapter";
import AppError from '../../errors/AppError';

class GetUserById {
  public async execute(id: string){
    try {
      const user = await prisma.user.findUnique({
        where: {
          id
        },
        include: {
          interests: true,
          collections: true,
        },
      });
  
      if (!user) {
        throw new AppError('User not found.', 404);
      }
      return user;

    } catch (error) {
      throw error;
    }
  }
}

export default GetUserById;
