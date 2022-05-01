import mongoose from 'mongoose';

const EntertaimentSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  thumbnail: {
    trending: {
      required: false,
      small: String,
      large: String,
    },
    regular: {
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
