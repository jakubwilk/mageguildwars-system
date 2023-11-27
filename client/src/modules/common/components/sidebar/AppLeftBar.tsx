import { Fragment, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ActionIcon, Avatar, clsx, createStyles, Divider, Group, Indicator, Tooltip } from '@mantine/core'
import { IconBell, IconDoorEnter, IconDoorExit, IconHome, IconMedal, IconSettings, IconUsers } from '@tabler/icons-react'

const useStyles = createStyles((theme) => ({
  nav: {
    backgroundColor: theme.colors.dark[7],
  },
  icon: {
    '&.mantine-ActionIcon-root': {
      color: '#535353',
      height: 'auto',
      width: 'auto',
      padding: '0.5rem',
      '&:hover, &:focus': {
        backgroundColor: '#32283b',
        color: '#d9d9d9',
        outline: 'none',
      },
    },
  },
  avatar: {
    height: 'auto !important',
    width: '50px !important',
  },
}))

function AppLeftBar() {
  const { classes } = useStyles()
  // const { width } = useViewportSize();

  const MAIN_NAV = useMemo(
    () => [
      {
        id: 1,
        title: 'Strona główna',
        IconComponent: IconHome,
        url: '/',
      },
      {
        id: 2,
        title: 'Użytkownicy',
        IconComponent: IconUsers,
        url: '/users',
      },
      {
        id: 3,
        title: 'Osiągnięcia',
        IconComponent: IconMedal,
        url: '/awards',
      },
    ],
    []
  )

  const GUEST_NAV = useMemo(
    () => [
      {
        id: 5,
        title: 'Dołącz do rozgrywki',
        IconComponent: IconDoorEnter,
        url: '/join',
      },
    ],
    []
  )

  const USER_NAV = useMemo(
    () => [
      {
        id: 6,
        title: 'Ustawienia',
        IconComponent: IconSettings,
        url: '/settings',
      },
    ],
    []
  )

  const isUserLogged = useMemo(() => true, [])

  return (
    <aside className={clsx('absolute top-0 left-0 h-full z-10 w-[70px] pt-8 pb-4 flex items-center flex-col', classes.nav)}>
      {MAIN_NAV.map(({ id, title, IconComponent, url }) => (
        <Tooltip key={id} label={title} position={'right'}>
          <Link to={url} className={'mb-2'}>
            <ActionIcon color={'grape'} className={clsx('duration-150', classes.icon)}>
              <IconComponent size={'1.5rem'} />
            </ActionIcon>
          </Link>
        </Tooltip>
      ))}
      <Divider size={'xs'} my={'md'} className={'h-[1px] w-full'} color={'dark'} />
      {isUserLogged ? (
        <Fragment>
          <Tooltip label={'Przejdź do profilu Vincent'} position={'right'}>
            <Link to={'/account'} className={'mb-2'}>
              <Group position={'center'}>
                <Avatar
                  className={classes.avatar}
                  src={
                    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80'
                  }
                />
              </Group>
            </Link>
          </Tooltip>
          <Tooltip label={'Powiadomienia'} position={'right'}>
            <Group position={'center'} className={'mb-2'}>
              <Indicator size={0} offset={10}>
                <ActionIcon color={'grape'} className={clsx('duration-150', classes.icon)}>
                  <IconBell size={'1.5rem'} />
                </ActionIcon>
              </Indicator>
            </Group>
          </Tooltip>
          {USER_NAV.map(({ id, title, IconComponent, url }) => (
            <Tooltip key={id} label={title} position={'right'}>
              <Link to={url} className={'mb-2'}>
                <ActionIcon color={'grape'} className={clsx('duration-150', classes.icon)}>
                  <IconComponent size={'1.5rem'} />
                </ActionIcon>
              </Link>
            </Tooltip>
          ))}
          <Tooltip label={'Wyloguj sie'} position={'right'}>
            <ActionIcon color={'grape'} className={clsx('duration-150', classes.icon)}>
              <IconDoorExit size={'1.5rem'} />
            </ActionIcon>
          </Tooltip>
        </Fragment>
      ) : (
        <Fragment>
          {GUEST_NAV.map(({ id, title, IconComponent, url }) => (
            <Tooltip key={id} label={title} position={'right'}>
              <Link to={url} className={'mb-2'}>
                <ActionIcon color={'grape'} className={clsx('duration-150', classes.icon)}>
                  <IconComponent size={'1.5rem'} />
                </ActionIcon>
              </Link>
            </Tooltip>
          ))}
        </Fragment>
      )}
    </aside>
  )
}

export default AppLeftBar