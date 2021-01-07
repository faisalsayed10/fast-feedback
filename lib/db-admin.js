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

export async function getSite(siteId) {
  const doc = await firestore.collection('sites').doc(siteId).get();
  const site = { id: doc.id, ...doc.data() };

  return { site };
}

export async function getUserFeedback(uid) {
  const snapshot = await firestore
    .collection('feedback')
    .where('authorId', '==', uid)
    .where('status', 'in', ['pending', 'active'])
    .get();

  let feedback = [];

  snapshot.forEach((doc) => {
    feedback.push({ id: doc.id, ...doc.data() });
  });

  return { feedback };
}