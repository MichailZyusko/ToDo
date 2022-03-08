import { TTask, TTaskMapped } from '../types';
import isOdd from './isOdd';

export default (task: TTask): TTaskMapped => ({
  ...task,
  isCompleted: isOdd(task.isCompleted),
});
