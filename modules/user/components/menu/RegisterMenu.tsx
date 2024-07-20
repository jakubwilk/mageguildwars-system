'use client'

import { Barlow } from 'next/font/google'
import Link from 'next/link'
import { Avatar, Divider, Text } from '@mantine/core'
import { IconDoorExit, IconPlus } from '@tabler/icons-react'
import clsx from 'clsx'
import { RouteEnum } from 'common/models'
import { USER_MAIN_MENU } from 'user/utils'

import classes from './menu.module.css'

const barlow = Barlow({
  subsets: ['latin-ext'],
  weight: ['400', '500'],
  style: ['normal']
})

export default function RegisterMenu() {
  return (
    <nav className={'flex flex-col'}>
      {USER_MAIN_MENU.map(({ id, label, title, href, IconComponent, isDisabled, isGameMaster, isModeratorOrAdmin }) => (
        <Link
          className={clsx('flex items-center gap-2 p-4 uppercase', classes.menuUserLink, barlow.className)}
          href={href}
          key={id}
          title={title}
        >
          {IconComponent && <IconComponent />}
          {label}
        </Link>
      ))}
      <Divider my={1} />
      <Link
        className={clsx('flex items-center gap-2 p-4 uppercase', classes.menuUserLink, barlow.className)}
        href={RouteEnum.LOGIN}
        title={'Zaloguj się na konto'}
      >
        <Avatar src={'avatar.png'} />
        <Text className={'flex flex-col'}>
          {'Renji'}
          <span className={clsx('text-xs', classes.menuUserLinkSubText, classes.menuUserLinkSubTextFairyTail)}>
            {'Fairy Tail'}
          </span>
        </Text>
      </Link>
      <Link
        className={clsx('flex items-center gap-2 p-4 uppercase', classes.menuUserLink, barlow.className)}
        href={RouteEnum.LOGIN}
        title={'Zaloguj się na konto'}
      >
        <Avatar src={'avatar.png'} />
        <Text className={'flex flex-col'}>
          {'Vincent'}
          <span className={clsx('text-xs', classes.menuUserLinkSubText, classes.menuUserLinkSubTextGrimoireHeart)}>
            {'Grimoire Heart'}
          </span>
        </Text>
      </Link>
      <Link
        className={clsx('flex items-center gap-2 p-4 uppercase', classes.menuUserLink, barlow.className)}
        href={RouteEnum.LOGIN}
        title={'Zaloguj się na konto'}
      >
        <Avatar src={'avatar.png'} />
        <Text className={'flex flex-col'}>
          {'Ryu'}
          <span className={clsx('text-xs', classes.menuUserLinkSubText, classes.menuUserLinkSubTextSabertooth)}>
            {'Sabertooth'}
          </span>
        </Text>
      </Link>
      <Link
        className={clsx('flex items-center gap-2 p-4 uppercase', classes.menuUserLink, barlow.className)}
        href={RouteEnum.ADD_CHARACTER}
        title={'Utwórz nową postać'}
      >
        <IconPlus />
        {'Dodaj nową postać'}
      </Link>
      <Divider my={1} />
      <Link
        className={clsx('flex items-center gap-2 p-4 uppercase', classes.menuUserLinkLogout, barlow.className)}
        href={RouteEnum.HOME}
        onClick={() => console.log('CLICK:LOGOUT')}
        title={'Zaloguj się na konto'}
      >
        <IconDoorExit />
        {'Wyloguj się'}
      </Link>
    </nav>
  )
}
