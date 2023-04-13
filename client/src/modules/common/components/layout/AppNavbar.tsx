import { useAuthContext } from '@auth'
import { Navbar } from '@mantine/core'
import { GuestUserNavigation, LoggedUserNavigation } from '@user'

interface IProps {
  isOpen: boolean
}

function AppNavbar({ isOpen }: IProps) {
  // eslint-disable-next-line no-unused-vars
  const { isUser, setUser } = useAuthContext()

  return (
    <Navbar hiddenBreakpoint={'sm'} hidden={!isOpen} width={{ sm: 300, lg: 350 }} className={'p-4'}>
      <Navbar.Section grow>{'Główna nawigacja'}</Navbar.Section>
      <Navbar.Section>{isUser ? <LoggedUserNavigation /> : <GuestUserNavigation />}</Navbar.Section>
    </Navbar>
  )
}

export default AppNavbar
