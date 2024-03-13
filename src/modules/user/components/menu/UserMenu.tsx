import { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Button, Group, Menu, Text } from '@mantine/core'
import { IconDoorExit } from '@tabler/icons-react'
import clsx from 'clsx'

import '@mantine/core/styles/Menu.css'
import '@mantine/core/styles/Divider.layer.css'
import classes from './Menu.module.css'

interface IProps {
  handleClose: () => void
}

export function UserMenu({ handleClose }: IProps) {
  const renderLogoutLink = useCallback(
    () => (
      <Button
        className={clsx(
          'w-full h-[auto] p-2 flex items-center',
          classes.logout,
          classes.buttonExpanded,
        )}
        onClick={handleClose}
        variant={'transparent'}
      >
        <IconDoorExit stroke={1.5} style={{ height: '24px', width: '24px' }} />
        <Text className={clsx('ml-2 text-left', classes.linkText)}>
          {'Wyloguj się'}
          <span className={clsx('block', classes.linkSubText)}>
            {'Zakończ sesje użytkownika'}
          </span>
        </Text>
      </Button>
    ),
    [],
  )

  const renderUserMenu = useCallback(() => {
    const UserMenuComponent = (
      <Menu.Dropdown>
        <Menu.Label className={'uppercase'}>{'Konto'}</Menu.Label>
        <Menu.Item component={Link} onClick={handleClose} to={'/settings'}>
          {'Edytuj dane'}
        </Menu.Item>
        <Menu.Item component={Link} onClick={handleClose} to={'/'}>
          {'Anonimizuj swoje dane'}
        </Menu.Item>
        <Menu.Label className={'uppercase'}>{'Mage Guild Wars'}</Menu.Label>
        <Menu.Item component={Link} onClick={handleClose} to={'/'}>
          {'Character 1'}
        </Menu.Item>
        <Menu.Item component={Link} onClick={handleClose} to={'/'}>
          {'Character 2'}
        </Menu.Item>
        <Menu.Item component={Link} onClick={handleClose} to={'/'}>
          {'Character 3'}
        </Menu.Item>
        <Menu.Item component={Link} disabled={true} to={'/'}>
          {'Dodaj nowe konto'}
        </Menu.Item>
        <Menu.Divider className={'h-[1px]'} />
        <Menu.Item component={Link} onClick={handleClose} to={'/'}>
          {'Dziennik fabularny'}
        </Menu.Item>
        <Menu.Item component={Link} onClick={handleClose} to={'/'}>
          {'Panel Mistrza Gry'}
        </Menu.Item>
      </Menu.Dropdown>
    )

    return (
      <Menu width={250}>
        <Menu.Target>
          <Button
            className={clsx(
              'm-0 p-2 flex items-center h-[auto] w-full',
              classes.buttonExpanded,
            )}
            variant={'transparent'}
          >
            <Avatar radius={'xl'} />
            <Text className={clsx('ml-2 text-left', classes.linkText)}>
              {'mgw-vincent'}
              <span className={clsx('block', classes.linkSubText)}>
                {'Otwórz menu użytkownika'}
              </span>
            </Text>
          </Button>
        </Menu.Target>
        {UserMenuComponent}
      </Menu>
    )
  }, [])

  return (
    <Group gap={'sm'}>
      {renderUserMenu()}
      {renderLogoutLink()}
    </Group>
  )
}
