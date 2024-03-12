import { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Button, Divider, Group, Menu, Text, Tooltip } from '@mantine/core'
import { IconDoorExit } from '@tabler/icons-react'
import clsx from 'clsx'

import '@mantine/core/styles/Menu.css'
import '@mantine/core/styles/Divider.layer.css'
import classes from './Menu.module.css'

interface IProps {
  isExpanded: boolean
  setIsSidebarExpanded: (val: boolean) => void
}

export function UserMenu({ isExpanded, setIsSidebarExpanded }: IProps) {
  const renderLogoutLink = useCallback(
    () => (
      <Button
        className={clsx(
          'w-full h-[auto] px-2 flex items-center',
          classes.logout,
          isExpanded ? classes.buttonExpanded : '',
        )}
        variant={'transparent'}
      >
        <IconDoorExit stroke={1.5} style={{ height: '24px', width: '24px' }} />
        {isExpanded && (
          <Text className={clsx('ml-2 text-left', classes.linkText)}>
            {'Wyloguj się'}
            <span className={clsx('block', classes.linkSubText)}>
              {'Zakończ sesje użytkownika'}
            </span>
          </Text>
        )}
      </Button>
    ),
    [isExpanded, setIsSidebarExpanded],
  )

  const renderUserMenu = useCallback(() => {
    const UserMenuComponent = (
      <Menu.Dropdown>
        <Menu.Label className={'uppercase'}>{'Konto'}</Menu.Label>
        <Menu.Item
          component={Link}
          onClick={() => setIsSidebarExpanded(false)}
          to={'/settings'}
        >
          {'Edytuj dane'}
        </Menu.Item>
        <Menu.Item component={Link} onClick={() => setIsSidebarExpanded(false)} to={'/'}>
          {'Anonimizuj swoje dane'}
        </Menu.Item>
        <Menu.Label className={'uppercase'}>{'Mage Guild Wars'}</Menu.Label>
        <Menu.Item component={Link} onClick={() => setIsSidebarExpanded(false)} to={'/'}>
          {'Character 1'}
        </Menu.Item>
        <Menu.Item component={Link} onClick={() => setIsSidebarExpanded(false)} to={'/'}>
          {'Character 2'}
        </Menu.Item>
        <Menu.Item component={Link} onClick={() => setIsSidebarExpanded(false)} to={'/'}>
          {'Character 3'}
        </Menu.Item>
        <Menu.Item
          component={Link}
          disabled={true}
          onClick={() => setIsSidebarExpanded(false)}
          to={'/'}
        >
          {'Dodaj nowe konto'}
        </Menu.Item>
        <Menu.Divider className={'h-[1px]'} />
        <Menu.Item component={Link} onClick={() => setIsSidebarExpanded(false)} to={'/'}>
          {'Dziennik fabularny'}
        </Menu.Item>
        <Menu.Item component={Link} onClick={() => setIsSidebarExpanded(false)} to={'/'}>
          {'Panel Mistrza Gry'}
        </Menu.Item>
      </Menu.Dropdown>
    )

    return (
      <Menu width={250}>
        <Menu.Target>
          <Button
            className={clsx(
              'm-0',
              isExpanded
                ? `p-2 flex items-center h-[auto] w-full ${classes.buttonExpanded}`
                : 'p-0 h-[40px] w-[40px]',
            )}
            variant={'transparent'}
          >
            <Avatar radius={'xl'} />
            {isExpanded && (
              <Text className={clsx('ml-2 text-left', classes.linkText)}>
                {'mgw-vincent'}
                <span className={clsx('block', classes.linkSubText)}>
                  {'Otwórz menu użytkownika'}
                </span>
              </Text>
            )}
          </Button>
        </Menu.Target>
        {UserMenuComponent}
      </Menu>
    )
  }, [isExpanded, setIsSidebarExpanded])

  if (isExpanded) {
    return (
      <Group gap={'md'}>
        {renderUserMenu()}
        {renderLogoutLink()}
        <Divider className={'h-[1px] w-full'} />
      </Group>
    )
  }

  return (
    <Group gap={'sm'}>
      {renderUserMenu()}
      <Tooltip color={'gray'} label={'Wyloguj się z aplikacji'} position={'right'}>
        {renderLogoutLink()}
      </Tooltip>
      <Divider className={'h-[1px] w-full'} />
    </Group>
  )
}
