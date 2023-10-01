import { Worker } from 'bullmq';
import { REDIS_HOST, REDIS_PORT } from './config/redis';

import app from './app';
import { createNotifications } from './workers/createNotifications';


new Worker('Notifications', createNotifications, {
  connection: {
    host: REDIS_HOST,
    port: REDIS_PORT
  }
});


app.listen({ host: '0.0.0.0', port: 4000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`🚀🚀 Server listening at ${address} 🚀🚀`);
});
