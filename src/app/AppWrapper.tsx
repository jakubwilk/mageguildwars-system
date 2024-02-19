import { ReactNode } from 'react'
import { ColorSchemeScript } from '@mantine/core'
import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { UserProvider } from '../modules/user/context'

import { theme } from './config'

import '@mantine/core/styles.layer.css'

const queryClient = new QueryClient()

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
