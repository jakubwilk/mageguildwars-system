import { ReactNode } from 'react'
import { Button, Tooltip } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconMenu2 } from '@tabler/icons-react'
import clsx from 'clsx'

import { Footer, SidebarWrapper } from '../components'

import '@mantine/core/styles/Overlay.layer.css'
import classes from './Layout.module.css'

interface IProps {
  children: ReactNode
}

export function MainLayout({ children }: IProps) {
  const [opened, { open: handleOpen, close: handleClose }] = useDisclosure(false)

  return (
    <main className={clsx('flex flex-row w-full relative')}>
      <Tooltip color={'gray'} label={'Otwórz menu'} position={'right'}>
        <Button
          className={clsx(
            'fixed top-0 left-0 p-2 rounded-none w-[75px] h-[75px] z-[100]',
            classes.sidebarButton,
          )}
          classNames={{
            label: 'flex flex-col items-center justify-center',
          }}
          onClick={handleOpen}
        >
          <IconMenu2
            className={classes.sidebarButtonIcon}
            stroke={1.5}
            style={{ width: '32px', height: '32px' }}
          />
          <span className={clsx('block mt-1', classes.sidebarButtonText)}>{'Menu'}</span>
        </Button>
      </Tooltip>
      <SidebarWrapper handleClose={handleClose} isOpen={opened} />
      <div className={clsx('h-full w-full relative min-h-screen')}>
        <div className={'container lg:max-w-[65vw] mx-auto px-4'}>{children}</div>
        <Footer />
      </div>
    </main>
  )
}
