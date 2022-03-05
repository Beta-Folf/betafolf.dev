import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '~/constants/themes';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
