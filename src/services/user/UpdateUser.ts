import { User } from '@prisma/client';
import { PartialUser } from '../../schemas/user'
import prisma from '../../adapters/prisma-adapter';
import AppError from '../../errors/AppError';


type iPartialUser = Omit<Omit<PartialUser, "collections">, "interests">
interface iRequest {
  user: User;
  data: iPartialUser
}
class UpdateUser {
  public async execute({user, data}: iRequest) {
    try {
      const userFinded = await prisma.user.findUnique({
        where: {
          id: user.id
        }
      });

      if (!userFinded) {
        throw new AppError('User not found.', 404);
      }

      return await prisma.user.update({
        where: {
          id: user.id
        },
        data: data
      })
    } catch (error) {
      throw error;
    }
  }
}

export default UpdateUser;
