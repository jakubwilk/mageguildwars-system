import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Button, Divider, Tooltip } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconHome, IconMenu2 } from '@tabler/icons-react'
import clsx from 'clsx'
import { isNil } from 'lodash'

import { GuestMenu, UserMenu } from '../../../user/components'
import { useUserContext } from '../../../user/hooks'
import { MenuSidebarWrapper } from '../menu/MenuSidebarWrapper.tsx'

import classes from './Header.module.css'

export function HeaderMenu() {
  const [opened, { open, close }] = useDisclosure(false)
  const { user } = useUserContext()

  const isUser = useMemo(() => !isNil(user), [user])

  return (
    <>
      <MenuSidebarWrapper handleClose={close} isOpen={opened} />
      <nav className={'flex items-center'}>
        <Tooltip color={'gray'} label={'Wróć na stronę główną'}>
          <Link className={clsx('flex items-center', classes.link)} to={'/'}>
            <IconHome stroke={1.5} style={{ height: '24px', width: '24px' }} />
          </Link>
        </Tooltip>
        <Divider
          className={classes.divider}
          mx={'sm'}
          my={'xs'}
          orientation={'vertical'}
        />
        {!isUser ? <UserMenu /> : <GuestMenu isExpanded />}
        <Divider
          className={classes.divider}
          mx={'sm'}
          my={'xs'}
          orientation={'vertical'}
        />
        <Tooltip color={'gray'} label={'Otwórz panel boczny'}>
          <Button
            className={clsx('px-0', classes.button)}
            onClick={open}
            variant={'transparent'}
          >
            <IconMenu2 stroke={1.5} style={{ height: '28px', width: '28px' }} />
          </Button>
        </Tooltip>
      </nav>
    </>
  )
}
