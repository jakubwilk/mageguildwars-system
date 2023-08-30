import React, { Fragment, ReactNode, Suspense, useState } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { APP_ROUTES, i18n } from '@app/configs'
import { Notifications, notifications } from '@mantine/notifications'
import { MutationCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AxiosError } from 'axios'

interface IProps {
  children: ReactNode
}

function AppWrapper({ children }: IProps) {
  return <Fragment>{children}</Fragment>
}

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
      <HelmetProvider>
        <AppWrapper>
          <Suspense fallback={<div />}>
            <Notifications />
            <RouterProvider router={APP_ROUTES} />
          </Suspense>
        </AppWrapper>
      </HelmetProvider>
    </QueryClientProvider>
  )
}

export default App
