import { it, expect, describe, vi } from 'vitest';
import prismaAdapter from '../../adapters/__mocks__/prisma-adapter';
import CreateCollection from '../../services/collection/CreateCollection';
import ListCollections from '../../services/collection/ListCollections';
import DeleteCollection from '../../services/collection/DeleteCollection';
import UpdateCollection from '../../services/collection/UpdateCollection';

vi.mock("../../adapters/prisma-adapter.ts");

describe('Collections Services', () => {
  const collection = {
    id: 'be32003d-73f5-45d8-8b79-050a0c58554f',
    name: "Jujutsu Kaisen",
	  image: "https://m.media-amazon.com/images/",
	  categories: ["5b765eb3-40cf-48ee-a988-415bc6c6c0d3"],
    collectionGroupId: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  describe('CreateCollection()', () => {
    it('Should return the generated collection', async() => {
      const spyCreate = prismaAdapter.collection.create.mockResolvedValue(collection);
      const createCollection = new CreateCollection();
      const result = await createCollection.execute(collection)

      expect(result).toStrictEqual(collection)
      expect(spyCreate).toHaveBeenCalledTimes(1)
    })
  })

  describe('DeleteCollection()', () => {
    it('Should delete a existing collection', async () => {
      const spyFind = prismaAdapter.collection.findUnique.mockResolvedValue(collection);
      const spyDelete = prismaAdapter.collection.delete.mockResolvedValue(collection);
      const deleteCategory = new DeleteCollection();
      const result = await deleteCategory.execute(collection.id)

      expect(result).toStrictEqual(collection)
      expect(spyFind).toHaveBeenCalledTimes(1)
      expect(spyDelete).toHaveBeenCalledTimes(1)
    })

    it('Should return collection not found when id doesnt exists', async () => {
      const spyFind = prismaAdapter.collection.findUnique.mockResolvedValue(null);
      const deleteCategory = new DeleteCollection();

      await expect(deleteCategory.execute(collection.id)).rejects.toThrowError("Collection not found!")
      expect(spyFind).toHaveBeenCalledTimes(1)
    })
  })

  describe('ListCollections()', () => {
    it('Should return list of collections', async() => {
      const spyFind = prismaAdapter.collection.findMany.mockResolvedValue([collection]);
      const listCollections = new ListCollections();
      const result = await listCollections.execute()

      expect(Array.isArray(result)).toBeTruthy;
      expect(result).toStrictEqual([collection]);
      expect(spyFind).toHaveBeenCalledTimes(1)
    })
  })

  describe('UpdateCollection()', () => {

    it('Should return the updated collection', async() => {
      const updatedCollection = {...collection, name: "Kimetsu" };
      const spyFind = prismaAdapter.collection.findUnique.mockResolvedValue(collection);
      const spyUpdate = prismaAdapter.collection.update.mockResolvedValue(updatedCollection);
      const updateCategory = new UpdateCollection();
      const result = await updateCategory.execute({id: updatedCollection.id, name: "Kimetsu"});
      expect(result).toStrictEqual(updatedCollection);
      expect(spyFind).toHaveBeenCalledTimes(1)
      expect(spyUpdate).toHaveBeenCalledTimes(1)
    })

    it('Should return collection not found when id doesnt exists', async () => {
      const spyFind = prismaAdapter.collection.findUnique.mockResolvedValue(null);

      const updateCategory = new UpdateCollection();

      await expect(updateCategory.execute({id: collection.id, name: "Kimetsu"})).rejects.toThrowError("Collection not found!")
      expect(spyFind).toHaveBeenCalledTimes(1)
    })
  })

})
