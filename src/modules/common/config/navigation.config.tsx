import { ISiteNavigation, IUserNavigation } from '@common'
import {
  Ad2,
  Bookmarks,
  Books,
  BrandGmail,
  Home,
  HomeCog,
  Id,
  Lock,
  Pencil,
  Planet,
  ServerCog,
  Tag,
  User,
  Users,
  Wand,
} from 'tabler-icons-react'

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

export const USER_NAVIGATION: Array<IUserNavigation> = [
  {
    isTitle: true,
    label: 'Panele',
  },
  {
    isTitle: false,
    label: 'Panel użytkownika',
    href: '/usercp',
    icon: <User size={14} />,
  },
  {
    isTitle: false,
    label: 'Panel kart postaci',
    href: '/magecp',
    icon: <Wand size={14} />,
  },
  {
    isTitle: false,
    label: 'Panel mistrza gry',
    href: '/guardiancp',
    icon: <Pencil size={14} />,
  },
  {
    isTitle: false,
    label: 'Panel opiekuna',
    href: '/modcp',
    icon: <HomeCog size={14} />,
  },
  {
    isTitle: false,
    label: 'Panel administratora',
    href: '/admincp',
    icon: <ServerCog size={14} />,
  },
  {
    isTitle: true,
    label: 'Ustawienia',
  },
  {
    isTitle: false,
    label: 'Zmień login',
    href: '/',
    icon: <Tag size={14} />,
  },
  {
    isTitle: false,
    label: 'Zmień hasło',
    href: '/',
    icon: <Lock size={14} />,
  },
  {
    isTitle: false,
    label: 'Zmień adres email',
    href: '/',
    icon: <BrandGmail size={14} />,
  },
  {
    isTitle: false,
    label: 'Zmień avatar',
    href: '/',
    icon: <Ad2 size={14} />,
  },
  {
    isTitle: false,
    label: 'Zmień sygnaturę',
    href: '/',
    icon: <Id size={14} />,
  },
]
