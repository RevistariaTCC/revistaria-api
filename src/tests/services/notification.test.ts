import { it, expect, describe, vi } from 'vitest';
import prismaAdapter from '../../adapters/__mocks__/prisma-adapter';
import ListNotificationsByUser from '../../services/notifications/ListNotificationsByUser';
import ReadAllNotificationsByUser from '../../services/notifications/ReadAllNotificationsByUser';
import ReadNotificationById from '../../services/notifications/ReadNotificationById';
import { NotificationStatus, NotificationType } from '@prisma/client';

vi.mock('../../adapters/prisma-adapter.ts');

describe('Notification services', () => {
  const notifications = [
    {
      id: 'uuid-test-1',
      createdAt: new Date(),
      updatedAt: new Date(),
      title: 'Uma novidade acabou de chegar!',
      text: 'A coleção Jujutsu Kaisen acaba de receber a adição de Volume 09',
      status: NotificationStatus.UNREAD,
      type: NotificationType.NEW_VOLUME,
      userId: 'uuid-test-2',
      data: 'uuid-test-3'
    }
  ];

  describe('ListNotificationsByUser()', () => {
    it('Should return a list of notifications by user', async () => {
      const spy =
        prismaAdapter.notification.findMany.mockResolvedValue(notifications);
      const listNotificationsByUser = new ListNotificationsByUser();
      const result = await listNotificationsByUser.execute('uuid-test-2');

      expect(result).toStrictEqual(notifications);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
  describe('ReadAllNotificationsByUser()', () => {
    it('Should update all user notifications to read status', async () => {
      const spy = prismaAdapter.notification.updateMany.mockResolvedValue({
        count: 1
      });
      const readAllNotificationsByUser = new ReadAllNotificationsByUser();
      const result = await readAllNotificationsByUser.execute('uuid-test-2');

      expect(result).toStrictEqual({ count: 1 });
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
  describe('ReadNotificationById()', () => {
    const notification = {
      id: 'uuid-test-1',
      createdAt: new Date(),
      updatedAt: new Date(),
      title: 'Uma novidade acabou de chegar!',
      text: 'A coleção Jujutsu Kaisen acaba de receber a adição de Volume 09',
      status: NotificationStatus.UNREAD,
      type: NotificationType.NEW_VOLUME,
      userId: 'uuid-test-2',
      data: 'uuid-test-3'
    };

    const user = {
      id: 'uuid-test-2',
      email: 'test@email.com',
      name: 'test',
      phone: '41999999999',
      password: 'test123',
      passwordHash: 'test123',
      createdAt: new Date(),
      updatedAt: new Date(),
      birthdate: new Date(),
      newsletter: false
    };

    it('Should update specific notification', async () => {
      const updatedNotification = {
        ...notification,
        status: NotificationStatus.READ
      };
      const spyUpdate =
        prismaAdapter.notification.update.mockResolvedValue(
          updatedNotification
        );
      const spyFind =
        prismaAdapter.notification.findUnique.mockResolvedValue(notification);
      const readNotificationById = new ReadNotificationById();
      const result = await readNotificationById.execute('uuid-test-1', user);

      expect(result).toStrictEqual(updatedNotification);
      expect(spyUpdate).toHaveBeenCalledTimes(1);
      expect(spyFind).toHaveBeenCalledTimes(1);
    });

    it('Should return notification not found when id doesnt exists', async () => {
      const spyFind =
        prismaAdapter.notification.findUnique.mockResolvedValue(null);
      const readNotificationById = new ReadNotificationById();
      await expect(
        readNotificationById.execute('uuid-test-1', user)
      ).rejects.toThrowError('Notification not found.');
      expect(spyFind).toHaveBeenCalledTimes(1);
    });
  });
});
