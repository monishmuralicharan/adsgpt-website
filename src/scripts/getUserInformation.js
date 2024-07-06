import { connectDB } from '../../mongoClient.js';

export async function getUserInfo(uid) {
  const db = await connectDB();
  const advertiserCollection = db.collection('Advertiser_Data');
  const creatorCollection = db.collection('User_Data');

  const advertiser = await advertiserCollection.findOne({ identifier: uid });
  if (advertiser) {
    return {advertiser};
  }

  const creator = await creatorCollection.findOne({ identifier: uid });
  if (creator) {
    return {creator};
  }

  throw new Error('User not found');
}
