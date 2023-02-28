import type { AppProps } from 'next/app'
import { AppLayout } from '@common'
import { MantineProvider } from '@mantine/core'

import '@styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </MantineProvider>
  )
}
