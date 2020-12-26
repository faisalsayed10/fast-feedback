import React from 'react';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import AddSiteModal from './AddSiteModal';

const DashboardEmptyState = () => (
    <Flex
      width="100%"
      backgroundColor="white"
      p={16}
      borderRadius="8px"
      justify="center"
      direction="column"
      align="center"
    >
      <Heading size="lg" mb={6}>You haven't added any sites.</Heading>
      <Text mb={6}>Welcome 👋 Let's get started.</Text>
      <AddSiteModal>Add Your First Site</AddSiteModal>
    </Flex>
);

export default DashboardEmptyState;
