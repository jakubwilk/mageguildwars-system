'use client'

import { Barlow } from 'next/font/google'
import { Text } from '@mantine/core'
import { IconMenu2, IconUser } from '@tabler/icons-react'
import clsx from 'clsx'
import { Button, Menu } from 'common/components'

import classes from './layout.module.css'

const barlow = Barlow({
  subsets: ['latin-ext'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic']
})

export default function Navbar() {
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
          <Button className={clsx('flex items-center', classes.navbarAccountButton)}>
            <IconUser />
            <Text className={clsx('ml-2', classes.navbarButtonText, barlow.className)}>{'Konto'}</Text>
          </Button>
        </nav>
      </div>
    </section>
  )
}
