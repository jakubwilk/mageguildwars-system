import { MantineThemeOverride } from '@mantine/core'

export const APP_THEME: MantineThemeOverride = {
  fontFamily: 'Poppins, sans-serif',
  headings: { fontFamily: 'Merriweather, serif', fontWeight: 700 },
  white: '#fff',
  black: '#2b2b2b',
  // TODO: Uncomment code when design colors will be ready
  colors: {
    brand: ['#4C3D4D', '#3A2A3B', '#302031', '#2B1B2C', '#251526', '#201021', '#1B0B1C', '#160617', '#130314', '#100011'],
    night: ['#2C2C2C', '#272727', '#222222', '#181818', '#131313', '#111111', '#0E0E0E', '#090909', '#060606', '#030303'],
    // jonquil: ['#FFEC98', '#FFEA8E', '#FFE883', '#FFE677', '#FFE469', '#FFE15A', '#FFDE49', '#FFDB37', '#FFD723', '#FDCF00'],
    // 'snow-white': ['#FAFAFA', '#FCFCFC', '#F5F5F5', '#EBEBEB', '#D6D6D6', '#C3C3C3', '#B1B1B1', '#A1A1A1', '#929292', '#858585'],
  },
  primaryColor: 'brand',
}
