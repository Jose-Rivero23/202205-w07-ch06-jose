import dotenv from 'dotenv';
import mangosta from 'mongoose';
dotenv.config();

export async function mangostaConnect() {
    const url = process.env.URL_MONGO;
    return mangosta.connect(url as string);
}
