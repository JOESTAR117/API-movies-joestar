import Router from 'express';
import movie from '../controllers/movies.controllers.js';


const routes = Router();

routes.post('/',movie)

export default routes;
