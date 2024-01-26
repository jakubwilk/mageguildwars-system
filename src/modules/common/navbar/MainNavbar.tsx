'use client'

import Link from 'next/link'
import { ActionIcon, Anchor, Group, Tooltip } from '@mantine/core'
import { navbarStyles } from '@modules/common'
import { useLocale } from '@modules/locale'
import { GuestMainMenu } from '@modules/user'
import { IconCategory, IconHome } from '@tabler/icons-react'
import { clsx } from 'clsx'

import DiscordButton from './DiscordButton'

interface IProps {
  handleOpenNav: () => void
}

const MainNavbar = ({ handleOpenNav }: IProps) => {
  const { translateByHook } = useLocale('global')

  return (
    <div
      className={clsx(
        'container mx-auto flex items-center justify-between h-[70px] px-4',
        navbarStyles.mainNavbar,
      )}
    >
      <Group>
        <DiscordButton />
      </Group>
      <Group>
        <Tooltip position={'bottom'} label={'Wróć na stronę główną'}>
          <Anchor
            href={'/'}
            component={Link}
            className={navbarStyles.mainNavbarAnchorItem}
          >
            <ActionIcon
              variant={'transparent'}
              color={'violet'}
              aria-label={'Wróć na stronę główną'}
              className={navbarStyles.mainNavbarItem}
            >
              <IconHome style={{ width: '80%', height: '80%' }} stroke={1.5} />
            </ActionIcon>
          </Anchor>
        </Tooltip>
        <GuestMainMenu />
        <Tooltip position={'bottom'} label={translateByHook('actions.openMenu')}>
          <ActionIcon
            variant={'transparent'}
            color={'violet'}
            aria-label={translateByHook('actions.openMenu')}
            className={navbarStyles.mainNavbarItem}
            onClick={handleOpenNav}
          >
            <IconCategory style={{ width: '80%', height: '80%' }} stroke={1.5} />
          </ActionIcon>
        </Tooltip>
      </Group>
    </div>
  )
}

export default MainNavbar
