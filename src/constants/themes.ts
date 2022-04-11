import { extendTheme } from '@chakra-ui/react';

import { Colors } from './colors';

export const theme = extendTheme({
  colors: {
    brand: {
      100: Colors.BETA_BLUE,
      200: Colors.BETA_BLUE,
      300: Colors.BETA_BLUE,
      400: Colors.BETA_BLUE,
      500: Colors.BETA_BLUE,
      600: Colors.BETA_BLUE,
      700: Colors.BETA_BLUE,
      800: Colors.BETA_BLUE,
      900: Colors.BETA_BLUE,
    },
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.800',
      },
      a: {
        color: 'brand.100',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
});
