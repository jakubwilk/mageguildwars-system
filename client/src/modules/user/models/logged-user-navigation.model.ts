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
]
