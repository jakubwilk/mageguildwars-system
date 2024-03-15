import { ReactNode, useMemo } from 'react'
import { Button, Tooltip } from '@mantine/core'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
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
  const hasTabletResolution = useMediaQuery('(min-width: 62em)')

  const buttonComponentClasses = useMemo(() => {
    if (hasTabletResolution) {
      return 'fixed top-0 left-0 p-2 rounded-none w-[75px] h-[75px] z-[100]'
    }

    return 'flex justify-center items-center w-full h-[75px]'
  }, [hasTabletResolution])

  const ButtonComponent = useMemo(
    () => (
      <Button
        className={clsx(buttonComponentClasses, classes.sidebarButton)}
        classNames={{
          label: clsx(
            'flex items-center justify-center',
            hasTabletResolution ? 'flex-col' : 'flex-row',
          ),
        }}
        onClick={handleOpen}
      >
        <IconMenu2
          className={classes.sidebarButtonIcon}
          stroke={1.5}
          style={{ width: '32px', height: '32px' }}
        />
        <span
          className={clsx(
            'block',
            hasTabletResolution ? 'mt-1' : `ml-1 ${classes.sidebarMobileButtonText}`,
            classes.sidebarButtonText,
          )}
        >
          {'Menu'}
        </span>
      </Button>
    ),
    [handleOpen, buttonComponentClasses, hasTabletResolution],
  )

  return (
    <main
      className={clsx(
        'flex w-full relative',
        hasTabletResolution ? 'flex-row' : 'flex-col',
      )}
    >
      {hasTabletResolution && (
        <Tooltip color={'gray'} label={'Otwórz menu'} position={'right'}>
          {ButtonComponent}
        </Tooltip>
      )}
      <SidebarWrapper handleClose={handleClose} isOpen={opened} />
      <div
        className={clsx(
          'w-full relative',
          hasTabletResolution
            ? 'h-full min-h-screen'
            : 'min-h-[calc(100vh-75px)] h-[calc(100%-75px)]',
        )}
      >
        <div className={'container lg:max-w-[65vw] mx-auto px-4'}>{children}</div>
        <Footer />
      </div>
      {!hasTabletResolution && ButtonComponent}
    </main>
  )
}
