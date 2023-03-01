import { ReactNode, useState } from 'react'
import { AppLogo, BottomBar, Navigation, TopBar } from '@common'
import { AppShell, Footer, Navbar, Text } from '@mantine/core'

interface IProps {
  children: ReactNode
}

function AppLayout({ children }: IProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AppShell
      navbarOffsetBreakpoint={'md'}
      header={<TopBar logo={<AppLogo />} setIsOpen={setIsOpen} isOpen={isOpen} />}
      navbar={<Navigation isHidden={!isOpen} />}
      footer={<BottomBar />}
    >
      {children}
    </AppShell>
  )
}

export default AppLayout
