import { IAppNavbar } from '@modules/common'

export const MAIN_NAVBAR: Array<IAppNavbar> = [
  {
    slug: 'strona-glowna',
    name: 'Strona główna',
    url: '/',
    isDisabled: false,
  },
  {
    slug: 'lista-magow',
    name: 'Lista Magów',
    url: '/users',
    isDisabled: false,
  },
]
