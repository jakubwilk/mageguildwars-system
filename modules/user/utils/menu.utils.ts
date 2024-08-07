import { IconAlignBoxLeftMiddle, IconDatabase, IconSettings, IconUser } from '@tabler/icons-react'
import { RouteEnum } from 'common/models'
import { IMenuItem } from 'user/models'

export const USER_MAIN_MENU: IMenuItem[] = [
  {
    id: 1,
    label: 'Podsumowanie',
    title: 'Przejdź do podsumowania swojego konta',
    href: RouteEnum.ACCOUNT,
    IconComponent: IconUser
  },
  {
    id: 2,
    label: 'Ustawienia',
    title: 'Przejdź do ustawień konta',
    href: RouteEnum.SETTINGS,
    IconComponent: IconSettings
  },
  {
    id: 3,
    label: 'Panel Mistrza Gry',
    title: 'Panel zarządzania dla mistrzów gry',
    href: RouteEnum.GM_PANEL,
    IconComponent: IconAlignBoxLeftMiddle
  },
  {
    id: 4,
    label: 'Administracja',
    title: 'Panel zarządzania aplikacją',
    href: RouteEnum.ADMIN_DASHBOARD,
    IconComponent: IconDatabase
  }
]
