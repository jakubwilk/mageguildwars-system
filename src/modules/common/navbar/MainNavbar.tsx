'use client'
import Link from 'next/link'
import { ActionIcon, Anchor, Group, Tooltip, Divider } from '@mantine/core'
import { navbarStyles } from '@modules/common'
import {
  IconBrandDiscordFilled,
  IconCategory,
  IconDoorEnter,
  IconHome,
} from '@tabler/icons-react'
import { clsx } from 'clsx'

interface IProps {
  handleOpenNav: () => void
}

const MainNavbar = ({ handleOpenNav }: IProps) => {
  return (
    <div
      className={clsx(
        'flex items-center justify-between h-[50px] px-4',
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
        <Divider orientation='vertical' color={'dark'} />
        <Tooltip position={'bottom'} label={'Dołącz do rozgrywki'}>
          <Anchor
            href={'/auth'}
            component={Link}
            className={navbarStyles.mainNavbarAnchorItem}
          >
            <ActionIcon
              variant={'transparent'}
              color={'violet'}
              aria-label={'Dołącz do rozgrywki'}
              className={navbarStyles.mainNavbarItem}
            >
              <IconDoorEnter style={{ width: '80%', height: '80%' }} stroke={1.5} />
            </ActionIcon>
          </Anchor>
        </Tooltip>
        <Divider orientation='vertical' color={'dark'} />
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
