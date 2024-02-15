import { ReactNode, useCallback } from 'react'
import { Outlet } from 'react-router-dom'

import { AuthLayout } from './AuthLayout.tsx'
import { MainLayout } from './MainLayout'

interface IProps {
  isAuthPage?: boolean
}

export const Root = ({ isAuthPage }: IProps) => {
  const renderLayout = useCallback(
    (children: ReactNode) => {
      if (isAuthPage) {
        return <AuthLayout>{children}</AuthLayout>
      }

      return <MainLayout>{children}</MainLayout>
    },
    [isAuthPage],
  )

  return renderLayout(<Outlet />)
}
