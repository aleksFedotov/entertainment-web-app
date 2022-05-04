import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const EntertaimentSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  thumbnail: {
    trending: {
      required: false,
      small: String,
      large: String,
    },
    regular: { required: true, small: String, medium: String, large: String },
  },
  year: { type: Number, required: true },
  category: { type: String, required: true },
  rating: { type: String, required: true },
  isBookmarked: { type: Boolean, required: true },
  isTrending: { type: Boolean, required: true },
});

export default mongoose.model('Entertaiment', EntertaimentSchema);
