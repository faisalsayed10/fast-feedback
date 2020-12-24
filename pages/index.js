import { Flex, Button } from '@chakra-ui/react';
import Head from 'next/head';
import { useAuth } from '@/lib/auth';
import { FastFeedbackIcon, GitHubIcon, GoogleIcon } from 'public/icons';

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
      </Head>
      <FastFeedbackIcon color="black" boxSize="64px" />
      {auth.user ? (
        <Button onClick={(e) => signout()}>Sign Out</Button>
      ) : (
        <>
          <Button
            mt={4}
            size="sm"
            backgroundColor="#EDF2F7"
            onClick={(e) => signinWithGithub()}
          >
            <GitHubIcon mr={2} boxSize="24px" />
            Sign In With Github
          </Button>
          <Button
            mt={4}
            backgroundColor="#EDF2F7"
            size="sm"
            onClick={(e) => signinWithGoogle('/')}
          >
            <GoogleIcon mr={2} boxSize="24px" />
            Sign In With Google
          </Button>
        </>
      )}
    </Flex>
  );
}
