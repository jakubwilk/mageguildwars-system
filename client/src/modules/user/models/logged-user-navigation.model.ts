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
    name: 'Użytkownik',
    link: '/user-panel/',
    iconColor: 'grape',
  },
  {
    id: '4f04812c-0165-45da-843e-e6a8fcea66c4',
    name: 'Strażnik',
    link: '/mg-panel/',
    iconColor: 'grape',
  },
  {
    id: '268552b4-1a50-459b-825c-03ec93c1c25e',
    name: 'Moderator',
    link: '/mod-panel/',
    iconColor: 'blue',
  },
  {
    id: 'b98de93f-e835-45de-9eae-65ea03160aa9',
    name: 'Administrator',
    link: '/admin-panel/',
    iconColor: 'green',
  },
]
