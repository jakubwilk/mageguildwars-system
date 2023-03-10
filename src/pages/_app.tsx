import type { AppProps } from 'next/app'
import { AppLayout } from '@common'
import { MantineProvider } from '@mantine/core'
import { APP_THEME } from '@theme'
import { UserProvider } from '@user'

import '@styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={APP_THEME} withGlobalStyles withNormalizeCSS>
      <UserProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </UserProvider>
    </MantineProvider>
  )
}
