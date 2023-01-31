import Movies from '../models/movies.js';
import Season from '../models/season.js';
import _ from 'underscore';

const createMovies = async (req, res) => {
  try {
    const movie = req.body;

    const response = await new Movies(movie).save();

    res.json({ response });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const homeMovies = async (req, res) => {
  try {
    let movies = await Movies.find({});
    let finalMovies = [];

    for (let movie of movies) {
      const season = await Season.find({
        movie_id: movie._id,
      });
    }

    const newMovie = { ...movies._doc, seasons };
    finalMovies = _.shuffle(finalMovies);

    const mainMovie = finalMovies[0];

    const sections = _.chunk(finalMovies);

    return res.json(mainMovie, sections);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const allMovies = async (req, res) => {
  try {
    const movies = await Movies.find({});
    res.json(movies);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const oneMovie = async (req, res) => {
  try {
    const { id } = req.params;

    const movie = await Movies.findById({ _id: id });

    if (!movie) {
      return res.json({ message: 'no movie was found' });
    }

    res.json(movie);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const updateMovies = async (req, res) => {
  try {
    const { id } = req.params;

    const info = req.body;

    if (!info) {
      res.status(400).send({ message: 'Submit all fields for registration' });
    }

    const newMovie = await Movies.findOneAndUpdate({ _id: id }, info);

    await newMovie.save();

    return res.json(newMovie);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const deleteMovies = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Movies.findByIdAndDelete({ _id: id });

    if (!deleted) {
      return res.json({ message: 'no movie was found' });
    }

    res.json(deleted);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export {
  createMovies,
  homeMovies,
  allMovies,
  oneMovie,
  updateMovies,
  deleteMovies,
};
