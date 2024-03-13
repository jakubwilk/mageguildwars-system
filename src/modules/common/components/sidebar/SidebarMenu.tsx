import { useMemo } from 'react'
import { Button, Divider } from '@mantine/core'
import { IconArrowNarrowLeft } from '@tabler/icons-react'
import clsx from 'clsx'
import { isNil } from 'lodash'

import { GuestMenu, UserMenu } from '../../../user/components'
import { useUserContext } from '../../../user/hooks'
import { Logo } from '../logo/Logo.tsx'
import { Discord } from '../socials/Discord.tsx'

import classes from './Sidebar.module.css'

interface IProps {
  handleClose: () => void
}

export function SidebarMenu({ handleClose }: IProps) {
  const { user } = useUserContext()

  const isUser = useMemo(() => !isNil(user), [user])

  return (
    <nav className={'h-full flex flex-col justify-between'}>
      <Logo isExpanded onClick={handleClose} />
      <div className={'h-full flex items-center justify-center'}>{'test'}</div>
      <div className={'flex flex-col items-center gap-4'}>
        {!isUser ? <UserMenu handleClose={handleClose} /> : <GuestMenu />}
        <Divider className={'h-[1px] w-full'} />
        <Discord />
        <Button
          className={clsx('p-0 h-[35px] w-full', classes.hideSidebarButton)}
          color={'gray'}
          leftSection={<IconArrowNarrowLeft />}
          onClick={handleClose}
          variant={'subtle'}
        >
          {'Zwiń menu boczne'}
        </Button>
      </div>
    </nav>
  )
}
