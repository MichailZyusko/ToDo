import { NextFunction, Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import createTask from '../../utils/aws/dynamoDB/createItem';
import { TBody, TTask } from '../../types';
import taskMapper from '../../helpers/taskMapper';

class Task {
  public id: string;

  public label: string;

  public isCompleted: number;

  public createdAt: number;

  constructor({ label }: { label: string }) {
    this.id = uuid();
    this.label = label;
    this.isCompleted = 0;
    this.createdAt = Date.now();
  }
}

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const task: TTask = new Task(req.body as TBody);

    await createTask(task);

    res.status(201).json(taskMapper(task));
  } catch (error: any) {
    next(error);
  }
};
