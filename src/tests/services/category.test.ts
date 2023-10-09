import { it, expect, describe, vi } from 'vitest';
import prismaAdapter from '../../adapters/__mocks__/prisma-adapter';
import CreateCategory from '../../services/category/CreateCategory';
import DeleteCategory from '../../services/category/DeleteCategory';
import ListCategories from '../../services/category/ListCategories';
import UpdateCategory from '../../services/category/UpdateCategory';

vi.mock("../../adapters/prisma-adapter.ts");

describe('Category Services', () => {
  const category = {
    id: 'be32003d-73f5-45d8-8b79-050a0c58554f',
    name: "Romance",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  describe('CreateCategory()', () => {
    it('Should return the generated category', async () => {
      const spyCreate = prismaAdapter.category.create.mockResolvedValue(category)
      const createCategory = new CreateCategory()
      const result = await createCategory.execute({name: category.name})
  
      expect(spyCreate).toHaveBeenCalledTimes(1)
      expect(result).toStrictEqual(category)
    })
  })
  
  describe('DeleteCategory()', () => {
    it('Should delete a existing category', async () => {
        const spyFind = prismaAdapter.category.findUnique.mockResolvedValue(category);
        const spyDelete = prismaAdapter.category.delete.mockResolvedValue(category);
        const deleteCategory = new DeleteCategory();
        const result = await deleteCategory.execute(category.id)

        expect(spyFind).toHaveBeenCalledTimes(1)
        expect(spyDelete).toHaveBeenCalledTimes(1)
        expect(result).toStrictEqual(category)
    })

    it('Should return category not found when id doesnt exists', async () => {
      const spyFind = prismaAdapter.category.findUnique.mockResolvedValue(null);
      const deleteCategory = new DeleteCategory();

      await expect(deleteCategory.execute(category.id)).rejects.toThrowError("Category not found!")
      expect(spyFind).toHaveBeenCalledTimes(1)
    })
  })

  describe('ListCategories()', () => {
    it('Should return list of categories', async() =>{
      const spyFind = prismaAdapter.category.findMany.mockResolvedValue([category]);
      const listCategories = new ListCategories();
      const result = await listCategories.execute();
      expect(Array.isArray(result)).toBeTruthy;
      expect(result).toStrictEqual([category]);
      expect(spyFind).toHaveBeenCalledTimes(1)
    })
  })

  describe('UpdateCategory()', () => {
    it('Should return the updated category', async() => {
      const updatedCategory = {...category, name: "Aventura" };
      const spyFind = prismaAdapter.category.findUnique.mockResolvedValue(category);
      const spyUpdate = prismaAdapter.category.update.mockResolvedValue(updatedCategory);
      const updateCategory = new UpdateCategory();
      const result = await updateCategory.execute({id: category.id, name: "Aventura"});
      expect(result).toStrictEqual(updatedCategory);
      expect(spyFind).toHaveBeenCalledTimes(1)
      expect(spyUpdate).toHaveBeenCalledTimes(1)
    })

    it('Should return category not found when id doesnt exists', async () => {
      const spyFind = prismaAdapter.category.findUnique.mockResolvedValue(null);
      const updateCategory = new UpdateCategory();

      await expect(updateCategory.execute({id: category.id, name: "Aventura"})).rejects.toThrowError("Category not found!")
      expect(spyFind).toHaveBeenCalledTimes(1)
    })
  })

})




