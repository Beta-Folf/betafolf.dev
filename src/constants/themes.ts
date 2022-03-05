import { extendTheme } from '@chakra-ui/react';

import { COLORS } from './colors';

export const theme = extendTheme({
  colors: {
    brand: {
      100: COLORS.BLUE,
      200: COLORS.BLUE,
      300: COLORS.BLUE,
      400: COLORS.BLUE,
      500: COLORS.BLUE,
      600: COLORS.BLUE,
      700: COLORS.BLUE,
      800: COLORS.BLUE,
      900: COLORS.BLUE,
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
