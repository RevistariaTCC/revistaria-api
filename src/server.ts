import AdminJSFastify from '@adminjs/fastify';
import AdminJS from 'adminjs';
import FastifySession from '@fastify/session';
import Connect from 'connect-pg-simple';
import { Database, Resource, getModelByName } from '@adminjs/prisma';
import prisma from './adapters/prisma-adapter';

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

const ConnectSession = Connect(FastifySession as any);
const sessionStore = new ConnectSession({
  conObject: {
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production'
  },
  tableName: 'session',
  createTableIfMissing: true
});

const DEFAULT_ADMIN = {
  email: 'admin@example.com',
  password: 'password'
};

const authenticate = async (email: string, password: string) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN);
  }
  return null;
};

AdminJS.registerAdapter({ Database, Resource });

const start = async () => {
  const adminOptions = {
    resources: [
      {
        resource: { model: getModelByName('Category'), client: prisma },
        options: {}
      },
      {
        resource: { model: getModelByName('Volume'), client: prisma },
        options: {}
      },
      {
        resource: { model: getModelByName('Collection'), client: prisma },
        options: {}
      },
      {
        resource: { model: getModelByName('User'), client: prisma },
        options: {}
      },
      {
        resource: { model: getModelByName('ActivationCode'), client: prisma },
        options: {}
      },
      {
        resource: { model: getModelByName('CollectionGroup'), client: prisma },
        options: {}
      },
      {
        resource: { model: getModelByName('Reservation'), client: prisma },
        options: {}
      }
    ]
  };

  const admin = new AdminJS({
    databases: [],
    rootPath: '/admin',
    ...adminOptions
  });

  const cookieSecret = 'sieL67H7GbkzJ4XCoH0IHcmO1hGBSiG5';

  await AdminJSFastify.buildAuthenticatedRouter(
    admin,
    {
      authenticate,
      cookiePassword: cookieSecret,
      cookieName: 'adminjs'
    },
    app,
    {
      store: sessionStore as any,
      saveUninitialized: true,
      secret: cookieSecret,
      cookie: {
        httpOnly: process.env.NODE_ENV === 'production',
        secure: process.env.NODE_ENV === 'production'
      }
    }
  );

  app.listen(
    {
      host: '0.0.0.0',
      port: process.env.PORT ? Number(process.env.PORT) : 4000
    },
    (err, address) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(
        `🚀🚀 AdminJS started on ${address}${admin.options.rootPath} 🚀🚀`
      );
    }
  );
};

start();
