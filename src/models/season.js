import mongoose from 'mongoose';

const SeasonSchema = new mongoose.Schema({
  movie_id: {
    type: mongoose.Types.ObjectId,
    ref: 'movies',
  },
  title: {
    type: String,
  },
});

const Season = mongoose.model('season', SeasonSchema);

export default Season;
