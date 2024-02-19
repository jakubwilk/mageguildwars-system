import { ReactNode } from 'react'
import { ColorSchemeScript } from '@mantine/core'
import { LayoutWrapper } from '@modules/common'
import { SpeedInsights } from '@vercel/speed-insights/next'

import '@mantine/core/styles.css'
import './globals.css'

interface IProps {
  children: ReactNode
}

export default function RootLayout({ children }: IProps) {
  return (
    <html lang={'en'}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <SpeedInsights />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  )
}
