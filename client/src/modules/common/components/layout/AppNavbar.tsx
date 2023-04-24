import { useAuthContext } from '@auth'
import { createStyles, Drawer, Navbar } from '@mantine/core'
import { GuestUserNavigation, LoggedUserNavigation } from '@user'
import { clsx } from 'clsx'

import { Logo } from '../logo'

const useStyles = createStyles((theme) => ({
  drawer: {
    '& .mantine-Paper-root': {
      borderRight: `1px solid ${theme.colors.gray[9]}`,
    },
    '& .mantine-Drawer-content, & .mantine-Drawer-header': {
      backgroundColor: `${theme.colors.night[6]} !important`,
    },
    '& .mantine-Drawer-close': {
      color: theme.colors.gray[5],
      '&:hover, &:focus': {
        backgroundColor: theme.colors.night[3],
      },
    },
    '& .mantine-Drawer-title': {
      textTransform: 'uppercase',
      fontFamily: theme.headings.fontFamily,
      letterSpacing: '0.5px',
      color: theme.colors.gray[4],
    },
  },
  navbar: {
    backgroundColor: theme.colors.night[6],
  },
  text: {
    color: theme.colors.gray[6],
  },
}))

interface IProps {
  isOpen: boolean
  handleClose: () => void
}

function AppNavbar({ isOpen, handleClose }: IProps) {
  const { classes } = useStyles()
  const { isUser } = useAuthContext()

  return (
    <Drawer opened={isOpen} onClose={handleClose} title={<Logo />} className={classes.drawer} withCloseButton>
      <Navbar className={clsx('border-0', classes.navbar)}>
        <Navbar.Section>{'Główna nawigacja'}</Navbar.Section>
        <Navbar.Section>{isUser ? <LoggedUserNavigation handleCloseSidebar={handleClose} /> : <GuestUserNavigation />}</Navbar.Section>
      </Navbar>
    </Drawer>
  )
}

export default AppNavbar
