import { extendTheme } from '@chakra-ui/react'
export const theme = extendTheme({
  fonts: {
    heading: '"Roboto", sans-serif',
    body: '"Roboto", sans-serif',
  },
  colors: {
    brand: {
      white: '#FFFFFF',
      black: '#000000',
      blue: '#157EFF',
      blueHover: '#005BCA',
      red: '#FF1515',
      grey1: '#F9F9F9',
      grey2: '#D9D9D9',
      grey3: '#A6A6A6',
      grey4: '#848484',
    },
  },
  sizes: {
    sm: {
      h: '16px',
      px: '14px',
      fontSize: 'sm',
    },
    md: {
      h: '18px',
      px: '15px',
      fontSize: 'md',
    },
    lg: {
      h: '22px',
      px: '19px',
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        fontSize: 'md',
      },
      sizes: {
        xl: {
          h: '50px',
          w: '181px',
          borderRadius: '10px',
        },
      },
      variants: {
        disabled: {
          bg: 'brand.grey3',
          color: 'brand.white',
        },
      },
    },
  },
})
