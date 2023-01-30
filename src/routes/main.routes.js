import Router from 'express';
import { allMovies, createMovies, deleteMovies, oneMovie, updateMovies } from '../controllers/movies.controllers.js';


const routes = Router();

routes.post('/',createMovies)

routes.get('/',allMovies)

routes.get('/:id',oneMovie)

routes.patch('/:id',updateMovies)

routes.delete('/:id',deleteMovies)


export default routes;
