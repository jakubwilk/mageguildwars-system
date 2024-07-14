'use client'

import { Barlow } from 'next/font/google'
import Link from 'next/link'
import clsx from 'clsx'
import { RouteEnum } from 'common/models'

import classes from './menu.module.css'

const barlow = Barlow({
  subsets: ['latin-ext'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic']
})

export default function GuestMenu() {
  return (
    <>
      <Link
        className={clsx('px-4 py-2 uppercase', classes.menuUserLink)}
        href={RouteEnum.LOGIN}
        title={'Zaloguj się na konto'}
      >
        {'Logowanie'}
      </Link>
      <Link
        className={clsx('px-4 py-2 uppercase', classes.menuUserLink, barlow.className)}
        href={RouteEnum.REGISTER}
        title={'Utwórz nowe konto'}
      >
        {'Rejestracja'}
      </Link>
    </>
  )
}
