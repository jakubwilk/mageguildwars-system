import React from 'react'
import { ForumPage } from '@app/pages'
import { DialogContextProvider } from '@common'
import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

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
