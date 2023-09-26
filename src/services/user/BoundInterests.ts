import { Category, PrismaClient, User } from "@prisma/client";
import { UserInterests } from "../../schemas/userInterests";
import { PartialUser } from "../../schemas/user";

interface DataDTO {
  user: User,
  categoryIDs: UserInterests
}

interface Response extends Omit<PartialUser, "interests"> {
  interests: Category[]
}

class BoundInterests {
  public async execute({user, categoryIDs}: DataDTO): Promise<Response> {
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

    
    return updatedUser;
  }
}

export default BoundInterests;