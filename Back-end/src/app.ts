import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './router/home.js';
import { robotRouter } from './router/robots.js';
import { userRouter } from './router/user.js';

export const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/', router);
app.use('/robots', robotRouter);
app.use('/users', userRouter);

app.use((error: Error, req: Request, resp: Response, next: NextFunction) => {
  req;
  resp;
  next;
  console.log(error.message);
  resp.status(500);
  const result = {
    error: error.message,
    type: error.name,
  };
  resp.send(JSON.stringify(result));
});
