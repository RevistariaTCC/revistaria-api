import prisma from '../../adapters/prisma-adapter';
import AppError from '../../errors/AppError';
import { FindUser } from '../../schemas/findUser';

class GetUserByCpf {
  public async execute({ cpf }: FindUser) {
    try {
      const foundedUser = await prisma.user.findUnique({
        where: {
          cpf: cpf
        }
      });

      if (!foundedUser) {
        throw new AppError('User not found.', 404);
      }
      return foundedUser;
    } catch (error) {
      throw error;
    }
  }
}

export default GetUserByCpf;
