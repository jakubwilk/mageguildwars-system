import { ReactNode } from 'react'
// import type { Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'

import '@mantine/core/styles.css'
import './globals.css'

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app'
// }

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
    <html lang={'en'}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={ibm_plex_sand.className}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  )
}
