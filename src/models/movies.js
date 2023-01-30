import mongoose from 'mongoose';

const MoviesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  actors: {
    type: Array,
  },
  year: {
    type: Number,
  },
  details: {
    type: Object,
  },
  awards: {
    type: [Object],
  },
});

const Movies = mongoose.model('movies', MoviesSchema);

export default Movies;
