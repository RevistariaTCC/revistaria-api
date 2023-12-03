import { Queue } from 'bullmq';

import { REDIS_HOST, REDIS_PORT } from '../config/redis';

const codesQueue = new Queue('Codes', {
  connection: {
    host: REDIS_HOST,
    port: REDIS_PORT
  }
});

export default codesQueue;
