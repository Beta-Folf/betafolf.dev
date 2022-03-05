import { ChakraProvider } from '@chakra-ui/react';

import { NextPage } from 'next';
import App, { AppContext, AppProps } from 'next/app';
import Head from 'next/head';

import { theme } from '~/constants/themes';

import '../styles/globals.css';

interface PageProps {
  title: string;
}
type CustomAppProps<T> = AppProps<T> & {
  Component: NextPage;
};

function MyApp({ Component, pageProps }: CustomAppProps<PageProps>) {
  return (
    <>
      <Head>
        <title>{pageProps.title}</title>
        <meta name="author" content="Beta Folf" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="OwO what's this. I'm a gay furry full stack web developer. I clearly make great life choices."
        />
        <meta name="keywords" content="beta, folf, furry, gay, owo" />
        <meta name="theme-color" content="#4379c0" />
        <meta property="og:title" content="Beta Folf" />
        <meta property="og:image" content="/refsheets/shaded_sfw.png" />
        <meta property="og:url" content="https://betafolf.dev" />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  return appProps;
};

export default MyApp;
