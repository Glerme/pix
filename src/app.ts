import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import { json } from 'body-parser';
import openapi from '@ev-fns/openapi';

import { notFound } from './middlewares/notFound';
import { exception } from './middlewares/exception';

import { join } from 'path';
import { readdirSync } from 'fs';

const app = express();

// Midleware
app.use(cors());
app.use(json());
app.use(morgan('dev'));
app.use(openapi({ apiName: process.env.API_NAME }));

const routes = readdirSync(join(__dirname, 'routes'));

for (const route of routes) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  app.use(require(join(__dirname, 'routes', route)).default);
}

app.use(exception);

app.use(notFound);

export default app;
