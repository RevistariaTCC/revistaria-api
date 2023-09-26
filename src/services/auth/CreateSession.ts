import { PrismaClient } from "@prisma/client"
import AppError from "../../errors/AppError";
import { compare } from "bcryptjs";
import { PartialUser } from "../../schemas/user";


interface Request {
  email: string,
  password: string
}

class CreateSession {
  public async execute({email,  password}: Request): Promise<PartialUser>{
    const prisma = new PrismaClient();

    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })

    if (!user) {
      throw new AppError('Incorrect email/password combination', 401);
    }

    const passwordMatched = await compare(password, user.passwordHash);

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination', 401);
    }

    return user;
  }
}

export default CreateSession