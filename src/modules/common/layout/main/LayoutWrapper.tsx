'use client'
import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { App } from '@modules/common'

const queryClient = new QueryClient()

interface IProps {
  children: ReactNode
}

const LayoutWrapper = ({ children }: IProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <App>{children}</App>
      </MantineProvider>
    </QueryClientProvider>
  )
}

export default LayoutWrapper
