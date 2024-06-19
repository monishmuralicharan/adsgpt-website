// addCreator.js
import { connectDB } from '../../mongoClient.js';
import { ObjectId, Binary } from 'mongodb';
import datetime from 'node-datetime';
import secrets from 'secrets';
import bcrypt from 'bcrypt';

function generateToken() {
  return secrets.tokenHex(16);
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
    firstName: "",
    lastName: "",
    email: user.email,
    apiCallCount: 0,
    apiCallCountDaily: 0,
    apiCallCountWeekly: 0,
    apiCallCountMonthly: 0,
    createdAt: datetime.create().now(),
    lastActive: datetime.create().now(),
    apiToken: Binary(hashedToken),
    role: "creator"
  };

  await collection.insertOne(userDocument);
  return apiToken;
}
