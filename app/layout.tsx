import { ReactNode } from 'react'
import { Barlow } from 'next/font/google'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import theme from 'config/theme'

import '@mantine/core/styles.layer.css'
import './globals.css'

const barlow = Barlow({
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
      <body className={barlow.className}>
        <MantineProvider defaultColorScheme={'dark'} forceColorScheme={'dark'} theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  )
}
