import { compareDesc, parseISO } from 'date-fns';
import firebase from './firebase-admin';

export async function getAllFeedback(siteId) {
  try {
    const snapshot = await firebase
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

export async function getAllSites(siteId) {
  try {
    const snapshot = await firebase.collection('sites').get();
    let sites = [];

    snapshot.forEach((doc) => {
      sites.push({ id: doc.id, ...doc.data() });
    });

    return { sites };
  } catch (err) {
    return { err };
  }
}
