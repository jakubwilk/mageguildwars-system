'use client'

import { useCallback } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ActionIcon, Menu, Tooltip } from '@mantine/core'
import { useAuthContext } from '@modules/auth'
import { navbarStyles } from '@modules/common'
import { IUserMenu, USER_MAIN_MENU, UserMenuEnum } from '@modules/user'
import { IconUser } from '@tabler/icons-react'
import { isEqual } from 'lodash'

const UserMainMenu = () => {
  const { push } = useRouter()
  const { setUser } = useAuthContext()

  const buildNavigation = useCallback((type: UserMenuEnum) => {
    const filteredMenu = USER_MAIN_MENU.filter(
      (item: IUserMenu) => isEqual(item.type, type),
      [],
    )

    return filteredMenu.map((item: IUserMenu) => {
      return (
        <Menu.Item key={item.name} component={Link} href={item.slug}>
          {item.name}
        </Menu.Item>
      )
    })
  }, [])

  const handleUserLogout = useCallback(() => {
    console.log('logout clicked')
    setUser(null)
    push('/')
  }, [push, setUser])

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
        {buildNavigation(UserMenuEnum.MAIN)}
        <Menu.Label>{'Mage Guild Wars'}</Menu.Label>
        <Menu.Item>{'Ryu'}</Menu.Item>
        {buildNavigation(UserMenuEnum.MGW)}
        <Menu.Label>{'Inne'}</Menu.Label>
        <Menu.Item onClick={handleUserLogout}>{'Wyloguj'}</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

export default UserMainMenu
