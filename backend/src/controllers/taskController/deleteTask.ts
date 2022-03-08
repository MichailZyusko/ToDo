import { NextFunction, Request, Response } from 'express';
import { TParams } from '../../types';
import deleteTask from '../../utils/aws/dynamoDB/deleteItem';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    await deleteTask(req.params as TParams);

    res.status(204).send();
  } catch (error: any) {
    next(error);
  }
};
