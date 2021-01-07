import { Flex, Button, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { useAuth } from '@/lib/auth';
import { FastFeedbackIcon } from 'public/icons';
import LoginButtons from '@/components/LoginButtons';

export default function Home() {
  const auth = useAuth();
  const { signinWithGithub, signinWithGoogle, signout } = auth;

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Head>
        <title>Fast Feedback</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
            window.location.href = "/sites"
          }
        `
          }}
        />
      </Head>
      <FastFeedbackIcon color="black" boxSize="64px" />
      <Text mb={4} fontSize="lg" align="center" px={4}>
        <Text as="span" fontWeight="bold" display="inline">
          Fast Feedback
        </Text>
        {` is the easiest way to add comments or reviews to your static site.`}
      </Text>
      {auth.user ? (
        <Button
          as="a"
          href="/sites"
          backgroundColor="gray.900"
          color="white"
          fontWeight="medium"
          mt={4}
          maxW="200px"
          _hover={{ bg: 'gray.700' }}
          _active={{
            bg: 'gray.800',
            transform: 'scale(0.95)'
          }}
        >
          View Dashboard
        </Button>
      ) : (
        <LoginButtons />
      )}
    </Flex>
  );
}
