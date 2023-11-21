import prisma from '../../adapters/prisma-adapter';
import AppError from '../../errors/AppError';

export default class GetSuggestions {
  public async execute(id: string) {
    const collection = await prisma.collection.findUnique({
      where: {
        id: id
      },
      include: {
        categories: true
      }
    })

    if (!collection) {
      throw new AppError('Collection not found.', 404);
    }

    const suggestions = await prisma.collection.findMany({
      where: {
        categories: {
          some: {
            id: { in: collection.categories.map(category => category.id)}
          } 
        },
        id: {
          not: id
        }
      },
    })
  
    return suggestions
  }
}