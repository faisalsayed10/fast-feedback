import { compareDesc, parseISO } from 'date-fns';
import { firestore } from './firebase-admin';

export async function getAllFeedback(siteId) {
  try {
    const snapshot = await firestore
      .collection('feedback')
      .where('siteId', '==', siteId)
      .get();

    let feedbacks = [];

    snapshot.forEach((doc) => {
      feedbacks.push({ id: doc.id, ...doc.data() });
    });

    feedbacks.sort((a, b) =>
      compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
    );

    return { feedbacks };
  } catch (err) {
    return { err };
  }
}

export async function getUserSites(uid) {
  const snapshot = await firestore
    .collection('sites')
    .where('authorId', '==', uid)
    .get();

  let sites = [];

  snapshot.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() });
  });

  return { sites };
}

export async function getAllSites() {
  const snapshot = await firestore.collection('sites').get();

  const sites = [];

  snapshot.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() });
  });

  return { sites };
}