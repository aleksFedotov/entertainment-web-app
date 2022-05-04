import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  bookmarks: [
    { type: mongoose.Types.ObjectId, required: true, ref: 'Entertaiment' },
  ],
});

export default mongoose.model('User', userSchema);
