'use client'

import { ReactNode } from 'react'
import { useFetchInitialSettingsQuery } from '@config'
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
