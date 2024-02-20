import { Link } from 'react-router-dom'
import { Avatar, Button as MantineButton, Group, Menu, Tooltip } from '@mantine/core'
import { IconDoorExit } from '@tabler/icons-react'

import '@mantine/core/styles/Menu.css'
import classes from './Menu.module.css'

export function UserMenu() {
  return (
    <Group gap={'sm'}>
      <Tooltip color={'gray'} label={'Otwórz menu użytkownika'}>
        <Menu width={250}>
          <Menu.Target>
            <MantineButton
              className={'p-0 m-0 h-[40px] w-[40px]'}
              variant={'transparent'}
            >
              <Avatar radius={'xl'} />
            </MantineButton>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label className={'uppercase'}>{'Konto'}</Menu.Label>
            <Menu.Item component={Link} to={'/'}>
              {'Edytuj dane'}
            </Menu.Item>
            <Menu.Item component={Link} to={'/'}>
              {'Anonimizuj swoje dane'}
            </Menu.Item>
            <Menu.Label className={'uppercase'}>{'Mage Guild Wars'}</Menu.Label>
            <Menu.Item component={Link} to={'/'}>
              {'Character 1'}
            </Menu.Item>
            <Menu.Item component={Link} to={'/'}>
              {'Character 2'}
            </Menu.Item>
            <Menu.Item component={Link} to={'/'}>
              {'Character 3'}
            </Menu.Item>
            <Menu.Item component={Link} disabled={true} to={'/'}>
              {'Dodaj nowe konto'}
            </Menu.Item>
            <Menu.Divider className={'h-[1px]'} />
            <Menu.Item component={Link} to={'/'}>
              {'Dziennik fabularny'}
            </Menu.Item>
            <Menu.Item component={Link} to={'/'}>
              {'Panel Mistrza Gry'}
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Tooltip>
      <Tooltip color={'gray'} label={'Wyloguj się z aplikacji'}>
        <MantineButton className={classes.logout} variant={'transparent'}>
          <IconDoorExit stroke={1.5} style={{ height: '24px', width: '24px' }} />
        </MantineButton>
      </Tooltip>
    </Group>
  )
}
