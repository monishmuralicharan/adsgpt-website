import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGO_DB_URL;
if (!uri) {
  throw new Error("MONGO_DB_URL environment variable not set");
}

const client = new MongoClient(uri);

async function connectDB() {
  if (!client.topology || !client.topology.isConnected()) {
    await client.connect();
  }
  return client.db('AdsGPT_User_Data_and_API_Logs');
}

export { connectDB };
