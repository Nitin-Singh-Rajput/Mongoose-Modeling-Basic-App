import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Username must be required!'],
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, 'Email must be required!'],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password can't be empty!"],
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model('User', userSchema);
