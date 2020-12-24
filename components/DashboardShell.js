import React from 'react';
import {
  Text,
  Flex,
  Link,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Stack,
  Button
} from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';
import { FastFeedbackIcon } from 'public/icons';

const DashboardShell = ({ children }) => {
  const { user, signout } = useAuth();

  return (
    <Flex flexDirection="column">
      <Flex
        backgroundColor="white"
        alignItems="center"
        justifyContent="space-between"
        py={4}
        px={8}
      >
        <Stack isInline spacing={4} align="center">
          <FastFeedbackIcon color="black" boxSize="24px" />
          <Link>Sites</Link>
          <Link>Feedback</Link>
        </Stack>
        <Flex alignItems="center" justifyContent="center">
          {user && (
            <Button variant="ghost" mr={2} onClick={() => signout()}>
              Log Out
            </Button>
          )}
          <Avatar size="sm" src={user?.photoUrl} />
        </Flex>
      </Flex>
      <Flex backgroundColor="gray.100" p={8} height="100vh">
        <Flex maxWidth="800px" w="100%" direction="column" ml="auto" mr="auto">
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink color="gray.700" fontSize="sm">
                Sites
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading color="black" mb={4}>
            My Sites
          </Heading>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
