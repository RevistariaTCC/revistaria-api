import { PrismaClient, User } from "@prisma/client"

interface IRequest {
  collectionID: string,
  user: User
}

class LinkCollection {
  
  public async connect({collectionID, user}: IRequest) {
    try {
      const prisma = new PrismaClient();

      const result = await prisma.user.update({
        where: {
          id: user.id
        },
        data: {
          collections: {
            connect: {id: collectionID}
          }
        },
        include: {
          collections: true
        }
      })

      await prisma.$disconnect();
      return result;
    } catch (error) {
      throw error;
    }
  }

  public async disconnect({collectionID, user}: IRequest) {
    try {
      const prisma = new PrismaClient();

      const result = await prisma.user.update({
        where: {
          id: user.id
        },
        data: {
          collections: {
            disconnect: {id: collectionID}
          }
        },
        include: {
          collections: true
        }
      })

      await prisma.$disconnect();
      return result;
    } catch (error) {
      throw error;
    }
  }
}

export default LinkCollection;