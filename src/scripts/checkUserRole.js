// checkUserRole.js
import { connectDB } from '../../mongoClient.js';

export async function getUserRole(uid) {
  const db = await connectDB();
  const advertiserCollection = db.collection('Advertiser_Data');
  const creatorCollection = db.collection('User_Data');

  const advertiser = await advertiserCollection.findOne({ identifier: uid });
  if (advertiser) {
    return { role: 'advertiser' };
  }

  const creator = await creatorCollection.findOne({ identifier: uid });
  if (creator) {
    return { role: 'creator', apiToken: creator.apiToken };
  }

  throw new Error('User not found');
}
