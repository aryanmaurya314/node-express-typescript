import { Router } from 'express';
import getUsers from './fetch';
import { Route } from '@/types';
import { asyncErrorHandler } from '@/middlewares';

const router = Router();

const routes: Route[] = [
  {
    method: 'get',
    path: '/',
    requestHandler: getUsers
  }
];

routes.forEach(({ method, path, requestHandler }) => {
  router[method!](path, asyncErrorHandler(requestHandler));
});

export default router;
