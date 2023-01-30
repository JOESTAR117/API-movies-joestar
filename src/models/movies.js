import mongoose from 'mongoose';

const MoviesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  actores: {
    type: Array,
  },
  year: {
    type: Number,
  },
  Details: {
    type: Object,
  },
  awards: {
    type: [Object],
  },
});

const Movies = mongoose.model('movies', MoviesSchema);

export default Movies;
