import Router from 'express';
import { allMovies, createMovies, oneMovie } from '../controllers/movies.controllers.js';


const routes = Router();

routes.post('/',createMovies)
routes.get('/',allMovies)
routes.get('/:id',oneMovie)


export default routes;
