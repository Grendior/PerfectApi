import { Router } from 'express';
import { listUsers } from './controller';

const users: Router = Router();

users.get('/list', listUsers);

export default users;
