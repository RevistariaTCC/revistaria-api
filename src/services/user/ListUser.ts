import { PrismaClient } from '@prisma/client';

class ListUser {
  public async execute(){
    const prisma = new PrismaClient();

    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        passwordHash: false,
      }
    });
    return users
  }
}

export default ListUser;