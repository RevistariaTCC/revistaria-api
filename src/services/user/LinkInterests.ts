import { Category, PrismaClient, User } from "@prisma/client";
import { PartialUser } from "../../schemas/user";

interface IRequest {
  user: User,
  categoryIDs: string[]
}


class LinkInterests {
  public async connect({user, categoryIDs}: IRequest) {
    const prisma = new PrismaClient();
    const updatedUser = await prisma.user.update({
      where: {
        id: user.id
      },
      data: {
         interests: {
          connect: categoryIDs.map((item) => ({id: item}))
         }
      },
      include: {
        interests: true
      }
    })

    await prisma.$disconnect();
    return updatedUser;
  }

  public async disconnect({user, categoryIDs}: IRequest){
    const prisma = new PrismaClient();
    const updatedUser = await prisma.user.update({
      where: {
        id: user.id
      },
      data: {
         interests: {
          disconnect: categoryIDs.map((item) => ({id: item}))
         }
      },
      include: {
        interests: true
      }
    })

    await prisma.$disconnect();
    return updatedUser;
  }
}

export default LinkInterests;