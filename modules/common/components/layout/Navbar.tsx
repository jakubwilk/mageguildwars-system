'use client'

import { Drawer } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconMenu2 } from '@tabler/icons-react'
import clsx from 'clsx'
import { Button, Menu } from 'common/components'
import { UserMenu } from 'user/components'

import classes from './layout.module.css'

export default function Navbar() {
  const [opened, { open: handleOpenMenu, close: handleCloseMenu }] = useDisclosure(false)

  return (
    <>
      <Drawer onClose={handleCloseMenu} opened={opened}>
        <Menu isLinear={false} />
      </Drawer>
      <section className={'sticky top-0 px-4 md:px-8'}>
        <div className={'container mx-auto'}>
          <nav className={'relative bg-white h-[60px] flex justify-between gap-2 md:gap-4'}>
            <div className={'flex items-center'}>
              <Button className={clsx('h-[60px] w-[60px]', classes.navbarButton)} handleClick={handleOpenMenu}>
                <IconMenu2 />
              </Button>
              <Menu isLinear />
            </div>
            <UserMenu />
          </nav>
        </div>
      </section>
    </>
  )
}
