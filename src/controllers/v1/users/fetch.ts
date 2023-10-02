import { NextFunction, Request, Response } from 'express';
import { dbInstance } from '@/dbContext';

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  const usersCol = dbInstance.collection('users');

  const users = await usersCol.find().toArray();

  return res.status(200).json(users);
};

export default getUsers;
