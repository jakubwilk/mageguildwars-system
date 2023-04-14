import { useAuthContext } from '@auth'
import { Drawer, Navbar } from '@mantine/core'
import { GuestUserNavigation, LoggedUserNavigation } from '@user'

interface IProps {
  isOpen: boolean
  handleClose: () => void
}

function AppNavbar({ isOpen, handleClose }: IProps) {
  const { isUser } = useAuthContext()

  return (
    <Drawer opened={isOpen} onClose={handleClose} title={'Nawigacja'}>
      <Navbar className={'border-0'}>
        <Navbar.Section>{'Główna nawigacja'}</Navbar.Section>
        <Navbar.Section>{isUser ? <LoggedUserNavigation /> : <GuestUserNavigation />}</Navbar.Section>
      </Navbar>
    </Drawer>
  )
}

export default AppNavbar
