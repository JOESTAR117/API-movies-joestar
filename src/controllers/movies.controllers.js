import Movies from '../models/movies.js';

const movie = async (req, res) => {
  try {
    const movie = req.body;
    const response = await new Movies(movie).save();
    res.json({response});
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export default movie;