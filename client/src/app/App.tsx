import React, { Fragment, ReactNode, Suspense, useEffect, useState } from 'react'
import { axiosApi, i18n } from '@app/configs'
import { ForumPage } from '@app/pages'
import { API, AuthContextProvider, CreateAccountResponseSnapshot, useAuthContext } from '@auth'
import { DialogContextProvider } from '@common'
import { Notifications, notifications } from '@mantine/notifications'
import { MutationCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'

import authService from '../modules/auth/services/AuthService'

interface IProps {
  children: ReactNode
}

function AppWrapper({ children }: IProps) {
  const { setUser } = useAuthContext()
  const refreshToken = authService.getLocalStorageItem('x-refresh-token')

  useEffect(() => {
    if (refreshToken && refreshToken !== 'undefined' && refreshToken !== 'null') {
      axiosApi.get(API.autoLoginAccount, { withCredentials: true }).then(({ data }: AxiosResponse<CreateAccountResponseSnapshot>) => {
        authService.setLocalStorageItem('x-refresh-token', data.refreshToken)
        setUser(data.user)
      })
    }
  }, [refreshToken, setUser])

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
      <AuthContextProvider>
        <DialogContextProvider>
          <AppWrapper>
            <Suspense fallback={<div />}>
              <Notifications />
              <ForumPage />
            </Suspense>
          </AppWrapper>
        </DialogContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  )
}

export default App
