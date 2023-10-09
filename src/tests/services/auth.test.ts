import { it, expect, describe, vi } from 'vitest';
import prismaAdapter from '../../adapters/__mocks__/prisma-adapter';
import CreateSession from '../../services/auth/CreateSession';

vi.mock("../../adapters/prisma-adapter.ts");

describe('Auth Service', () => {
  describe('CreateSession()', () => {
    const user = {
      id: "uuid-test-1",
      email: "test@email.com",
      name: "test",
      phone: "41999999999",
      password: 'test123',
      passwordHash: "$2a$08$wopVCye3Y0E70XgUNlWOhO0h6xoKqM.0AgInC7M0Pe/ERXXaaIHXy",
      createdAt: new Date(),
      updatedAt: new Date(),

    }

    it('Should return the generated session', async() => {
      const spyFind = prismaAdapter.user.findUnique.mockResolvedValue(user);

      const createSession = new CreateSession();
      const result = await createSession.execute({email: user.email, password: user.password});
      expect(result).toStrictEqual(user)
      expect(spyFind).toHaveBeenCalledTimes(1)
    })

    it('Should return Incorrect email/password combination when email is invalid', async () => {
      const spyFind = prismaAdapter.user.findUnique.mockResolvedValue(null);

      const createSession = new CreateSession();
      await expect(createSession.execute({email: 'teste@email.com', password: user.password})).rejects.toThrowError('Incorrect email/password combination')
      expect(spyFind).toHaveBeenCalledTimes(1)
    })

    it('Should return Incorrect email/password combination when password is invalid', async () => {
      const spyFind = prismaAdapter.user.findUnique.mockResolvedValue(null);

      const createSession = new CreateSession();
      await expect(createSession.execute({email: 'teste@email.com', password: 'test'})).rejects.toThrowError('Incorrect email/password combination')
      expect(spyFind).toHaveBeenCalledTimes(1)
    })
  })
})