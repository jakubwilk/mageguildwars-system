'use client'

import { useCallback } from 'react'
import Link from 'next/link'
import { Button, Tooltip } from '@mantine/core'
import { IconAward, IconHome, IconUsers } from '@tabler/icons-react'
import { HeaderMenuIconEnum } from 'common/models'
import { clsx } from 'common/utils'
import { HEADER_MENU } from 'common/utils/menu.utils'

import classes from './menu.module.css'

export default function DesktopMenu() {
  const renderMenuIcon = useCallback((name: HeaderMenuIconEnum) => {
    switch (name) {
      case HeaderMenuIconEnum.HOME:
      default:
        return <IconHome size={18} stroke={2} />
      case HeaderMenuIconEnum.AWARDS:
        return <IconAward size={18} stroke={2} />
      case HeaderMenuIconEnum.USERS:
        return <IconUsers size={18} stroke={2} />
    }
  }, [])

  return (
    <nav className={'flex items-center gap-4'}>
      {HEADER_MENU.map(({ link, title, icon }) => (
        <Tooltip key={link} label={title} color={'dark'}>
          <Button
            component={Link}
            href={link}
            className={clsx(
              'h-10 w-10 flex items-center justify-center p-0',
              classes.headerMenuItem,
            )}
          >
            {renderMenuIcon(icon)}
          </Button>
        </Tooltip>
      ))}
    </nav>
  )
}
