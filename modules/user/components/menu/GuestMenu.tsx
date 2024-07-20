'use client'

import { Barlow } from 'next/font/google'
import Link from 'next/link'
import { IconDoorEnter, IconUserPlus } from '@tabler/icons-react'
import clsx from 'clsx'
import { RouteEnum } from 'common/models'

import classes from './menu.module.css'

const barlow = Barlow({
  subsets: ['latin-ext'],
  weight: ['500'],
  style: ['normal']
})

export default function GuestMenu() {
  return (
    <nav className={'flex flex-col'}>
      <Link
        className={clsx('flex items-center gap-2 p-4 uppercase', classes.menuUserLink, barlow.className)}
        href={RouteEnum.LOGIN}
        title={'Zaloguj się na konto'}
      >
        <IconDoorEnter />
        {'Logowanie'}
      </Link>
      <Link
        className={clsx('flex items-center gap-2 p-4 uppercase', classes.menuUserLink, barlow.className)}
        href={RouteEnum.REGISTER}
        title={'Utwórz nowe konto'}
      >
        <IconUserPlus />
        {'Rejestracja'}
      </Link>
    </nav>
  )
}
