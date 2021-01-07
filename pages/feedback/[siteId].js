import { useAuth } from '@/lib/auth';
import FeedbackEmptyState from '@/components/FeedbackEmptyState';
import FeedbackTableSkeleton from '@/components/FeedbackTableSkeleton';
import DashboardShell from '@/components/DashboardShell';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import FeedbackTable from '@/components/FeedbackTable.js';
import SiteFeedbackTableHeader from '@/components/SiteFeedbackTableHeader';
import { useRouter } from 'next/router';

export default function SiteFeedback() {
  const { user } = useAuth();
  const { query } = useRouter();
  const { data } = useSWR(user ? [`/api/feedback/${query.siteId}`, user.token] : null, fetcher);

  if (!data) {
    return (
      <DashboardShell>
        <SiteFeedbackTableHeader />
        <FeedbackTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <SiteFeedbackTableHeader siteName={data.site.name} />
      {data.feedbacks.length ? (
        <FeedbackTable allFeedback={data.feedbacks} />
      ) : (
        <FeedbackEmptyState />
      )}
    </DashboardShell>
  );
}
