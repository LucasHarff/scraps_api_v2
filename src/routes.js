import { Router } from 'express';

import SessionContoller from './app/controllers/SessionController';

import UserController from './app/controllers/UserController';
import ScrapController from './app/controllers/ScrapController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);

routes.post('/login', SessionContoller.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/scraps', ScrapController.index);
routes.post('/scraps', ScrapController.store);
routes.put('/scraps/:id', ScrapController.update);

export default routes;
