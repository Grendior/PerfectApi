import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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

  const user = await User.findOne({ where: { email } });
  if (user) {
    return res.status(409).json({ message: 'User already exist' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    return res
      .status(201)
      .json({ message: 'User registered successfully', user });
  } catch (error: any) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { userId: user.id },
        process.env.SECRET_KEY as string,
        {
          expiresIn: '30d',
        }
      );
      return res.status(200).json({ message: 'Login successful', token });
    }

    return res.status(401).json({ error: 'Invalid credentials' });
  } catch (error: any) {
    next(error);
  }
};
