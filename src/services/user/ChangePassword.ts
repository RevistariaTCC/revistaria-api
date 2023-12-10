import { User } from '@prisma/client';
import prisma from '../../adapters/prisma-adapter';
import AppError from '../../errors/AppError';
import { compare, hash } from 'bcrypt';

interface iRequest {
  password: string;
  newPassword: string;
}

class ChangePassword {
  public async execute(user: User, { password, newPassword }: iRequest) {
    try {
      const foundedUser = await prisma.user.findUnique({
        where: {
          id: user.id
        }
      });

      if (!foundedUser) throw new AppError('User not found.', 404);

      const passwordMatched = await compare(password, foundedUser.passwordHash);

      if (!passwordMatched) {
        throw new AppError('Senha atual inválida!', 401);
      }

      const hashedPassword = await hash(newPassword, 8);

      return await prisma.user.update({
        where: {
          id: foundedUser.id
        },
        data: {
          passwordHash: hashedPassword
        }
      });
    } catch (error) {
      throw error;
    }
  }
}

export default ChangePassword;
