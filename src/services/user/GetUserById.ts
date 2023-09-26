import { PrismaClient } from '@prisma/client';
import AppError from '../../errors/AppError';

class GetUserById {
  public async execute(id: string) {
    const prisma = new PrismaClient();
    const user = await prisma.user.findUnique({
      where: {
        id
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        passwordHash: false,
      }
    });

    if (!user) {
      throw new AppError('User not found.', 404);
    }
    return user;
  }
}

export default GetUserById;
