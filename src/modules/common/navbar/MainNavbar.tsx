'use client'
import { useCallback } from 'react'
import Link from 'next/link'
import { ActionIcon, Anchor, Group, Tooltip } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { LoginModal } from '@modules/auth'
import { navbarStyles } from '@modules/common'
import { useLocale } from '@modules/locale'
import { IconCategory, IconHome, IconLogin, IconUserPlus } from '@tabler/icons-react'
import { clsx } from 'clsx'

import DiscordButton from './DiscordButton'

interface IProps {
  handleOpenNav: () => void
}

const MainNavbar = ({ handleOpenNav }: IProps) => {
  const { translateByHook } = useLocale('auth')
  const { translateByHook: translateGlobalByHook } = useLocale('global')
  const [opened, { open: handleOpenLoginModal, close: handleCloseLoginModal }] =
    useDisclosure(false)

  const handleOpen = useCallback(() => handleOpenLoginModal(), [handleOpenLoginModal])

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
        <Tooltip position={'bottom'} label={translateByHook('actions.registerAction')}>
          <Anchor
            href={'/auth'}
            component={Link}
            className={navbarStyles.mainNavbarAnchorItem}
          >
            <ActionIcon
              variant={'transparent'}
              color={'violet'}
              aria-label={translateByHook('actions.registerAction')}
              className={navbarStyles.mainNavbarItem}
            >
              <IconUserPlus style={{ width: '80%', height: '80%' }} stroke={1.5} />
            </ActionIcon>
          </Anchor>
        </Tooltip>
        <Tooltip position={'bottom'} label={translateByHook('actions.loginAction')}>
          <ActionIcon
            variant={'transparent'}
            color={'violet'}
            aria-label={translateByHook('actions.loginAction')}
            className={navbarStyles.mainNavbarItem}
            onClick={handleOpen}
          >
            <IconLogin style={{ width: '80%', height: '80%' }} stroke={1.5} />
          </ActionIcon>
        </Tooltip>
        {opened && <LoginModal handleCloseModal={handleCloseLoginModal} />}
        <Tooltip position={'bottom'} label={translateGlobalByHook('actions.openMenu')}>
          <ActionIcon
            variant={'transparent'}
            color={'violet'}
            aria-label={translateGlobalByHook('actions.openMenu')}
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
