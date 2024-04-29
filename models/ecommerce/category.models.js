import mongoose from 'mongoose';

const catgrorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Catgrory = mongoose.model('Category', catgrorySchema);
