import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { ColorSchemeScript } from '@mantine/core'
import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import dayjs from 'dayjs'

import 'dayjs/locale/pl.js'

import { store, theme } from './config'

import '@mantine/core/styles.layer.css'

dayjs.locale('pl')

const queryClient = new QueryClient()

interface IProps {
  children: ReactNode
}

export function AppWrapper({ children }: IProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ColorSchemeScript />
      <MantineProvider
        defaultColorScheme={'dark'}
        forceColorScheme={'dark'}
        theme={theme}
      >
        <Provider store={store}>{children}</Provider>
      </MantineProvider>
    </QueryClientProvider>
  )
}

// '04ffb1b3-e6da-45fb-96dd-ec7f2973bf89'
