import { ReactNode } from 'react'
import { ColorSchemeScript } from '@mantine/core'
import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import dayjs from 'dayjs'

import 'dayjs/locale/pl.js'

import { UserProvider } from '../modules/user/context'

import { theme } from './config'

import '@mantine/core/styles.layer.css'

const queryClient = new QueryClient()

dayjs.locale('pl')

interface IProps {
  children: ReactNode
}

export function AppWrapper({ children }: IProps) {
  return (
    <>
      <ColorSchemeScript />
      <QueryClientProvider client={queryClient}>
        <MantineProvider
          defaultColorScheme={'dark'}
          forceColorScheme={'dark'}
          theme={theme}
        >
          <UserProvider>{children}</UserProvider>
        </MantineProvider>
      </QueryClientProvider>
    </>
  )
}
