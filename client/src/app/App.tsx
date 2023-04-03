import React from 'react'
import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import DialogContextProvider from '../modules/common/context/dialog/DialogContext'

import { ForumPage } from './pages/forum'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <DialogContextProvider>
          <ForumPage />
        </DialogContextProvider>
      </MantineProvider>
    </QueryClientProvider>
  )
}

export default App
