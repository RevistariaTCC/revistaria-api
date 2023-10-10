import prisma from '../adapters/prisma-adapter';

interface IJob {
  data: {
    id: string;
    status: string;
    collectionId: string;
    title: string;
    image: string;
  };
}

export const createNotifications = async (job: IJob) => {
  const nameAndUserIds = await prisma.collection.findUnique({
    select: {
      name: true,
      users: {
        select: {
          id: true
        }
      }
    },
    where: {
      id: job.data.collectionId
    }
  });

  if (nameAndUserIds) {
    await prisma.notification.createMany({
      data: nameAndUserIds.users.map((user) => ({
        title: 'Uma novidade acabou de chegar!',
        text: `A coleção ${nameAndUserIds.name} acaba de receber a adição de ${job.data.title}`,
        userId: user.id,
        status: 'UNREAD',
        type: 'NEW_VOLUME'
      }))
    });
  }
};
