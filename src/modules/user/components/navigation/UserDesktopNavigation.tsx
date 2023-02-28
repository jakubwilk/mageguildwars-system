import { Poppins } from 'next/font/google'
import { important } from '@common'
import { ActionIcon, Avatar, Button, clsx, createStyles, Group, Indicator, Menu, Text, Tooltip } from '@mantine/core'
import {
  Ad2,
  Bell,
  BrandGmail,
  ChevronDown,
  HomeCog,
  Id,
  Lock,
  Message,
  Pencil,
  ServerCog,
  Tag,
  User,
} from 'tabler-icons-react'

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

function UserDesktopNavigation() {
  const { classes } = useStyles()

  return (
    <div className={clsx('items-center', classes.navigationWrapper)}>
      <Group spacing={'lg'}>
        <Tooltip label={'Prywatne wiadomości'} position={'left'} withArrow>
          <Indicator label={5} color={'blue'} size={18} offset={5} inline>
            <ActionIcon radius={'xl'}>
              <Message size={24} strokeWidth={1.5} />
            </ActionIcon>
          </Indicator>
        </Tooltip>
        <Tooltip label={'Powiadomienia'} position={'bottom'} withArrow>
          <Indicator label={1} color={'red'} size={18} offset={5} inline>
            <ActionIcon radius={'xl'}>
              <Bell size={24} strokeWidth={1.5} />
            </ActionIcon>
          </Indicator>
        </Tooltip>
        <Menu shadow={'md'} width={250}>
          <Menu.Target>
            <button className={'flex items-center'}>
              <Avatar radius={'xl'} size={'md'} />
              <Text color={'white'} className={clsx('ml-2', poppins.className)}>
                {'Ryu'}
              </Text>
              <ChevronDown size={14} strokeWidth={1.5} color={'white'} className={'ml-1'} />
            </button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Label>{'Panele'}</Menu.Label>
            <Menu.Item component={'a'} href={'/'} icon={<User size={14} />}>
              {'Panel użytkownika'}
            </Menu.Item>
            <Menu.Item component={'a'} href={'/'} icon={<Pencil size={14} />}>
              {'Panel mistrza gry'}
            </Menu.Item>
            <Menu.Item component={'a'} href={'/'} icon={<HomeCog size={14} />}>
              {'Panel opiekuna'}
            </Menu.Item>
            <Menu.Item component={'a'} href={'/'} icon={<ServerCog size={14} />}>
              {'Panel administratora'}
            </Menu.Item>
            <Menu.Divider />
            <Menu.Label>{'Ustawienia'}</Menu.Label>
            <Menu.Item component={'a'} href={'/'} icon={<Tag size={14} />}>
              {'Zmień login'}
            </Menu.Item>
            <Menu.Item component={'a'} href={'/'} icon={<Lock size={14} />}>
              {'Zmień hasło'}
            </Menu.Item>
            <Menu.Item component={'a'} href={'/'} icon={<BrandGmail size={14} />}>
              {'Zmień adres email'}
            </Menu.Item>
            <Menu.Item component={'a'} href={'/'} icon={<Ad2 size={14} />}>
              {'Zmień avatar'}
            </Menu.Item>
            <Menu.Item component={'a'} href={'/'} icon={<Id size={14} />}>
              {'Zmień sygnaturę'}
            </Menu.Item>
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
