import express, { Application } from 'express';
import serverless from 'serverless-http';
import morgan from 'morgan';
import config from './config';
import taskRouter from './src/entities/task/routes';
import errorHandler from './src/errors/errorHandler';
import incorrectEndpoint from './src/middlewares/incorrectEndpoint';
import cors from './src/middlewares/corsPolicySetup';

const { app: { port, host } } = config;

const app: Application = express();

app.use(cors);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/tasks', taskRouter);
app.use(incorrectEndpoint);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`http://${host}:${port}`);
});

export const handler = serverless(app);
