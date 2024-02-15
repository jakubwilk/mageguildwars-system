'use client'

import { ReactNode, useMemo } from 'react'
import { useFetchInitialSettingsQuery } from '@config'
import { AppLoader } from '@modules/common'

import useUserAutoLoginQuery from '@/modules/auth/api/useUserAutoLoginQuery'

interface IProps {
  children: ReactNode
}

const App = ({ children }: IProps) => {
  const { data, isLoading } = useFetchInitialSettingsQuery()
  const { data: userData, isLoading: isUserLoading } = useUserAutoLoginQuery()

  const isAppReady = useMemo(() => isLoading && isUserLoading, [isLoading, isUserLoading])

  console.log('data', data)
  console.log('userData', userData)

  if (isAppReady) {
    return <AppLoader />
  }

  return <>{children}</>
}

export default App
