import prisma from '../../adapters/prisma-adapter';
import AppError from '../../errors/AppError';
import { differenceInMinutes } from 'date-fns';

class ValidateCode {
  public async execute(phone: string, code: string) {
    try {
      const activationCode = await prisma.activationCode.findFirst({
        where: {
          phone: phone,
          code: code,
          used: false,
          expired: false
        }
      });

      if (!activationCode) throw new AppError('Code not found!', 404);

      if (differenceInMinutes(new Date(), activationCode.createdAt) > 15) {
        await prisma.activationCode.update({
          where: {
            id: activationCode.id
          },
          data: {
            expired: true
          }
        });

        throw new AppError('The code has expired!', 400);
      }

      return await prisma.activationCode.update({
        where: {
          id: activationCode.id
        },
        data: {
          used: true
        }
      });
    } catch (error) {
      throw error;
    }
  }
}

export default ValidateCode;
