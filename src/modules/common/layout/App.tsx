'use client'

import { useFetchInitialSettingsQuery } from '@/config'
import { ReactNode } from 'react'
import { AppLoader } from '@modules/common'

interface IProps {
  children: ReactNode
}

const App = ({ children }: IProps) => {
  const { data, isLoading } = useFetchInitialSettingsQuery()

  console.log('data', data)

  if (isLoading) {
    return <AppLoader />
  }

  return <>{children}</>
}

export default App
