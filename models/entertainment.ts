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
    regular: { small: String, medium: String, large: String },
  },
  year: { type: Number, required: true },
  category: { type: String, required: true },
  rating: { type: String, required: true },
  isTrending: { type: Boolean, required: true },
});

export default mongoose.models.Entertaiment ||
  mongoose.model('Entertaiment', EntertaimentSchema);
