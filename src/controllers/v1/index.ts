import { Route } from '@/types';
import { Router } from 'express';
import userRouter from './users';

const router = Router();

const routes: Route[] = [
  {
    path: '/users',
    requestHandler: userRouter
  }
];

routes.forEach(({ path, requestHandler }) => {
  router.use(path, requestHandler);
});

export default router;
