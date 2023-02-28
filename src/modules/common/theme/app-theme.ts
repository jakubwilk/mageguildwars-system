import { Merriweather, Poppins } from 'next/font/google'
import { MantineThemeOverride } from '@mantine/core'

const poppins = Poppins({ weight: '400', subsets: ['latin-ext'] })
const merriweather = Merriweather({ weight: '700', subsets: ['latin-ext'] })

export const APP_THEME: MantineThemeOverride = {
  fontFamily: poppins.style.fontFamily,
  headings: { fontFamily: merriweather.style.fontFamily, fontWeight: merriweather.style.fontWeight },
  white: '#fff',
  black: '#2b2b2b',
  colors: {
    'brand-color': [
      '#76606D',
      '#6E5867',
      '#655060',
      '#5C485A',
      '#533F53',
      '#4B374D',
      '#422F46',
      '#39273F',
      '#35233C',
      '#301E38',
    ],
    'light-brand-color': [
      '#5E3A55',
      '#4E2644',
      '#4A2040',
      '#46193B',
      '#421337',
      '#401035',
      '#3E0C32',
      '#37092C',
      '#310627',
      '#2A0221',
    ],
  },
  primaryColor: 'brand-color',
}
