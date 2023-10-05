import { it, expect, describe, vi } from 'vitest';
import prismaAdapter from '../../adapters/__mocks__/prisma-adapter';
import CreateCategory from '../../services/category/CreateCategory';
vi.mock("../../adapters/prisma-adapter.ts");

describe('CreateCategory()', () => {
  const category = {
    id: 'be32003d-73f5-45d8-8b79-050a0c58554f',
    name: "Romance",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  it('Should return the generated category', async () => {
    prismaAdapter.category.create.mockResolvedValue(category)
    const createCategory = new CreateCategory()
    const result = await createCategory.call({name: category.name})


    expect(result).toStrictEqual(category)
    vi.resetAllMocks();
  })
})


