import prisma from '../../adapters/prisma-adapter';
import AppError from '../../errors/AppError';
import { compare } from 'bcryptjs';
import { PartialUser } from '../../schemas/user';

interface Request {
  cpf: string;
  password: string;
}

class CreateSession {
  public async execute({ cpf, password }: Request): Promise<PartialUser> {
    try {
      const user = await prisma.user.findUnique({
        where: {
          cpf
        }
      });

      if (!user) {
        throw new AppError('Incorrect cpf/password combination', 401);
      }

      const passwordMatched = await compare(password, user.passwordHash);

      if (!passwordMatched) {
        throw new AppError('Incorrect cpf/password combination', 401);
      }

      return user;
    } catch (error) {
      throw error;
    }
  }
}

export default CreateSession;
