'use client'

import { useCallback } from 'react'
import { Barlow } from 'next/font/google'
import { Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconMenu2, IconUser } from '@tabler/icons-react'
import clsx from 'clsx'
import { Button, Menu } from 'common/components'
import { useOutsideDivClick } from 'common/hooks'

import classes from './layout.module.css'

const barlow = Barlow({
  subsets: ['latin-ext'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic']
})

export default function Navbar() {
  const [opened, handle] = useDisclosure()

  const handleOpenMenuClick = useCallback(() => handle.open(), [handle])

  const handleCloseMenuClick = useCallback(() => handle.close(), [handle])

  const { ref } = useOutsideDivClick(handleCloseMenuClick)

  return (
    <section className={'sticky top-0 px-4 md:px-8'}>
      <div className={'container mx-auto'}>
        <nav className={'relative bg-white h-[60px] flex justify-between gap-2 md:gap-4'}>
          <div className={'flex items-center'}>
            <Button className={clsx('h-[60px] w-[60px]', classes.navbarButton)}>
              <IconMenu2 />
            </Button>
            <Menu isLinear />
          </div>
          <Button
            className={clsx(
              'flex items-center',
              classes.navbarAccountButton,
              opened ? classes.navbarAccountButtonActive : ''
            )}
            handleClick={handleOpenMenuClick}
          >
            <IconUser />
            <Text className={clsx('ml-2', classes.navbarButtonText, barlow.className)}>{'Konto'}</Text>
          </Button>
          {opened && (
            <div className={'bg-white z-10 absolute top-[60px] right-0 mt-4 min-w-[300px] p-4'} ref={ref}>
              {'test'}
            </div>
          )}
        </nav>
      </div>
    </section>
  )
}
