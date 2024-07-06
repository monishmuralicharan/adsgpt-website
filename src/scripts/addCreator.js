// addCreator.js
import { connectDB } from '../../mongoClient.js';
import { Binary } from 'mongodb';
import datetime from 'node-datetime';
import crypto from 'crypto-js';
import bcrypt from 'bcrypt';

function generateToken() {
  return CryptoJS.lib.WordArray.random(16).toString();
}

function hashToken(token) {
  return bcrypt.hashSync(token, bcrypt.genSaltSync());
}

export async function addCreator(user) {
  const db = await connectDB();
  const collection = db.collection('User_Data');

  const apiToken = generateToken();
  const hashedToken = hashToken(apiToken);

  const userDocument = {
    identifier: user.uid,
    name: "",
    email: user.email,
    apiCallCount: 0,
    apiCallCountDaily: 0,
    apiCallCountWeekly: 0,
    apiCallCountMonthly: 0,
    adClickCount: 0,
    adClickCountDaily: 0,
    adClickCountMonthly: 0,
    createdAt: datetime.create().now(),
    lastActive: datetime.create().now(),
    apiToken: new Binary(Buffer.from(hashedToken)),
    role: "creator"
  };

  await collection.insertOne(userDocument);
  return apiToken;
}
