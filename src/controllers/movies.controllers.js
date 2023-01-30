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

    return res.json(movies);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const oneMovie = async (req, res) => {
  try {
    const { id } = req.params;

    const movie = await Movies.findById({ _id: id });

    res.json(movie);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export { createMovies, allMovies, oneMovie };
