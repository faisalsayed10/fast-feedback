import { getAllFeedback, getSite } from '@/lib/db-admin';
import { firestore } from '@/lib/firebase-admin';

export default async (req, res) => {
  const siteId = req.query.siteId;
  const { feedbacks, error } = await getAllFeedback(siteId);
  const { site } = await getSite(siteId);

  if (error) {
    res.status(500).json({ error });
  }

  res.status(200).json({ feedbacks, site });
};
