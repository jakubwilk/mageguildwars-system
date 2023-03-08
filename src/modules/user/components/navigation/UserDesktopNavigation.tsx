import { Fragment, useMemo } from 'react'
import { Poppins } from 'next/font/google'
import { important, USER_NAVIGATION } from '@common'
import {
  ActionIcon,
  Avatar,
  Button,
  clsx,
  createStyles,
  Group,
  Indicator,
  Menu,
  Skeleton,
  Text,
  Tooltip,
} from '@mantine/core'
import { useUserContext } from '@user'
import { Bell, ChevronDown, Message } from 'tabler-icons-react'

const poppins = Poppins({ weight: '400', subsets: ['latin-ext'] })

const useStyles = createStyles((theme) => ({
  navigationWrapper: {
    display: 'none',
    height: 'inherit',
    [`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
      display: 'flex',
    },
  },
  logoutButton: {
    backgroundColor: important(theme.colors.red[6]),
    '&:hover, &:focus': {
      backgroundColor: important(theme.colors.red[7]),
    },
  },
}))

interface IProps {
  isLoading: boolean
}

function UserDesktopNavigation({ isLoading }: IProps) {
  const { user } = useUserContext()
  const { classes } = useStyles()

  const hasMessages = useMemo(() => user.messagesCount > 0, [user])
  const hasNotifications = useMemo(() => user.notificationsCount > 0, [user])

  return (
    <div className={clsx('items-center', classes.navigationWrapper)}>
      <Group spacing={'lg'}>
        <Tooltip label={'Prywatne wiadomości'} position={'left'} withArrow>
          <Indicator label={user.messagesCount} color={'blue'} size={18} offset={5} inline disabled={!hasMessages}>
            <ActionIcon radius={'xl'}>
              <Message size={24} strokeWidth={1.5} />
            </ActionIcon>
          </Indicator>
        </Tooltip>
        <Tooltip label={'Powiadomienia'} position={'bottom'} withArrow>
          <Indicator
            label={user.notificationsCount}
            color={'red'}
            size={18}
            offset={5}
            inline
            disabled={!hasNotifications}
          >
            <ActionIcon radius={'xl'}>
              <Bell size={24} strokeWidth={1.5} />
            </ActionIcon>
          </Indicator>
        </Tooltip>
        <Menu shadow={'md'} width={250}>
          <Menu.Target>
            <button className={'flex items-center'}>
              {isLoading ? (
                <div className={'flex items-center w-[150px]'}>
                  <Skeleton height={30} radius={'md'} />
                </div>
              ) : (
                <Fragment>
                  <Avatar radius={'xl'} size={'md'} />
                  <Text color={'white'} className={clsx('ml-2', poppins.className)}>
                    {user.username}
                  </Text>
                  <ChevronDown size={14} strokeWidth={1.5} color={'white'} className={'ml-1'} />
                </Fragment>
              )}
            </button>
          </Menu.Target>
          <Menu.Dropdown>
            {USER_NAVIGATION.map(({ isTitle, label, href, icon }) => (
              <Fragment key={label}>
                {isTitle ? (
                  <Menu.Label>{label}</Menu.Label>
                ) : (
                  <Menu.Item component={'a'} href={href === '/magecp' ? `${href}/${user.id}` : href} icon={icon}>
                    {label}
                  </Menu.Item>
                )}
              </Fragment>
            ))}
          </Menu.Dropdown>
        </Menu>
        <Button className={clsx('ease-linear duration-100', poppins.className, classes.logoutButton)}>
          {'Wyloguj'}
        </Button>
      </Group>
    </div>
  )
}

export default UserDesktopNavigation
