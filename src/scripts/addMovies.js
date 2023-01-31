const database = require('../database/db');
const Movies = require('../models/movies.js');
const moviesJSON = require('../data/movie.json');

const addMovies = async () => {
  try {
    for (let movie of moviesJSON) {
      console.log(`Inserting ${movie.title}`);
      await new Movies(movie).save();
    }
    console.log('Finished script');
  } catch (err) {
    console.log(err);
  }
};

