'use client'

import { Text } from '@mantine/core'
import { IconMenu2, IconUser } from '@tabler/icons-react'
import clsx from 'clsx'
import { Button, Menu } from 'common/components'

import classes from './layout.module.css'

export default function Navbar() {
  return (
    <section className={'sticky top-0 px-4 md:px-8'}>
      <div className={'container mx-auto'}>
        <nav className={'bg-white h-[80px] flex justify-between gap-4 md:gap-8'}>
          <div className={'flex items-center'}>
            <Button className={classes.navbarButton}>
              <IconMenu2 />
            </Button>
            <Menu isLinear />
          </div>
          <Button className={clsx('flex items-center', classes.navbarButton)}>
            <IconUser />
            <Text className={clsx('ml-2', classes.navbarButtonText)}>{'Konto'}</Text>
          </Button>
        </nav>
      </div>
    </section>
  )
}
