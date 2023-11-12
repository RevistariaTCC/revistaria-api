import { User } from '@prisma/client';
import AppError from '../../errors/AppError';
import prisma from '../../adapters/prisma-adapter';

interface IRequest {
  user: User;
  categoryIDs: string[];
}

class LinkInterests {
  public async connect({ user, categoryIDs }: IRequest) {
    try {
      const findUser = await prisma.user.findUnique({
        where: {
          id: user.id
        },
        include: {
          interests: true
        }
      });

      if (!findUser) {
        throw new AppError('User not found.', 404);
      }

      await prisma.user.update({
        where: {
          id: user.id
        },
        data: {
          interests: {
            disconnect: findUser.interests.map((interest) => ({
              id: interest.id
            }))
          }
        }
      });

      return await prisma.user.update({
        where: {
          id: user.id
        },
        data: {
          interests: {
            connect: categoryIDs.map((item) => ({ id: item }))
          }
        },
        include: {
          interests: true
        }
      });
    } catch (error) {
      throw error;
    }
  }

  public async disconnect({ user, categoryIDs }: IRequest) {
    try {
      const findUser = await prisma.user.findUnique({
        where: {
          id: user.id
        }
      });

      if (!findUser) {
        throw new AppError('User not found.', 404);
      }

      return await prisma.user.update({
        where: {
          id: user.id
        },
        data: {
          interests: {
            disconnect: categoryIDs.map((item) => ({ id: item }))
          }
        },
        include: {
          interests: true
        }
      });
    } catch (error) {
      throw error;
    }
  }
}

export default LinkInterests;
