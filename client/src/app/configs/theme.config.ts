import { MantineThemeOverride } from '@mantine/core'

export const APP_THEME: MantineThemeOverride = {
  fontFamily: 'Poppins, sans-serif',
  headings: { fontFamily: 'Merriweather, serif', fontWeight: 700 },
  white: '#fff',
  black: '#2b2b2b',
  colors: {
    night: ['#898989', '#828282', '#828282', '#6D6D6D', '#505050', '#424242', '#333333', '#252525', '#1E1E1E', '#161616'],
    'eerie-black': ['#9B9B9B', '#919191', '#868686', '#7A7A7A', '#6D6D6D', '#5E5E5E', '#4E4E4E', '#3C3C3C', '#292929', '#232323'],
    jonquil: ['#FFEC98', '#FFEA8E', '#FFE883', '#FFE677', '#FFE469', '#FFE15A', '#FFDE49', '#FFDB37', '#FFD723', '#FDCF00'],
    'snow-white': ['#FAFAFA', '#FCFCFC', '#F5F5F5', '#EBEBEB', '#D6D6D6', '#C3C3C3', '#B1B1B1', '#A1A1A1', '#929292', '#858585'],
  },
  primaryColor: 'night',
}

// #FCFCFC - Snow white
