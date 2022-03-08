import { Router } from 'express';

import taskController from '../controllers/taskController';

const router: Router = Router();

const {
  getTasks, updateTask, deleteTask, createTask,
} = taskController;

router.route('/')
  .get(getTasks)
  .post(createTask);

router.route('/:id')
  .put(updateTask)
  .delete(deleteTask);

export default router;
