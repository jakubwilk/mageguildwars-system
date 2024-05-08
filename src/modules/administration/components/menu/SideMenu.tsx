import { NavLink } from 'react-router-dom'
import { Text } from '@mantine/core'
import clsx from 'clsx'
import { routeKeys } from 'common/utils'

import classes from './Menu.module.css'

const MENU_LINKS = [
  {
    id: 'root-panel',
    link: routeKeys.ROOT_PANEL,
    label: 'Panel Główny',
    description: 'Przejdź do strony głównej panelu administracyjnego',
  },
  {
    id: 'root-panel-users',
    link: routeKeys.ROOT_PANEL_USERS,
    label: 'Uzytkownicy',
    description: 'Przeglądaj utworzone konta użytkowników oraz ich postacie',
  },
  {
    id: 'root-panel-ares',
    link: routeKeys.ROOT_PANEL_AREAS,
    label: 'Państwa i Królestwa',
    description:
      'Dodaj, edytuj lub usuń główną lokację, w której będą znajdować się mniejsze wątki',
  },
  {
    id: 'root-panel-magic',
    link: routeKeys.ROOT_PANEL_MAGIC,
    label: 'Magie',
    description:
      'Przejdź do spisu wszystkich magii, dodawaj nowe lub edytuj i usuwaj istniejące',
  },
  {
    id: 'root-panel-spells',
    link: routeKeys.ROOT_PANEL_SPELLS,
    label: 'Zaklęcia',
    description:
      'Lista dostepnych wszystkich zaklęć startowych oraz tych utworzonych przez Graczy',
  },
  {
    id: 'root-panel-skills',
    link: routeKeys.ROOT_PANEL_SKILLS,
    label: 'Umiejętności',
    description:
      'Przejdź do spisu umiejętności, gdzie można dodawać nowe zdolności albo edytować i usuwać już istniejące',
  },
]

export function SideMenu() {
  return (
    <nav className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4'}>
      {MENU_LINKS.map(({ id, link, label, description }) => (
        <NavLink
          className={({ isActive }) =>
            clsx(
              'p-4 rounded-xl',
              classes.menuItem,
              isActive ? classes.menuItemActive : '',
            )
          }
          end
          key={id}
          to={link}
        >
          <div className={'flex flex-col'}>
            <Text className={classes.menuItemTextMain}>{label}</Text>
            <Text className={clsx('lowercase', classes.menuItemSubText)}>
              {description}
            </Text>
          </div>
        </NavLink>
      ))}
    </nav>
  )
}
