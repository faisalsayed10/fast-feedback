import React from 'react';
import DashboardShell from './DashboardShell';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import AddSiteModal from './AddSiteModal';

const EmptyState = () => (
  <DashboardShell>
    <Flex
      width="100%"
      backgroundColor="white"
      p={16}
      borderRadius="8px"
      justify="center"
      direction="column"
      align="center"
    >
      <Heading size="lg" mb={2}>You haven't added any sites.</Heading>
      <Text mb={4}>Welcome 👋 Let's get started.</Text>
      <AddSiteModal />
    </Flex>
  </DashboardShell>
);

export default EmptyState;
