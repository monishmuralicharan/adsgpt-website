import { connectDB } from '../../mongoClient.js';

export async function updateUserInfo(uid, data) {
  const db = await connectDB();
  const advertiserCollection = db.collection('Advertiser_Data');

  const updateResult = await advertiserCollection.updateOne(
    { identifier: uid },
    { $set: data }
  );

  if (updateResult.matchedCount === 0) {
    throw new Error('User not found');
  }

  return updateResult;
}
