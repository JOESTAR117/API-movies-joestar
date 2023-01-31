import connectDatabase from "../database/db.js";
import Movies from "../models/movies.js";
import moviesJSON from "../data/movie.json"

const addMovies = async () => {
    try{

        for(let movie of moviesJSON){
            console.log(`Inserondo ${movie.title}`)
            await new Movies(movie).save()
        }
        console.log('Finished script')

    }catch (err) {
    res.status(500).json(err.message);
  }
}

addMovies()
