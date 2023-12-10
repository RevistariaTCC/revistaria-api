import { hash } from 'bcrypt';
import AppError from '../../errors/AppError';
import prisma from '../../adapters/prisma-adapter';

class ResetPassword {
  public async execute(newPassword: string, cpf: string) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          cpf
        }
      });

      if (!user) {
        throw new AppError('User not found.', 404);
      }

      const hashedPassword = await hash(newPassword, 8);
      return await prisma.user.update({
        where: {
          id: user.id
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

export default ResetPassword;
