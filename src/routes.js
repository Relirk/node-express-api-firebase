import { Router } from 'express';

import UserController from './app/controllers/UserController';

const routes = new Router();

// API
routes.get('/', async (req, res) => {
  return res.json({ api: 'NodeJS Express Firebase API', status: 'up' });
});

// User
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
// routes.use(authMiddleware);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.remove);

export default routes;
