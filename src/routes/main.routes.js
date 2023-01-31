import Router from 'express';
import season from '../controllers/episodes.controller.js';
import { allMovies, createMovies, deleteMovies, homeMovies, oneMovie, updateMovies } from '../controllers/movies.controllers.js';
import { allUsers, createUser, login } from '../controllers/users.controllers.js';



const routes = Router();

routes.get('/home', homeMovies)
routes.post('/',createMovies)
routes.get('/',allMovies)
routes.get('/:id',oneMovie)
routes.patch('/:id',updateMovies)
routes.delete('/:id',deleteMovies)


routes.post('/register',  createUser)
routes.get('/users',allUsers)
routes.post('/users/login', login)




export default routes;
