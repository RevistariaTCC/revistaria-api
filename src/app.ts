import fastify from 'fastify';
import cors from '@fastify/cors';
import routes from './routes';

const app = fastify({ logger: true });

app.register(cors);
app.register(routes, { prefix: 'api/' });

export default app;
