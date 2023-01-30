import y from 'y';
import Movies from '../models/movies.js';

const createMovies = async (req, res) => {
  try {
    const movie = req.body;

    const response = await new Movies(movie).save();

    res.json({ response });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const allMovies = async (req, res) => {
  try {
    const movies = await Movies.find({});

    if (!movies) {
      return res.json({ message: 'no movie was found' });
    }

    return res.json(movies);
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
    const info = req.body;

    const { id } = req.params;

    if (!info) {
      res.status(400).send({ message: 'Submit all fields for registration' });
    }

    const newMovie = await Movies.findByIdAndUpdate({ _id: id }, info);

    await newMovie.save();

    return res.json(newMovie);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const deleteMovies = async (req, res) => {
  try {
    const { id } = req.params;

    const remove = await Movies.findByIdAndRemove({ _id: id });

    if (!remove) {
      return res.json({ message: 'no movie was found' });
    }

    res.json(remove);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export { createMovies, allMovies, oneMovie, updateMovies, deleteMovies };
