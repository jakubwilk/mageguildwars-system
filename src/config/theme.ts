import { Poppins } from 'next/font/google'
import { createTheme } from '@mantine/core'

const poppins = Poppins({ weight: ['300', '400', '700', '900'], subsets: ['latin-ext'] })

export const theme = createTheme({
  primaryColor: 'violet',
  fontFamily: poppins.style.fontFamily,
})
