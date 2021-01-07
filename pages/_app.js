import { CSSReset, ThemeProvider } from '@chakra-ui/react';
import { css, Global } from '@emotion/react';
import { AuthProvider } from '@/lib/auth';
import theme from '@/styles/theme';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Head>
        <title>Fast Feedback</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <CSSReset />
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
            background-color: #edf2f7;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyle />
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
