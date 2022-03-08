import { NextFunction, Request, Response } from 'express';
import { TTaskMapped } from '../../types';
import getTasks from '../../utils/aws/dynamoDB/getItems';
import taskMapper from '../../helpers/taskMapper';

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
