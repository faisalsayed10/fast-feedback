import { useAuth } from '@/lib/auth'
import { Flex, Button } from '@chakra-ui/react'
import { GitHubIcon, GoogleIcon } from 'public/icons';
import React from 'react'

function LoginButtons() {
  const auth = useAuth();
  const { signinWithGithub, signinWithGoogle } = auth;

  return (
    <Flex direction={['row', 'column']}>
      <Button
        onClick={() => signinWithGithub()}
        backgroundColor="gray.800"
        color="white"
        fontWeight="medium"
        leftIcon={<GitHubIcon />}
        mt={4}
        mr={2}
        _hover={{ bg: 'gray.700' }}
        _active={{
          bg: 'gray.800',
          transform: 'scale(0.95)'
        }}
      >
        Continue with GitHub
      </Button>
      <Button
        onClick={() => signinWithGoogle()}
        backgroundColor="white"
        color="gray.900"
        variant="outline"
        fontWeight="medium"
        leftIcon={<GoogleIcon />}
        mt={4}
        _hover={{ bg: 'gray.100' }}
        _active={{
          bg: 'gray.100',
          transform: 'scale(0.95)'
        }}
      >
        Continue with Google
      </Button>
    </Flex>
  );
}

export default LoginButtons;