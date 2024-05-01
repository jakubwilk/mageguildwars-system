import { NavLink } from 'react-router-dom'
import { Text } from '@mantine/core'
import { IconBook2, IconHome, IconMedal, IconUsers } from '@tabler/icons-react'
import clsx from 'clsx'

import { IMainMenuItem } from '../../models'
import { routeKeys } from '../../utils'

import classes from './Menu.module.css'

const MAIN_MENU: IMainMenuItem[] = [
  {
    id: 1,
    label: 'Strona główna',
    text: 'Wróć na stronę główną',
    url: routeKeys.HOME,
    IconComponent: IconHome,
    isDisabled: false,
  },
  {
    id: 2,
    label: 'Użytkownicy',
    text: 'Przejrzyj listę aktywnych magów',
    url: routeKeys.USERS,
    IconComponent: IconUsers,
    isDisabled: true,
  },
  {
    id: 3,
    label: 'Osiągnięcia',
    text: 'Lista wszystkich osiągnięć możliwych do zdobycia',
    url: routeKeys.MEDALS,
    IconComponent: IconMedal,
    isDisabled: true,
  },
  {
    id: 4,
    label: 'Regulaminy',
    text: 'Polityka prywatności i zasady korzystania z serwisu',
    url: routeKeys.RULES,
    IconComponent: IconBook2,
    isDisabled: true,
  },
]

export function MainMenu() {
  return (
    <div className={'flex flex-col gap-2'}>
      {MAIN_MENU.map(({ id, label, text, url, IconComponent, isDisabled }) => (
        <NavLink
          className={({ isActive }) =>
            clsx(
              'flex items-center justify-start p-4 rounded-md',
              isActive ? classes.menuItemActive : classes.menuItem,
              isDisabled
                ? clsx('pointer-events-none select-none', classes.menuItemDisabled)
                : '',
            )
          }
          {...(isDisabled && { tabIndex: -1 })}
          key={id}
          to={url}
        >
          <IconComponent className={classes.menuItemIcon} />
          <div className={'flex flex-col ml-3'}>
            <Text className={classes.menuItemTextMain}>{label}</Text>
            <Text className={clsx('lowercase', classes.menuItemSubText)}>{text}</Text>
          </div>
        </NavLink>
      ))}
    </div>
  )
}
