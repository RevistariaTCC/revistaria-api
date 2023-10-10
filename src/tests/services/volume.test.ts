import { it, expect, describe, vi } from 'vitest';
import { VolumeStatus } from '@prisma/client';
import prismaAdapter from '../../adapters/__mocks__/prisma-adapter';
import notificationsQueue from '../../queues/__mocks__/notifications';
import CreateVolume from '../../services/volume/CreateVolume';
import DeleteVolume from '../../services/volume/DeleteVolume';
import UpdateVolume from '../../services/volume/UpdateVolume';
import ListVolumes from '../../services/volume/ListVolumes';

vi.mock('../../queues/notifications.ts');
vi.mock('../../adapters/prisma-adapter.ts');

describe('Volume Services', () => {
  const volume = {
    id: 'uuid-1',
    title: 'Volume 01',
    image: '',
    status: VolumeStatus.AVAILABLE,
    collectionId: 'f5be74ba-7dec-43b0-a8b2-e29ff7f6ce90',
    createdAt: new Date(),
    updatedAt: new Date()
  };
  describe('CreateVolume()', () => {
    it('Sould return the generated volume without creating a notification', async () => {
      const spy = prismaAdapter.volume.create.mockResolvedValue(volume);
      const spyQueue = notificationsQueue.add.mockResolvedValue({} as any);
      const createVolume = new CreateVolume();
      const result = await createVolume.execute(volume);

      expect(spyQueue).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(result).toStrictEqual(volume);
    });
  });

  describe('DeleteVolume()', () => {
    it('Should delete a existing volume', async () => {
      const spyFind = prismaAdapter.volume.findUnique.mockResolvedValue(volume);
      const spyDelete = prismaAdapter.volume.delete.mockResolvedValue(volume);
      const deleteVolume = new DeleteVolume();
      const result = await deleteVolume.execute(volume.id);

      expect(spyFind).toHaveBeenCalledTimes(1);
      expect(spyDelete).toHaveBeenCalledTimes(1);
      expect(result).toStrictEqual(volume);
    });

    it('Should return volume not found when id doesnt exists', async () => {
      const spyFind = prismaAdapter.volume.findUnique.mockResolvedValue(null);
      const deleteVolume = new DeleteVolume();

      await expect(deleteVolume.execute(volume.id)).rejects.toThrowError(
        'Volume not found!'
      );
      expect(spyFind).toHaveBeenCalledTimes(1);
    });
  });

  describe('UpdateVolume()', () => {
    it('Should return the updated volume', async () => {
      const updatedVolume = { ...volume, title: 'Volume 02' };
      const spyFind = prismaAdapter.volume.findUnique.mockResolvedValue(volume);
      const spyUpdate =
        prismaAdapter.volume.update.mockResolvedValue(updatedVolume);
      const updateVolume = new UpdateVolume();
      const result = await updateVolume.execute({
        id: volume.id,
        title: 'Volume 02'
      });

      expect(spyFind).toHaveBeenCalledTimes(1);
      expect(spyUpdate).toHaveBeenCalledTimes(1);
      expect(result).toStrictEqual(updatedVolume);
    });

    it('Should return volume not found when id doesnt exists', async () => {
      const spyFind = prismaAdapter.volume.findUnique.mockResolvedValue(null);
      const updateVolume = new UpdateVolume();

      await expect(
        updateVolume.execute({ id: volume.id, title: 'Volume 02' })
      ).rejects.toThrowError('Volume not found!');
      expect(spyFind).toHaveBeenCalledTimes(1);
    });
  });

  describe('ListVolumes()', () => {
    it('Should return list of volumes', async () => {
      const spy = prismaAdapter.volume.findMany.mockResolvedValue([volume]);
      const listVolumes = new ListVolumes();
      const result = await listVolumes.execute();

      expect(spy).toHaveBeenCalledTimes(1);
      expect(Array.isArray(result)).toBeTruthy;
      expect(result).toStrictEqual([volume]);
    });
  });
});
