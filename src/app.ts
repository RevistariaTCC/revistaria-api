import fastify from 'fastify';
import cors from '@fastify/cors';
import routes from './routes';

const server = fastify({logger: true});

server.register(cors);
server.register(routes, { prefix: 'api/' });

export default server;
