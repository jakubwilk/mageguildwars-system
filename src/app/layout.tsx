import { ReactNode } from 'react'
import { Poppins } from 'next/font/google'
import { ColorSchemeScript } from '@mantine/core'
import { LayoutWrapper } from '@modules/common'
import { SpeedInsights } from '@vercel/speed-insights/next'

import '@mantine/core/styles.css'
import './globals.css'

const poppins = Poppins({ weight: ['400', '700', '900'], subsets: ['latin-ext'] })

interface IProps {
  children: ReactNode
}

export default function RootLayout({ children }: IProps) {
  return (
    <html lang={'en'}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={poppins.className}>
        <SpeedInsights />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  )
}
