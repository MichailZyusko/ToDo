import { NextFunction, Request, Response } from 'express';
import { TTaskMapped } from '../types';
import getTasks from '../repository/getItems';
import taskMapper from '../mappers';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tasks: TTaskMapped[] = (await getTasks())
      .sort((a, b) => b.createdAt - a.createdAt)
      .map((task) => taskMapper(task));

    res.status(200).json(tasks);
  } catch (error: any) {
    next(error);
  }
};
