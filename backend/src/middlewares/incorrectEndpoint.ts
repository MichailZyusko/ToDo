import {
  NextFunction, Request, Response, Router,
} from 'express';
import ApiError from '../errors/ApiError';

const router: Router = Router();

router.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(new ApiError(400, 'Incorrect endpoint'));
});

export default router;
