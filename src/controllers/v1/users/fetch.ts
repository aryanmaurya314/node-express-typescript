import { NextFunction, Request, Response } from 'express';

const getUsers = (req: Request, res: Response, next: NextFunction) => {
  const users = [{ username: 'test' }];

  return res.status(200).json(users);
};

export default getUsers;
