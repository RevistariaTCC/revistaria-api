import prisma from '../../adapters/prisma-adapter';
import { User } from '../../schemas/user';
import AppError from '../../errors/AppError';
import { hash } from 'bcryptjs';

class CreateUser {
  public async execute(params: User) {
    const { email, name, password, phone } = params;

    const checkUserExist = await prisma.user.findFirst({
      where: {
        email: email
      }
    });

    if (checkUserExist) {
      throw new AppError('Email address already used.');
    }

    const hashedPassword = await hash(password, 8);
    console.log('hashed Password:', hashedPassword);

    return await prisma.user.create({
      data: {
        passwordHash: hashedPassword,
        email,
        name,
        phone
      }
    });
  }
}

export default CreateUser;
