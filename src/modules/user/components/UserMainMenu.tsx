'use client'

import { ActionIcon, Menu, Tooltip } from '@mantine/core'
import { navbarStyles } from '@modules/common'
import { IconUser } from '@tabler/icons-react'

const UserMainMenu = () => {
  return (
    <Menu width={250}>
      <Menu.Target>
        <Tooltip position={'bottom'} label={'Otwórz panel użytkownika'}>
          <ActionIcon
            variant={'transparent'}
            color={'violet'}
            aria-label={'Otwórz panel użytkownika'}
            className={navbarStyles.mainNavbarItem}
          >
            <IconUser style={{ width: '80%', height: '80%' }} stroke={1.5} />
          </ActionIcon>
        </Tooltip>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>{'Główne'}</Menu.Label>
        <Menu.Item>{'Ustawienia'}</Menu.Item>
        <Menu.Label>{'Mage Guild Wars'}</Menu.Label>
        <Menu.Item>{'Ryu'}</Menu.Item>
        <Menu.Item>{'Profile'}</Menu.Item>
        <Menu.Item>{'Dodaj profil'}</Menu.Item>
        <Menu.Label>{'Inne'}</Menu.Label>
        <Menu.Item>{'Wyloguj'}</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

export default UserMainMenu
