import { Router } from 'express';

import SessionContoller from './app/controllers/SessionController';

import UserController from './app/controllers/UserController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);

routes.post('/login', SessionContoller.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
