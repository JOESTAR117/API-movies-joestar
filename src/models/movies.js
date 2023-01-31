import mongoose from 'mongoose';

const MoviesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  cover: {
    type: String,
  },
  logo: {
    type: String,
  },
  thumb: {
    type: String,
  },
  description: {
    type: String,
  },
  genre: {
    type: Array,
  },
  cast: {
    type: Array,
  },
  scenes: {
    type: Array,
  },
});

const Movies = mongoose.model('movies', MoviesSchema);

export default Movies;
