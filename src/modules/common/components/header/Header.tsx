import { Discord } from '../socials/Discord.tsx'

import { HeaderMenu } from './HeaderMenu.tsx'

export function Header() {
  return (
    <header className={'flex items-center justify-between h-[80px]'}>
      <Discord />
      <HeaderMenu />
    </header>
  )
}
