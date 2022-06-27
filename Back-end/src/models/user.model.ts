import mongoose from 'mongoose';
import { mongooseConnect, RelationField } from '../db/mongoose.js';

// const connect =

// connect.disconnect()

/* eslint-disable no-unused-vars */
export interface iUser {
  id: string;
  name: string;
  email: string;
  robots: Array<RelationField>;
}

const userSchema = new mongoose.Schema({
  name: { type: mongoose.SchemaTypes.String, required: true },
  email: String,
  robots: [{ type: mongoose.Types.ObjectId, ref: 'Robot' }],
});
userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v;
  },
});

export const User = mongoose.model('robots', userSchema);
export const findAll = async () => {
  return await User.find().populate('robots', {
    robots: 0,
    _id: 0,
  });
};
export const findOne = async (id: string) => {
  return await User.findById(id).populate('robots', {
    pilots: 0,
    _id: 0,
  });
};

async () => {
  await mongooseConnect();
};
