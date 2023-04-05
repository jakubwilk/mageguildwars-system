import React, { Suspense, useState } from 'react'
import { i18n } from '@app/configs'
import { ForumPage } from '@app/pages'
import { AuthContextProvider } from '@auth'
import { DialogContextProvider } from '@common'
import { Notifications, notifications } from '@mantine/notifications'
import { MutationCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AxiosError } from 'axios'

function App() {
  const mutationCache = new MutationCache({
    onError: (err) => {
      const error = err as AxiosError<{ message: string; statusCode: number }>
      let message = i18n.t('error:genericError')

      if (error.response && error.response.data) {
        message = error.response.data.message
      } else if (error.request && error.request.data) {
        message = error.request.data.message
      }

      notifications.show({ message, color: 'red', autoClose: 5000, withCloseButton: true })
    },
  })
  const [queryClient] = useState(
    () =>
      new QueryClient({
        mutationCache,
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <DialogContextProvider>
          <Suspense fallback={<div />}>
            <Notifications />
            <ForumPage />
          </Suspense>
        </DialogContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  )
}

export default App
