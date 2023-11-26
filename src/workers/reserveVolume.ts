import { Collection, NotificationType, Reservation, User, Volume } from '@prisma/client';
import prisma from '../adapters/prisma-adapter';
import { send } from '../middleware/whatsapp/newReservation';
interface iJob {
  data: {
    reservation: Reservation;
    volume: Volume;
    user: User;
    collection: Collection;
  };
}



export const reserveVolume = async (job: iJob) => {
  const {volume, collection, user} = job.data


  const text = `Olá ${user.name} Recebemos a sua reserva de ${collection.name} ${volume.title}
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

  send(job.data)

};
