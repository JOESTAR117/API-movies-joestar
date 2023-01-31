import mongoose from 'mongoose';

const EpisodeSchema = new mongoose.Schema({
  season_id: {
    type: mongoose.Types.ObjectId,
    ref: 'season',
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  number: {
    type: Number,
  },
  cover: {
    type: String,
  },
});

const Episode = mongoose.model('episode', EpisodeSchema);

export default Episode;
