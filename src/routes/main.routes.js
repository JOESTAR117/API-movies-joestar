import Router from 'express';
import season from '../controllers/episodes.controller.js';
import { allMovies, createMovies, deleteMovies, homeMovies, oneMovie, updateMovies } from '../controllers/movies.controllers.js';
import { createUser, login } from '../controllers/users.controllers.js';



const routes = Router();

routes.get('/home', homeMovies)
routes.post('/',createMovies)
routes.get('/',allMovies)
routes.get('/:id',oneMovie)
routes.patch('/:id',updateMovies)
routes.delete('/:id',deleteMovies)

routes.post('/register',  createUser)
routes.post('/login', login)

routes.get('/season/:season',season)


export default routes;
