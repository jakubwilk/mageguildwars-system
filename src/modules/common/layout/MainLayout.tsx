import { ReactNode } from 'react'
import { Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import clsx from 'clsx'

import { Footer, SidebarWrapper } from '../components'

import '@mantine/core/styles/Overlay.layer.css'

interface IProps {
  children: ReactNode
}

export function MainLayout({ children }: IProps) {
  const [opened, { open: handleOpen, close: handleClose }] = useDisclosure(false)

  return (
    <main className={clsx('flex flex-row w-full relative')}>
      <Button onClick={handleOpen}>{'Otwórz menu'}</Button>
      <SidebarWrapper handleClose={handleClose} isOpen={opened} />
      <div className={clsx('h-full w-full relative min-h-screen')}>
        <div className={'container lg:max-w-[65vw] mx-auto px-4'}>{children}</div>
        <Footer />
      </div>
    </main>
  )
}
