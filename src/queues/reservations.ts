import { Queue } from 'bullmq';

import { REDIS_HOST, REDIS_PORT } from '../config/redis';

const notificationsQueue = new Queue('Reservations', {
  connection: {
    host: REDIS_HOST,
    port: REDIS_PORT
  }
});

export default notificationsQueue;
