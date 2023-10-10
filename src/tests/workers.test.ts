import { it, expect, describe, vi } from 'vitest';
import prismaAdapter from '../adapters/__mocks__/prisma-adapter';
import { NotificationStatus, NotificationType } from '@prisma/client';
import { createNotifications } from '../workers/createNotifications';

vi.mock('../adapters/prisma-adapter.ts');

describe('Workers', () => {
  describe('createNotifications()', () => {
    const collection = {
      id: 'uuid-test-1',
      name: 'Jujutsu Kaisen',
      image: 'https://m.media-amazon.com/images/',
      categories: ['uuid-test-2'],
      collectionGroupId: '',
      createdAt: new Date(),
      updatedAt: new Date(),
      users: [
        {
          id: 'uuid-test-3'
        }
      ]
    };

    const job = {
      data: {
        id: 'uuid-test-4',
        status: 'new',
        collectionId: 'uuid-test-1',
        title: 'a coleção acaba de receber a adição de um novo volume!',
        image: ''
      }
    };
    it('Should generate notifications for users linkeds to collection', async () => {
      const spyFind =
        prismaAdapter.collection.findUnique.mockResolvedValue(collection);
      const spyCreate = prismaAdapter.notification.createMany.mockResolvedValue(
        { count: 1 }
      );
      await createNotifications(job);
      expect(spyFind).toHaveBeenCalledTimes(1);
      expect(spyCreate).toHaveBeenCalledTimes(1);
    });
  });
});
