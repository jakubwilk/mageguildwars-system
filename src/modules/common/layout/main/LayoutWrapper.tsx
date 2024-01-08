'use client'
import { ReactNode } from 'react'
import { Poppins } from 'next/font/google'
import { createTheme, MantineProvider } from '@mantine/core'
import { AuthProvider } from '@modules/auth'
import { App } from '@modules/common'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
const poppins = Poppins({ weight: ['300', '400', '700', '900'], subsets: ['latin-ext'] })

interface IProps {
  children: ReactNode
}

const theme = createTheme({
  primaryColor: 'violet',
  fontFamily: poppins.style.fontFamily,
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
