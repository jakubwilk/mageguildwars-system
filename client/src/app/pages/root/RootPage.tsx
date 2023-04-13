import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { AppFooter, AppHeader, AppNavbar } from '@common'
import { AppShell } from '@mantine/core'

function RootPage() {
  const [opened, setOpened] = useState(false)

  return (
    <AppShell
      navbarOffsetBreakpoint={'sm'}
      asideOffsetBreakpoint={'sm'}
      navbar={<AppNavbar isOpen={opened} />}
      footer={<AppFooter />}
      header={<AppHeader isOpen={opened} setOpened={setOpened} />}
    >
      <Outlet />
    </AppShell>
  )
}

export default RootPage
