import { Router } from 'express';

import UserRoute from './User/index';

const api: Router = Router();

api.use('/user', UserRoute);

export default api;
