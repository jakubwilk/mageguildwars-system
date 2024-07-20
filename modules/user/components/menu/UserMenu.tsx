'use client'

import { Barlow } from 'next/font/google'
import { Drawer, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconUser } from '@tabler/icons-react'
import clsx from 'clsx'
import { Button } from 'common/components'
import { RegisterMenu } from 'user/components'

import GuestMenu from './GuestMenu'

import classes from './menu.module.css'

const barlow = Barlow({
  subsets: ['latin-ext'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic']
})

export default function UserMenu() {
  const isUser = true
  const [opened, { open: handleOpenMenu, close: handleCloseMenu }] = useDisclosure(false)

  return (
    <>
      <Drawer
        classNames={{ title: clsx('uppercase text-sm', classes.menuDrawerTitle) }}
        onClose={handleCloseMenu}
        opened={opened}
        position={'right'}
        title={'Menu użytkownika'}
      >
        {isUser ? <RegisterMenu /> : <GuestMenu />}
      </Drawer>
      <Button
        className={clsx('flex items-center', classes.menuAccountButton, opened ? classes.menuAccountButtonActive : '')}
        handleClick={handleOpenMenu}
      >
        <IconUser />
        <Text className={clsx('ml-2', classes.menuButtonText, barlow.className)}>{'Konto'}</Text>
      </Button>
    </>
  )
}
