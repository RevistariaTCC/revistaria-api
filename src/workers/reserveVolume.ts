import prisma from '../adapters/prisma-adapter';

interface iJob {
  data: {
    volumeTitle: string;
    collectionName: string;
    userName: string;
    userPhone: string;
  }

}

export const reserveVolume = async (job: iJob) => {
  const {
    volumeTitle,
    collectionName,
    userName,
    userPhone
  } = job.data
  const text = `Olá ${userName} Recebemos a sua reserva de ${collectionName} volume ${volumeTitle}
    Fique de olho, dentro das próximas 24 horas estará disponível para ser retirado na Banca!
  `;

  console.log(text)
};
