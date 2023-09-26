
import { PrismaClient } from '@prisma/client';
import { User } from '../../schemas/user';
import AppError from '../../errors/AppError';
import { hash } from 'bcryptjs';


class CreateUser {
  public async execute(params: User) {
    const {email, name, password, phone} = params
    const prisma = new PrismaClient();
    
    const checkUserExist = await prisma.user.findFirst({
      where: {
        email: email
      }
    })

    if (checkUserExist) {
      throw new AppError('Email address already used.');
    }

    const hashedPassword = await hash(password, 8);

    const user = await prisma.user.create({
      data: {
        passwordHash: hashedPassword,
        email,
        name,
        phone
      }
    });

    await prisma.$disconnect();
    return user;
  }
}

export default CreateUser;