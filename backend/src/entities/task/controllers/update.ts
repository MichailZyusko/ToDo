import { NextFunction, Request, Response } from 'express';
import { TParams, TTask } from '../types';
import editItem from '../repository/editItem';
import taskMapper from '../mappers';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedTask: TTask = await editItem(req?.params as TParams);

    res.status(200).json(taskMapper(updatedTask));
  } catch (error: any) {
    next(error);
  }
};
