import { Outlet } from 'react-router-dom'

import { MainLayout } from './MainLayout'

export function Root() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}
