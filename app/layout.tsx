import { ReactNode } from 'react'
import { IBM_Plex_Sans } from 'next/font/google'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import theme from 'config/theme'

import '@mantine/core/styles.layer.css'
import './globals.css'

const ibm_plex_sand = IBM_Plex_Sans({
  subsets: ['latin-ext'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic']
})

interface IProps {
  children: ReactNode
}

export default function RootLayout({ children }: Readonly<IProps>) {
  return (
    <html lang={'pl'}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={ibm_plex_sand.className}>
        <MantineProvider defaultColorScheme={'dark'} forceColorScheme={'dark'} theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  )
}
