import { asyncStorage } from '@/utils';
import { NextFunction, Request, Response } from 'express';

const auth = (_req: Request, _res: Response, next: NextFunction) => {
  const store = asyncStorage.store();
  // implement auth logic here and pass user in asyncLocalStore
  store.userInfo = { username: 'test' };
  next();
};

export default auth;
