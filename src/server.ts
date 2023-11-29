import { Worker } from 'bullmq';
import { REDIS_HOST, REDIS_PORT } from './config/redis';

import app from './app';
import { createNotifications } from './workers/createNotifications';
import { reserveVolume } from './workers/reserveVolume';
import { sendCode } from './workers/sendCode';

new Worker('Notifications', createNotifications, {
  connection: {
    host: REDIS_HOST,
    port: REDIS_PORT
  }
});

new Worker('Reservations', reserveVolume, {
  connection: {
    host: REDIS_HOST,
    port: REDIS_PORT
  }
});

new Worker('Codes', sendCode, {
  connection: {
    host: REDIS_HOST,
    port: REDIS_PORT
  }
});

app.listen(
  { host: '0.0.0.0', port: process.env.PORT ? Number(process.env.PORT) : 4000 },
  (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`🚀🚀 Server listening at ${address} 🚀🚀`);
  }
);
