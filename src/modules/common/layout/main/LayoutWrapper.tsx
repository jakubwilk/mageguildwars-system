'use client'
import { ReactNode } from 'react'
import { createTheme, MantineProvider } from '@mantine/core'
import { AuthProvider } from '@modules/auth'
import { App } from '@modules/common'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

interface IProps {
  children: ReactNode
}

const theme = createTheme({
  primaryColor: 'violet',
})

const LayoutWrapper = ({ children }: IProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider defaultColorScheme={'dark'} theme={theme}>
        <AuthProvider>
          <App>{children}</App>
        </AuthProvider>
      </MantineProvider>
    </QueryClientProvider>
  )
}

export default LayoutWrapper
