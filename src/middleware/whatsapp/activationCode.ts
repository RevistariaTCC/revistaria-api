import { ActivationCode } from '@prisma/client';
import { fetchData } from '../whatsapp';

export const send = (activationCode: ActivationCode) => {
  const payload = {
    messaging_product: 'whatsapp',
    recipient_type: 'individual',
    to: `55${activationCode.phone}`,
    type: 'template',
    template: {
      name: 'send_code',
      language: {
        code: 'pt_BR'
      },
      components: [
        {
          type: 'BODY',
          parameters: [
            {
              type: 'text',
              text: activationCode.code
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
              text: activationCode.code
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
