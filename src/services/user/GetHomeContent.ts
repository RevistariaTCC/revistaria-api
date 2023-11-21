import { User } from '@prisma/client';
import prisma from '../../adapters/prisma-adapter';
import AppError from '../../errors/AppError';

export default class GetHomeContent {
  public async execute(user: User) {
    const loadedUser = await prisma.user.findUnique({
      where: {
        id: user.id
      },
      include: {
        interests: true,
        collections: true
      }
    });

    if (!loadedUser) throw new AppError('User not found!', 404);

    const suggestedCollections = await prisma.collection.findMany({
      where: {
        categories: {
          some: {
            id: { in: loadedUser.interests.map((category) => category.id) }
          }
        },
        id: {
          notIn: loadedUser.collections.map((collection) => collection.id)
        }
      }
    });

    return {
      favorites: loadedUser.collections,
      suggestions: suggestedCollections
    };
  }
}
