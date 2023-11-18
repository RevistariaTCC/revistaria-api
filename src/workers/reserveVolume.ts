import { NotificationType, User } from '@prisma/client';
import prisma from '../adapters/prisma-adapter';

interface iJob {
  data: {
    volumeTitle: string;
    collectionName: string;
    user: User;
  };
}

export const reserveVolume = async (job: iJob) => {
  const { volumeTitle, collectionName, user } = job.data;
  const text = `Olá ${user.name} Recebemos a sua reserva de ${collectionName} ${volumeTitle}
    Fique de olho, dentro das próximas 24 horas estará disponível para ser retirado na Banca!
  `;

  await prisma.notification.create({
    data: {
      userId: user.id,
      text: text,
      title: 'Reserva efetuada!',
      type: NotificationType.NEW_RESERVATION
    }
  });
};
