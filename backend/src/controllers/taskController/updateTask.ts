import { NextFunction, Request, Response } from 'express';
import { TParams, TTask } from '../../types';
import editItem from '../../utils/aws/dynamoDB/editItem';
import taskMapper from '../../helpers/taskMapper';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedTask: TTask = await editItem(req?.params as TParams);

    res.status(200).json(taskMapper(updatedTask));
  } catch (error: any) {
    next(error);
  }
};
