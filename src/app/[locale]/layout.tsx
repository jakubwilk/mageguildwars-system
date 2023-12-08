import { ReactNode } from 'react'
import { Poppins } from 'next/font/google'
import { notFound } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { ColorSchemeScript } from '@mantine/core'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { LayoutWrapper } from '@/modules/common'

import '@mantine/core/styles.css'
import '../globals.css'

const poppins = Poppins({ weight: ['400'], subsets: ['latin-ext'] })
const locales = ['pl']

interface IProps {
  children: ReactNode
  params: { locale: string }
}

export default function RootLayout({ children, params: { locale } }: IProps) {
  const t = useTranslations()

  if (!locales.includes(locale)) {
    return notFound()
  }

  return (
    <html lang={'en'}>
      <head>
        <ColorSchemeScript />
        <title>{t('pageTitle')}</title>
        <meta name={'description'} content={t('pageDescription')} />
      </head>
      <body className={poppins.className}>
        <SpeedInsights />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  )
}
