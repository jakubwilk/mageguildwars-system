import { IAppNavbar } from '@modules/common'
import { IconHome, IconUsers } from '@tabler/icons-react'

export const MAIN_NAVBAR: Array<IAppNavbar> = [
  {
    slug: 'strona-glowna',
    name: 'Strona główna',
    description: 'Przejdź do strony głównej Mage Guild Wars',
    url: '/',
    Icon: IconHome,
    isDisabled: false,
  },
  {
    slug: 'lista-magow',
    name: 'Lista Magów',
    description: 'Zobacz listę magów',
    url: '/users',
    Icon: IconUsers,
    isDisabled: false,
  },
]
