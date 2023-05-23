import React, { Fragment, ReactNode, Suspense, useEffect, useMemo, useState } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { RouterProvider } from 'react-router-dom'
import { APP_ROUTES, axiosApi, i18n } from '@app/configs'
import { API, AuthContextProvider, authService, CreateAccountResponseSnapshot, useAuthContext } from '@auth'
import { AppLayoutContextProvider, REFRESH_TOKEN } from '@common'
import { Notifications, notifications } from '@mantine/notifications'
import { MutationCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { isNil } from 'lodash'

interface IProps {
  children: ReactNode
}

function AppWrapper({ children }: IProps) {
  const { setUser } = useAuthContext()
  const { t } = useTranslation()
  const isPreviousSession = useMemo(() => !isNil(authService.getLocalStorageItem(REFRESH_TOKEN)), [])

  useEffect(() => {
    if (isPreviousSession) {
      axiosApi
        .get(API.autoLoginAccount)
        .then(({ data }: AxiosResponse<CreateAccountResponseSnapshot>) => {
          setUser(data.user)
          notifications.show({
            message: t('auth:message.userLoggedSuccessfully', { name: data.user.login }),
            color: 'green',
            autoClose: 5000,
            withCloseButton: true,
          })
        })
        .catch(() => {
          notifications.show({ message: t('auth:message.userAutoLoginFailed'), color: 'red', autoClose: 5000, withCloseButton: true })
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
        <AuthContextProvider>
          <AppLayoutContextProvider>
            <AppWrapper>
              <Suspense fallback={<div />}>
                <Notifications />
                <RouterProvider router={APP_ROUTES} />
              </Suspense>
            </AppWrapper>
          </AppLayoutContextProvider>
        </AuthContextProvider>
      </HelmetProvider>
    </QueryClientProvider>
  )
}

export default App
