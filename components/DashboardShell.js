import React from 'react';
import {
  Text,
  Flex,
  Link,
  Avatar,
  Stack,
  Button
} from '@chakra-ui/react';
import NextLink from 'next/link'
import { useAuth } from '@/lib/auth';
import { FastFeedbackIcon } from 'public/icons';

const DashboardShell = ({ children }) => {
  const { user, signout } = useAuth();

  return (
    <Flex flexDirection="column" w="full">
      <Flex
        w="full"
        backgroundColor="white"
        alignItems="center"
        justifyContent="space-between"
        py={4}
        px={8}
      >
        <Stack isInline spacing={4} align="center">
          <NextLink href="/" passHref>
            <FastFeedbackIcon color="black" boxSize="24px" />
          </NextLink>
          <NextLink href="/dashboard" passHref>
            <Link>Sites</Link>
          </NextLink>
          <NextLink href="/feedback" passHref>
            <Link>Feedback</Link>
          </NextLink>
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
        <Flex
          margin="0 auto"
          direction="column"
          maxW="1250px"
          px={[0, 8, 8]}
        >
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
