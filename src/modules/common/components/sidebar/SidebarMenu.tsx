import { useMemo } from 'react'
import { Button, Tooltip } from '@mantine/core'
import { IconArrowNarrowLeft, IconArrowNarrowRight } from '@tabler/icons-react'
import clsx from 'clsx'
import { isNil } from 'lodash'

import { GuestMenu, UserMenu } from '../../../user/components'
import { useUserContext } from '../../../user/hooks'
import { Logo } from '../logo/Logo.tsx'
import { Discord } from '../socials/Discord.tsx'

import classes from './Sidebar.module.css'

interface IProps {
  isExpanded: boolean
  handleExpandSidebar: () => void
  setIsSidebarExpanded: (val: boolean) => void
}

export function SidebarMenu({
  isExpanded,
  handleExpandSidebar,
  setIsSidebarExpanded,
}: IProps) {
  const { user } = useUserContext()

  const isUser = useMemo(() => !isNil(user), [user])

  const sidebarButtonProps = useMemo(
    () => ({
      color: 'gray',
      onClick: handleExpandSidebar,
      variant: 'subtle',
    }),
    [handleExpandSidebar],
  )

  const ShortSidebarButton = useMemo(
    () => (
      <Tooltip color={'gray'} label={'Rozwiń menu boczne'} position={'right'}>
        <Button className={'p-0 h-[35px] w-[35px]'} {...sidebarButtonProps}>
          <IconArrowNarrowRight />
        </Button>
      </Tooltip>
    ),
    [sidebarButtonProps],
  )

  const WideSidebarButton = useMemo(
    () => (
      <Button
        className={clsx('p-0 h-[35px] w-full', classes.hideSidebarButton)}
        {...sidebarButtonProps}
        leftSection={<IconArrowNarrowLeft />}
      >
        {'Zwiń menu boczne'}
      </Button>
    ),
    [sidebarButtonProps],
  )

  return (
    <nav className={'h-full flex flex-col justify-between'}>
      <Logo isExpanded={isExpanded} />
      <div className={'h-full flex items-center justify-center'}>{'test'}</div>
      <div
        className={clsx(
          'flex flex-col items-center gap-4',
          isExpanded ? classes.sidebarMenu : '',
        )}
      >
        {!isUser ? (
          <UserMenu isExpanded={isExpanded} setIsSidebarExpanded={setIsSidebarExpanded} />
        ) : (
          <GuestMenu
            isExpanded={isExpanded}
            setIsSidebarExpanded={setIsSidebarExpanded}
          />
        )}
        <Discord isOnlyIcon={!isExpanded} />
        {isExpanded ? WideSidebarButton : ShortSidebarButton}
      </div>
    </nav>
  )
}
