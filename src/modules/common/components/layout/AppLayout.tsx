import { ReactNode, useEffect, useState } from 'react'
import { AppLogo, BottomBar, IUser, Navigation, TopBar } from '@common'
import { AppShell, Footer, Navbar, Text } from '@mantine/core'

interface IProps {
  children: ReactNode
}

function AppLayout({ children }: IProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<IUser | null>(null)

  useEffect(() => {
    setIsLoading(true)
    fetch('/api/user')
      .then((res) => res.json())
      .then((res) => {
        setData(res)
        setIsLoading(false)
      })
  }, [])

  return (
    <AppShell
      navbarOffsetBreakpoint={'md'}
      header={
        <TopBar logo={<AppLogo />} userDetails={data} setIsOpen={setIsOpen} isOpen={isOpen} isLoading={isLoading} />
      }
      navbar={<Navigation userDetails={data} isLoading={isLoading} isHidden={!isOpen} />}
      footer={<BottomBar />}
    >
      {children}
    </AppShell>
  )
}

export default AppLayout
