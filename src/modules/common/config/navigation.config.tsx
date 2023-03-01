import { ISiteNavigation } from '@common'
import { Bookmarks, Books, Home, Planet, Users } from 'tabler-icons-react'

export const SITE_NAVIGATION: Array<ISiteNavigation> = [
  {
    label: 'Strona główna',
    href: '/',
    icon: <Home size={20} strokeWidth={1.5} />,
  },
  {
    label: 'Lista magów',
    href: '/users',
    icon: <Users size={20} strokeWidth={1.5} />,
  },
  {
    label: 'Spis zdolności',
    href: '/database',
    icon: <Bookmarks size={20} strokeWidth={1.5} />,
  },
  {
    label: 'Encyklopedia',
    href: '/world',
    icon: <Books size={20} strokeWidth={1.5} />,
  },
  {
    label: 'Mapa świata',
    href: '/map',
    icon: <Planet size={20} strokeWidth={1.5} />,
  },
]
