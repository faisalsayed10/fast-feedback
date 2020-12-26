import { useAuth } from '@/lib/auth';
import EmptyState from '@/components/EmptyState';
import FeedbackTableSkeleton from '@/components/FeedbackTableSkeleton';
import DashboardShell from '@/components/DashboardShell';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import FeedbackTable from '@/components/FeedbackTable.js';
import FeedbackTableHeader from '@/components/FeedbackTableHeader';

export default function MyFeedback() {
  const { user } = useAuth();
  const { data } = useSWR(user ? ['/api/feedback', user.token] : null, fetcher);

  if (!data) {
    return (
      <DashboardShell>
        <FeedbackTableHeader />
        <FeedbackTableSkeleton />
      </DashboardShell>
    );
  }

  console.log(data)

  return (
    <DashboardShell>
      <FeedbackTableHeader />
      {data.feedback ? (
        <FeedbackTable allFeedback={data.feedback} />
      ) : (
        <EmptyState />
      )}
    </DashboardShell>
  );
}
