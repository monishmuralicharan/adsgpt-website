// addAdvertiser.js
import { connectDB } from '../../mongoClient.js';
import { ObjectId } from 'mongodb';
import datetime from 'node-datetime';

export async function addAdvertiser(user) {
  const db = await connectDB();
  const collection = db.collection('Advertiser_Data');

  const userDocument = {
    identifier: user.uid,
    companyName: "",
    email: user.email,
    adUseCount: 0,
    adUseCountDaily: 0,
    adUseCountMonthly: 0,
    adClickCount: 0,
    adClickCountDaily: 0,
    adClickCountMonthly: 0,
    accountCreatedAt: datetime.create().now(),
    adLastEdited: datetime.create().now(),
    lastUsed: datetime.create().now(),
    adContent: "",
    adLink: "",
    adPictureLink: "",
    adCredits: 10,
    adActive: true,
    role: "advertiser"
  };

  await collection.insertOne(userDocument);
}
