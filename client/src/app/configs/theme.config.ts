import { MantineThemeOverride } from '@mantine/core'

export const APP_THEME: MantineThemeOverride = {
  fontFamily: 'Poppins, sans-serif',
  headings: { fontFamily: 'Merriweather, serif', fontWeight: 700 },
  white: '#fff',
  black: '#2b2b2b',
  colors: {
    'brand-color': ['#76606D', '#6E5867', '#655060', '#5C485A', '#533F53', '#4B374D', '#422F46', '#39273F', '#35233C', '#301E38'],
    'light-brand-color': ['#5E3A55', '#4E2644', '#4A2040', '#46193B', '#421337', '#401035', '#3E0C32', '#37092C', '#310627', '#2A0221'],
  },
  primaryColor: 'brand-color',
}
