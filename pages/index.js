import { Button, Code, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { useAuth } from '@/lib/auth';

export default function Home() {
  const auth = useAuth();
  const { signinWithGithub, signinWithGoogle } = auth;

  return (
    <div>
      <Head>
        <title>Fast Feedback</title>
      </Head>

      <main>
        <Heading>Fast Feedback</Heading>
        <Text>
          Current User: <Code>{auth?.user?.email}</Code>
        </Text>
        {auth.user ? (
          <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        ) : (
          <>
            <Button onClick={(e) => signinWithGithub()}>
              Sign In With Github
            </Button>
            <Button onClick={(e) => signinWithGoogle('/')}>
              Sign In With Google
            </Button>
          </>
        )}
      </main>
    </div>
  );
}
