import prisma from '../../adapters/prisma-adapter';
import { User } from '../../schemas/user';
import AppError from '../../errors/AppError';
import { hash } from 'bcrypt';

class CreateUser {
  public async execute(params: User) {
    const { cpf, name, password, phone, birthdate, newsletter } = params;
    const checkUserExist = await prisma.user.findFirst({
      where: {
        cpf: cpf
      }
    });

    if (checkUserExist) {
      throw new AppError('CPF já esta em uso!');
    }

    const hashedPassword = await hash(password, 8);

    return await prisma.user.create({
      data: {
        passwordHash: hashedPassword,
        cpf,
        name,
        phone,
        birthdate,
        newsletter,
        interests: {
          connect: params.interests?.map((id) => ({ id: id }))
        }
      }
    });
  }
}

export default CreateUser;
