import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import Head from 'next/head';
import theme from 'styles/theme';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Shakesearch</title>
        <meta
          name="description"
          content="Find anything about Shakespeare, including phrases, quotes, characters and sonettes."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet preload prefetch"
          href="/fonts/poppins-v12-latin-300.woff2"
          as="style"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet preload prefetch"
          href="/fonts/poppins-v12-latin-600.woff2"
          as="style"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet preload prefetch"
          href="/fonts/poppins-v12-latin-regular.woff2"
          as="style"
          crossOrigin="anonymous"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
