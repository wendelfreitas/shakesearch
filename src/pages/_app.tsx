import NextNprogress from 'nextjs-progressbar';
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
        <meta name="title" content="Shakesearch" />
        <meta
          name="description"
          content="A minimal, clean and beautiful website to help Shakespeare fans to find your beautiful works."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shakesearch.vercel.app/" />
        <meta property="og:title" content="Shakesearch" />
        <meta
          property="og:description"
          content="A minimal, clean and beautiful website to help Shakespeare fans to find your beautiful works."
        />
        <meta property="og:image" content="https://i.imgur.com/vNg2OmF.jpeg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://shakesearch.vercel.app/"
        />
        <meta property="twitter:title" content="Shakesearch" />
        <meta
          property="twitter:description"
          content="A minimal, clean and beautiful website to help Shakespeare fans to find your beautiful works."
        />
        <meta
          property="twitter:image"
          content="https://i.imgur.com/vNg2OmF.jpeg"
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
      <NextNprogress
        color={theme.colors.primary}
        startPosition={0.3}
        options={{ showSpinner: false }}
        stopDelayMs={200}
        height={3}
      />
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
