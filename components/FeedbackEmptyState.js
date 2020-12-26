import React from 'react';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import AddSiteModal from './AddSiteModal';

const FeedbackEmptyState = () => (
  <Flex
    width="100%"
    backgroundColor="white"
    p={16}
    borderRadius="8px"
    justify="center"
    direction="column"
    align="center"
  >
    <Heading size="lg" mb={6}>
      There isn't any feedback.
    </Heading>
    <Text mb={6}>Share your Sites!</Text>
  </Flex>
);

export default FeedbackEmptyState;
