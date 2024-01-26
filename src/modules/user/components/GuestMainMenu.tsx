'use client'

import { Fragment, useCallback } from 'react'
import Link from 'next/link'
import { ActionIcon, Anchor, Tooltip } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { LoginModal } from '@modules/auth'
import { navbarStyles } from '@modules/common'
import { useLocale } from '@modules/locale'
import { IconLogin, IconUserPlus } from '@tabler/icons-react'

const GuestMainMenu = () => {
  const { translateByHook } = useLocale('auth')
  const [opened, { open: handleOpenLoginModal, close: handleCloseLoginModal }] =
    useDisclosure(false)

  const handleOpen = useCallback(() => handleOpenLoginModal(), [handleOpenLoginModal])

  return (
    <Fragment>
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
    </Fragment>
  )
}

export default GuestMainMenu
