'use client'

import { Text } from '@mantine/core'
import { IconMenu2, IconUser } from '@tabler/icons-react'
import clsx from 'clsx'
import { Button } from 'common/components'

import classes from './layout.module.css'

export default function Navbar() {
  return (
    <section className={'sticky top-0 px-4 md:px-8'}>
      <div className={'container mx-auto'}>
        <nav className={'bg-white h-[80px] flex justify-between gap-4 md:gap-8'}>
          <Button className={clsx('duration-100', classes.navbarButton)}>
            <IconMenu2 />
          </Button>
          <Button className={clsx('flex items-center duration-100', classes.navbarButton)}>
            <IconUser />
            <Text className={clsx('ml-2', classes.navbarButtonText)}>{'Konto'}</Text>
          </Button>
        </nav>
      </div>
    </section>
  )
}
