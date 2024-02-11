import { Schema, model } from "mongoose";

export interface UserDocument extends Document {
  id: string;
  email: string;
  account: string;
  password: string;
  name: string;
}

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },

  account: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: true,
    length: [8, "密碼至少要8個字"],
  },

  name: {
    type: String,
    required: true,
  },
});

export const User = model<UserDocument>("User", UserSchema);
