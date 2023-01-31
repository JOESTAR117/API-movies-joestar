import Router from 'express';
import { allMovies, createMovies, deleteMovies, homeMovies, oneMovie, updateMovies } from '../controllers/movies.controllers.js';


const routes = Router();

routes.get('/home', homeMovies)

routes.post('/',createMovies)

routes.get('/',allMovies)

routes.get('/:id',oneMovie)

routes.patch('/:id',updateMovies)

routes.delete('/:id',deleteMovies)


export default routes;
