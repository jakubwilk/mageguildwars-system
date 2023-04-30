import { DefaultMantineColor } from '@mantine/core'

export interface UserNavigation {
  id: string
  name: string
  link: string
  iconColor: DefaultMantineColor
  isButton?: boolean
}

export const USER_NAVIGATION: Array<UserNavigation> = [
  {
    id: '0f83b36e-ed6d-4c81-80c4-1ccfb83826aa',
    name: 'Panel użytkownika',
    link: '/user-panel/',
    iconColor: 'grape',
  },
  {
    id: '4f04812c-0165-45da-843e-e6a8fcea66c4',
    name: 'Panel strażnika',
    link: '/mg-panel/',
    iconColor: 'grape',
  },
  {
    id: '268552b4-1a50-459b-825c-03ec93c1c25e',
    name: 'Panel moderatora',
    link: '/mod-panel/',
    iconColor: 'blue',
  },
  {
    id: 'b98de93f-e835-45de-9eae-65ea03160aa9',
    name: 'Panel administratora',
    link: '/admin-panel/',
    iconColor: 'green',
  },
]

export interface UserBreadcrumbNavigation {
  id: string
  link?: string
  name: string
  title?: string
}

export const USER_BREADCRUMB_NAVIGATION: Array<UserBreadcrumbNavigation> = [
  {
    id: 'e1062ea4-93a1-4452-a3ab-ba5aa94c498c',
    link: '/',
    name: 'Strona główna',
    title: 'Powrót do strony głównej',
  },
  {
    id: '4df60b41-aae6-44ae-90d0-ff4c4125b079',
    name: 'Panel użytkownika',
  },
]
