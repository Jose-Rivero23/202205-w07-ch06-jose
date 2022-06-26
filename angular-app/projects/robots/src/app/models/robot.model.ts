import mangosta from 'mongoose';
import { mangostaConnect } from '../db/mangosta.js';

const { Schema, model } = mangosta;

await mangostaConnect();

const bookSchema = new Schema({
    id: String,
    image: { type: Number, required: true },
    velocity: Number,
    resistencia: Number,
    creationDate: Date,
});
export const Robot = model('Robot', bookSchema);
