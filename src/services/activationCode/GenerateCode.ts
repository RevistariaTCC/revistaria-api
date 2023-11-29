import prisma from '../../adapters/prisma-adapter';
import codesQueue from '../../queues/codes';

class GenerateCode {
  public async execute(phone: string) {
    try {
      const randomCode = Math.floor(100000 + Math.random() * 900000).toString();
      const activationCode = await prisma.activationCode.create({
        data: {
          code: randomCode,
          phone: phone
        }
      });

      codesQueue.add('send', {activationCode}, { removeOnComplete: true });
      return activationCode;
    } catch (error) {
      throw error;
    }
  }
}

export default GenerateCode;
