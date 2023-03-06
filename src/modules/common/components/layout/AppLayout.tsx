import { ReactNode, useEffect, useState } from 'react'
import { AppLogo, BottomBar, IUser, Navigation, TopBar } from '@common'
import { AppShell, Footer, Navbar, Text } from '@mantine/core'
import { useUserContext } from '@user'

interface IProps {
  children: ReactNode
}

function AppLayout({ children }: IProps) {
  const { setUser } = useUserContext()
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch('/api/user')
      .then((res) => res.json())
      .then((res) => {
        setUser(res)
        setIsLoading(false)
      })
  }, [setUser])

  return (
    <AppShell
      navbarOffsetBreakpoint={'md'}
      header={<TopBar logo={<AppLogo />} setIsOpen={setIsOpen} isOpen={isOpen} isLoading={isLoading} />}
      navbar={<Navigation isLoading={isLoading} isHidden={!isOpen} />}
      footer={<BottomBar />}
    >
      {children}
    </AppShell>
  )
}

export default AppLayout
