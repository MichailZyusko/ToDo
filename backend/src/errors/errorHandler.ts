import { Request, Response } from 'express';
import ApiError from './ApiError';

export default (err: Error, req: Request, res: Response) => {
  let message = 'Something went wrong';
  let status = 500;

  if (err instanceof ApiError) {
    message = err.message;
    status = err.statusCode;
  }

  console.error(err);
  res.status(status)
    .send({
      code: status,
      message,
    });
};
