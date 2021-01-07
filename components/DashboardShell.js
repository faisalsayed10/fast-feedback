import React from 'react';
import {
  Text,
  Box,
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
    <Box backgroundColor="gray.100" h="100vh">
      <Flex
        backgroundColor="white"
        mb={[8, 16]}
        w="full"
        direction="column"
        borderTop="5px solid #0AF5F4"
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          pt={4}
          pb={4}
          maxW="1250px"
          margin="0 auto"
          w="full"
          px={8}
          h="60px"
        >
          <Flex align="center">
            <NextLink href="/" passHref>
              <Link>
                <FastFeedbackIcon color="black" boxSize="24px" />
              </Link>
            </NextLink>
            <NextLink href="/sites" passHref>
              <Link mx={4}>Sites</Link>
            </NextLink>
            <NextLink href="/feedback" passHref>
              <Link>Feedback</Link>
            </NextLink>
          </Flex>
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
            w="100vw"
            maxW="1250px"
          >
            {children}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default DashboardShell;
