import { ActivationCode } from '@prisma/client';
import { send } from '../middleware/whatsapp/activationCode';

interface iJob {
  data: {
    activationCode: ActivationCode;
  };
}

export const sendCode = async (job: iJob) => {
  try {
    const phone = job.data.activationCode.phone.replace(/\D/g, '');
    send({
      ...job.data.activationCode,
      phone: phone
    });
  } catch (error) {
    throw error;
  }
};
