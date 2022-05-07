import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  bookmarks: [
    { type: Schema.Types.ObjectId, required: false, ref: 'Entertaiment' },
  ],
});

export default mongoose.models.User || mongoose.model('User', userSchema);
