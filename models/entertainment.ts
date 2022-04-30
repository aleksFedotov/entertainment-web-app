import mongoose from 'mongoose';

const EntertaimentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
  },
  thumbnail: {
    trending: {
      small: String,
      large: String,
    },
    reqular: {
      small: String,
      medium: String,
      large: String,
    },
  },
  year: Number,
  category: String,
  rating: String,
  isBookmarked: Boolean,
  isTrending: Boolean,
});

export default mongoose.models.Entertaiment ||
  mongoose.model('Entertaiment', EntertaimentSchema);
