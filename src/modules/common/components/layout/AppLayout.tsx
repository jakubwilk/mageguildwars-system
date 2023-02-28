import { ReactNode, useState } from 'react'
import { AppLogo, TopBar } from '@common'
import { AppShell, Footer, Navbar, Text } from '@mantine/core'

interface IProps {
  children: ReactNode
}

function AppLayout({ children }: IProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AppShell
      navbarOffsetBreakpoint={'sm'}
      header={<TopBar logo={<AppLogo />} setIsOpen={setIsOpen} isOpen={isOpen} />}
      navbar={
        <Navbar hiddenBreakpoint={'sm'} hidden={!isOpen} p={'md'} width={{ sm: 300 }}>
          <Text>{'Navbar'}</Text>
        </Navbar>
      }
      footer={
        <Footer height={60} p={'md'}>
          <Text>{'Footer'}</Text>
        </Footer>
      }
    >
      {children}
    </AppShell>
  )
}

export default AppLayout
