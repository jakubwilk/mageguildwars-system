'use client'

import { useCallback } from 'react'
import { Barlow } from 'next/font/google'
import { Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconUser } from '@tabler/icons-react'
import clsx from 'clsx'
import { Button } from 'common/components'
import { useOutsideDivClick } from 'common/hooks'

import classes from './menu.module.css'

const barlow = Barlow({
  subsets: ['latin-ext'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic']
})

export default function UserMenu() {
  const [opened, handle] = useDisclosure()

  const handleOpenMenuClick = useCallback(() => handle.open(), [handle])

  const handleCloseMenuClick = useCallback(() => handle.close(), [handle])

  const { ref } = useOutsideDivClick(handleCloseMenuClick)

  return (
    <>
      <Button
        className={clsx('flex items-center', classes.menuAccountButton, opened ? classes.menuAccountButtonActive : '')}
        handleClick={handleOpenMenuClick}
      >
        <IconUser />
        <Text className={clsx('ml-2', classes.menuButtonText, barlow.className)}>{'Konto'}</Text>
      </Button>
      {opened && (
        <div className={'bg-white z-10 absolute top-[60px] right-0 mt-4 min-w-[300px] p-4'} ref={ref}>
          {'test'}
        </div>
      )}
    </>
  )
}
