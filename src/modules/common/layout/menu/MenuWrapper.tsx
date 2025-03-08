'use client'

import { useMediaQuery } from '@mantine/hooks'

import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'

export default function MenuWrapper() {
  const isMobile = useMediaQuery('(max-width: 64rem)')

  if (isMobile) {
    return <MobileMenu />
  }

  return <DesktopMenu />
}
