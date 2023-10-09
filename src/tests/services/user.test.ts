import { it, expect, describe, vi } from 'vitest';
import prismaAdapter from '../../adapters/__mocks__/prisma-adapter';
import CreateUser from '../../services/user/CreateUser';
import DeleteUser from '../../services/user/DeleteUser';
import GetUserById from '../../services/user/GetUserById';
import LinkInterests from '../../services/user/LinkInterests';
import LinkCollection from '../../services/user/LinkCollection';
import ListUsers from '../../services/user/ListUsers';
import { User } from '@prisma/client';

vi.mock("../../adapters/prisma-adapter.ts");

describe('User Services', () => {
  const user = {
    id: "test-uuid-1",
    email: "test@email.com",
    name: "test",
    phone: "41999999999",
    password: "test123",
    passwordHash: "test123",
    createdAt: new Date(),
    updatedAt: new Date()
  }

  describe('CreateUser()', () => {
    it('Sould return the generated user', async() => {
      const spyFind = prismaAdapter.user.findFirst.mockResolvedValue(null)
      const spyCreate = prismaAdapter.user.create.mockResolvedValue(user);       
      const createUser = new CreateUser();
      const result = await createUser.execute(user);

      expect(spyFind).toHaveBeenCalledTimes(1)
      expect(spyCreate).toHaveBeenCalledTimes(1)
      expect(result).toStrictEqual(result);

    })

    it('Should return error if email address already used.', async() => {
      const spyFind = prismaAdapter.user.findFirst.mockResolvedValue(user)
      const createUser = new CreateUser();

      await expect(createUser.execute(user)).rejects.toThrowError("Email address already used.")
      expect(spyFind).toHaveBeenCalledTimes(1)
    })
  })

  describe('DeleteUser()', () => {
    it('Should delete a existing user', async () => {
      const spyFind = prismaAdapter.user.findUnique.mockResolvedValue(user);
      const spyDelete = prismaAdapter.user.delete.mockResolvedValue(user);
      const deleteUser = new DeleteUser();
      const result = await deleteUser.execute(user.id)

      expect(spyFind).toHaveBeenCalledTimes(1)
      expect(spyDelete).toHaveBeenCalledTimes(1)
      expect(result).toStrictEqual(user)
    })

    it('Should return user not found when id doesnt exists', async () => {

      const deleteUser = new DeleteUser();

      await expect(deleteUser.execute(user.id)).rejects.toThrowError("User not found.")
    })
  })

  describe('GetUserById()', () => {
    it('Should return the user when found by ID', async() => {
      const spyFind = prismaAdapter.user.findUnique.mockResolvedValue(user);
      const getUserById = new GetUserById();
      const result = await getUserById.execute(user.id)

      expect(spyFind).toHaveBeenCalledTimes(1)
      expect(result).toStrictEqual(user)
    })

    it('Should return user not found when id doesnt exists', async() => {
      const spyFind = prismaAdapter.user.findUnique.mockResolvedValue(null);
      const getUserById = new GetUserById();

      await expect(getUserById.execute(user.id)).rejects.toThrowError("User not found.")
      expect(spyFind).toHaveBeenCalledTimes(1)
    })
  })

  describe('LinkCollections()', () => {    
    const user = {
      id: "uuid-test-1",
      email: "test@email.com",
      name: "test",
      phone: "41999999999",
      passwordHash: "test123",
      createdAt: new Date(),
      updatedAt: new Date(),

    }

    const updatedUser = {...user, 
      collections: [
      {
        id: "uuid-test-1",
        name: "Jujutsu Kaisen",
        image: "https://m.media-amazon.com/images/I/51sZRaogNUL.jpg",
        collectionGroupId: null
      }
    ]}

    it('Should connect user collections', async() => {
      const spyFind = prismaAdapter.user.findUnique.mockResolvedValue(user);
      const spyUpdate = prismaAdapter.user.update.mockResolvedValue(updatedUser)
      const linkCollection = new LinkCollection();

      const result = await linkCollection.connect({ collectionID: "uuid-test-1", user })

      expect(spyUpdate).toHaveBeenCalledTimes(1)
      expect(spyFind).toHaveBeenCalledTimes(1)
      expect(result).toStrictEqual(updatedUser)
    })

    it('Should return user not found when id doesnt exists on connect', async() => {
      const spyFind = prismaAdapter.user.findUnique.mockResolvedValue(null);
      const linkCollection = new LinkCollection();

      await expect(linkCollection.connect({ collectionID: "uuid-test-1", user })).rejects.toThrowError("User not found.")
      expect(spyFind).toHaveBeenCalledTimes(1)
    })

    it('Should disconnect user collections', async() => {
      const spyFind = prismaAdapter.user.findUnique.mockResolvedValue(user);
      const spyUpdate = prismaAdapter.user.update.mockResolvedValue({...user, collections: []} as User)
      const linkCollection = new LinkCollection();

      const result = await linkCollection.disconnect({ collectionID: "uuid-test-1", user })

      expect(spyUpdate).toHaveBeenCalledTimes(1)
      expect(spyFind).toHaveBeenCalledTimes(1)
      expect(result).toStrictEqual({...user, collections: []} as User)
    })

    it('Should return user not found when id doesnt exists on disconnect', async() => {
      const spyFind = prismaAdapter.user.findUnique.mockResolvedValue(null);
      const linkCollection = new LinkCollection();

      await expect(linkCollection.disconnect({ collectionID: "uuid-test-1", user })).rejects.toThrowError("User not found.")
      expect(spyFind).toHaveBeenCalledTimes(1)
    })
  })

  describe('LinkInterests()', () => {
    const user = {
      id: "uuid-test-1",
      email: "test@email.com",
      name: "test",
      phone: "41999999999",
      passwordHash: "test123",
      createdAt: new Date(),
      updatedAt: new Date(),

    }

    const updatedUser = {...user, 
      interests: [
      {
        id: "uuid-test-4",
        name: "Aventura"
      },
    ]}
    it('Should connect user interests', async() => {
      const spyFind = prismaAdapter.user.findUnique.mockResolvedValue(user);
      const spyUpdate = prismaAdapter.user.update.mockResolvedValue(updatedUser)
      const linkInterests = new LinkInterests();

      const result = await linkInterests.connect({ categoryIDs: ["uuid-test-1"], user })

      expect(spyUpdate).toHaveBeenCalledTimes(1)
      expect(spyFind).toHaveBeenCalledTimes(1)
      expect(result).toStrictEqual(updatedUser)
    })

    it('Should return user not found when id doesnt exists on connect', async() => {
      const spyFind = prismaAdapter.user.findUnique.mockResolvedValue(null);
      const linkInterests = new LinkInterests();

      await expect(linkInterests.connect({ categoryIDs: ["uuid-test-1"], user })).rejects.toThrowError("User not found.")
      expect(spyFind).toHaveBeenCalledTimes(1)
    })

    it('Should disconnect user interests', async() => {
      const spyFind = prismaAdapter.user.findUnique.mockResolvedValue(user);
      const spyUpdate = prismaAdapter.user.update.mockResolvedValue({...user, collections: []} as User)
      const linkInterests = new LinkInterests();

      const result = await linkInterests.disconnect({ categoryIDs: ["uuid-test-1"], user })

      expect(spyUpdate).toHaveBeenCalledTimes(1)
      expect(spyFind).toHaveBeenCalledTimes(1)
      expect(result).toStrictEqual({...user, collections: []} as User)
    })

    it('Should return user not found when id doesnt exists on disconnect', async() => {
      const spyFind = prismaAdapter.user.findUnique.mockResolvedValue(null);
      const linkInterests = new LinkInterests();

      await expect(linkInterests.disconnect({ categoryIDs: ["uuid-test-1"], user })).rejects.toThrowError("User not found.")
      expect(spyFind).toHaveBeenCalledTimes(1)
    })
  })
  describe('ListUser()', () => {
    it('Should return a list of users', async() => {
      const spy = prismaAdapter.user.findMany.mockResolvedValue([user]);
      const listUser = new ListUsers();
      const result = await listUser.execute()

      expect(spy).toHaveBeenCalledTimes(1)
      expect(Array.isArray(result)).toBeTruthy;
      expect(result).toStrictEqual([user]);
    })
  })
})
