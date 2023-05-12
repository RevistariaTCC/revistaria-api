import fastify from 'fastify';
import cors from '@fastify/cors';
import { z } from 'zod';
import routes from './routes/index.routes';

const server = fastify();

server.register(cors);
server.register(routes, {prefix: "api/"});



export default server;
