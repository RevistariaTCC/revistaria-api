import { Collection, Reservation, User, Volume } from '@prisma/client';
import { fetchData } from '../whatsapp';

const WHATSAPP_PHONE_BASE = process.env.WHATSAPP_PHONE_BASE;

interface ReservationMessateTemplateProps {
  reservation: Reservation;
  volume: Volume;
  user: User;
  collection: Collection;
}

export const send = ({
  collection,
  reservation,
  volume,
  user
}: ReservationMessateTemplateProps) => {
  const payload = {
    messaging_product: 'whatsapp',
    recipient_type: 'individual',
    to: WHATSAPP_PHONE_BASE,
    type: 'template',
    template: {
      name: 'new_reservation_alert',
      language: {
        code: 'pt_BR'
      },
      components: [
        {
          type: 'HEADER',
          parameters: [
            {
              type: 'text',
              text: `${collection.name} ${volume.title}`
            }
          ]
        },
        {
          type: 'BODY',
          parameters: [
            {
              type: 'text',
              text: `${user.name}`
            },
            {
              type: 'text',
              text: `${user.phone}`
            },
            {
              type: 'text',
              text: `${reservation.createdAt}`
            }
          ]
        },
        {
          type: 'BUTTON',
          sub_type: 'url',
          index: 0,
          parameters: [
            {
              type: 'text',
              text: `${reservation.id}`
            }
          ]
        }
      ]
    }
  };

  fetchData({
    method: 'POST',
    body: JSON.stringify(payload)
  });
};
