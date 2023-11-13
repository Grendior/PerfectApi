import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';

import User from '../../database/models/User';
import UserResource from './UserResource';

export const listUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = UserResource.collection(await User.findAll());
    res.status(200).json(users);
  } catch (error: any) {
    next(error);
  }
};

export const registration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { firstName, lastName, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error: any) {
    next(error);
  }
};
