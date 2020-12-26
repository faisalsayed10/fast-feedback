import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

import Feedback from '@/components/Feedback';
import { useAuth } from '@/lib/auth';
import { getAllFeedback, getAllSites } from '@/lib/db-admin';
import { createFeedback } from '@/lib/db'

const SiteFeedback = ({ initialFeedback }) => {
  const auth = useAuth()
  const router = useRouter()
  const inputEl = useRef(null)
  const [allFeedback, setAllFeedback] = useState(initialFeedback)
  
  const onSubmit = (e) => {
    e.preventDefault()

    const newFeedback = {
      author: auth.user.name,
      authorId: auth.user.uid,
      siteId: router.query.siteId,
      text: inputEl.current.value,
      createdAt: new Date().toISOString(),
      provider: auth.user.provider,
      status: 'pending'
    }

    createFeedback(newFeedback)
    setAllFeedback([newFeedback, ...allFeedback])
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="full"
      maxW="700px"
      margin="0 auto"
    >
      <Box as="form" onSubmit={onSubmit}>
        <FormControl my={8}>
          <FormLabel htmlFor="comment">Feedback</FormLabel>
          <Input ref={inputEl} type="comment" id="comment" />
          <Button type="submit" mt={2} fontWeight="medium">
            Add Feedback
          </Button>
        </FormControl>
      </Box>
      {allFeedback.map((feedback) => (
        <Feedback key={feedback.id} {...feedback} />
      ))}
    </Box>
  );
};

export async function getStaticProps(context) {
  const siteId = context.params.siteId;
  const {feedbacks} = await getAllFeedback(siteId);
  return {
    props: {
      initialFeedback: feedbacks
    },
    unstable_revalidate: 1
  };
}

export async function getStaticPaths() {
  const { sites } = await getAllSites();
  const paths = sites.map((site) => ({
    params: {
      siteId: site.id.toString()
    }
  }));
  return {
    paths,
    fallback: false
  };
}

export default SiteFeedback;
