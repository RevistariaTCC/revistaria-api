import { User } from '@prisma/client';
import AppError from '../../errors/AppError';
import prisma from '../../adapters/prisma-adapter';

interface IRequest {
  collectionID: string;
  user: User;
}

class LinkCollection {
  public async connect({ collectionID, user }: IRequest) {
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
          collections: {
            connect: { id: collectionID }
          }
        },
        include: {
          collections: true
        }
      });
    } catch (error) {
      throw error;
    }
  }

  public async disconnect({ collectionID, user }: IRequest) {
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
          collections: {
            disconnect: { id: collectionID }
          }
        },
        include: {
          collections: true
        }
      });
    } catch (error) {
      throw error;
    }
  }
}

export default LinkCollection;
