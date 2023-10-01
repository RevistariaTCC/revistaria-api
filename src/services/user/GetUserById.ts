import { PrismaClient } from '@prisma/client';
import AppError from '../../errors/AppError';

class GetUserById {
  public async execute(id: string){
    const prisma = new PrismaClient();
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

    await prisma.$disconnect();
    return user;
  }
}

export default GetUserById;
