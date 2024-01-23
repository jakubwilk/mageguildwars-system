'use client'
import { useCallback } from 'react'
import Link from 'next/link'
import { ActionIcon, Anchor, Group, Tooltip } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { LoginModal } from '@modules/auth'
import { navbarStyles } from '@modules/common'
import {
  IconBrandDiscordFilled,
  IconCategory,
  IconHome,
  IconLogin,
  IconUserPlus,
} from '@tabler/icons-react'
import { clsx } from 'clsx'

interface IProps {
  handleOpenNav: () => void
}

const MainNavbar = ({ handleOpenNav }: IProps) => {
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
        <Tooltip position={'bottom'} label={'Wejdź na serwer Discord'}>
          <Anchor
            href={'https://discord.gg/NJQhwKq'}
            className={clsx(
              'min-w-[100px] flex items-center py-1 px-2 rounded',
              navbarStyles.mainNavbarItemDiscord,
            )}
          >
            <IconBrandDiscordFilled width={20} stroke={1.5} />
            <span className={clsx('pl-2', navbarStyles.mainNavbarItemDiscordText)}>
              {'Discord'}
            </span>
          </Anchor>
        </Tooltip>
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
        <Tooltip position={'bottom'} label={'Zarejestruj się'}>
          <Anchor
            href={'/auth'}
            component={Link}
            className={navbarStyles.mainNavbarAnchorItem}
          >
            <ActionIcon
              variant={'transparent'}
              color={'violet'}
              aria-label={'Otwórz konto'}
              className={navbarStyles.mainNavbarItem}
            >
              <IconUserPlus style={{ width: '80%', height: '80%' }} stroke={1.5} />
            </ActionIcon>
          </Anchor>
        </Tooltip>
        <Tooltip position={'bottom'} label={'Zaloguj się na konto'}>
          <ActionIcon
            variant={'transparent'}
            color={'violet'}
            aria-label={'Zaloguj się'}
            className={navbarStyles.mainNavbarItem}
            onClick={handleOpen}
          >
            <IconLogin style={{ width: '80%', height: '80%' }} stroke={1.5} />
          </ActionIcon>
        </Tooltip>
        {opened && <LoginModal handleCloseModal={handleCloseLoginModal} />}
        <Tooltip position={'bottom'} label={'Otwórz panel boczny'}>
          <ActionIcon
            variant={'transparent'}
            color={'violet'}
            aria-label={'Otwórz panel boczny'}
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
