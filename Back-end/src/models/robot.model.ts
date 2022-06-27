import mongoose from 'mongoose';
import { mongooseConnect } from '../db/mongoose.js';

export interface iRobot {
  id: string;
  name: string;
  image: string;
  speed: number;
  life: number;
  born: string;
  pilots: string;
}

const robotSchema = new mongoose.Schema({
  id: String,
  name: { type: String, required: true },
  image: String,
  speed: { type: Number, min: 0, max: 10 },
  life: { type: Number, min: 0, max: 10 },
  born: String,
  pilots: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
});

export const Robot = mongoose.model('Robot', robotSchema);
async () => {
  await mongooseConnect();
};
