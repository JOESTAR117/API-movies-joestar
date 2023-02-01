import Router from 'express';
import season from '../controllers/episodes.controller.js';
import {
  allMovies,
  createMovies,
  deleteMovies,
  homeMovies,
  oneMovie,
  updateMovies,
} from '../controllers/movies.controllers.js';
import { createUser, login } from '../controllers/users.controllers.js';

const routes = Router();

routes.get('/home', homeMovies);
routes.post('/movies', createMovies);
routes.get('/movies', allMovies);
routes.get('/movies/:id', oneMovie);
routes.patch('/movies/:id', updateMovies);
routes.delete('/movies/:id', deleteMovies);
routes.get('/movie/season/:id', season);

routes.post('/users/register', createUser);
routes.post('/users/login', login);

export default routes;
