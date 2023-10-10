import prisma from '../../adapters/prisma-adapter';

class ListUsers {
  public async execute() {
    try {
      return await prisma.user.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
          passwordHash: false
        }
      });
    } catch (error) {
      throw error;
    }
  }
}

export default ListUsers;
