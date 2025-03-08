'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { Button, Text } from '@mantine/core'
import { IconHome } from '@tabler/icons-react'
import { clsx } from 'common/utils'

import { MenuWrapper } from './menu'

import classes from './layout.module.css'

interface IProps {
  userNavigation: ReactNode
}

export default function Topbar({ userNavigation }: IProps) {
  return (
    <header className={'fixed bottom-0 left-0 z-50 w-full lg:sticky lg:top-0'}>
      <div className={'bg-zinc-900 p-4 flex items-center justify-around gap-4 lg:justify-between'}>
        <MenuWrapper />
        <Button
          component={Link}
          href={'/'}
          radius={0}
          className={clsx('block h-auto min-h-auto p-2 lg:hidden', classes.homeButton)}
          classNames={{ label: 'flex flex-col gap-2' }}
        >
          <IconHome size={36} stroke={1.5} />
          <Text className={'hidden uppercase text-xs md:block'}>{'Strona Główna'}</Text>
        </Button>
        {userNavigation}
      </div>
    </header>
  )
}
