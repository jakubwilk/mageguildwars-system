import Link from 'next/link'
import { Button, Text } from '@mantine/core'
import { IconHome } from '@tabler/icons-react'
import { clsx } from 'common/utils'

import classes from './layout.module.css'

export default function Topbar() {
  return (
    <header className={'fixed bottom-0 left-0 z-50 w-full lg:top-0'}>
      <div className={'bg-zinc-900 p-4 flex items-center justify-around gap-4 lg:justify-between'}>
        <div>{'menu'}</div>
        <Button
          component={Link}
          href={'/'}
          radius={0}
          className={clsx('block h-auto min-h-auto p-2 lg:hidden', classes.homeButton)}
          classNames={{ label: 'flex flex-col gap-2' }}
        >
          <IconHome size={36} stroke={1.5} />
          <Text className={'uppercase text-xs'}>{'Strona Główna'}</Text>
        </Button>
        <div>{'user'}</div>
      </div>
    </header>
  )
}
