import { Router } from 'express';
import { listUsers, registration, login } from './controller';

const users: Router = Router();

users.get('/list', listUsers);

users.post('/registration', registration);

users.post('/login', login);

export default users;
