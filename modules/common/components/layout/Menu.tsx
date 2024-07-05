'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Text } from '@mantine/core'
import clsx from 'clsx'
import { MAIN_MENU } from 'common/utils'

import classes from './layout.module.css'

interface IProps {
  isLinear: boolean
}

export default function Menu({ isLinear = true }: IProps) {
  const pathname = usePathname()

  const menuItemClassName = clsx('flex items-center px-4 uppercase h-[80px]', classes.menuItem)

  return (
    <div className={'flex gap-4 md:gap-8'}>
      {!isLinear && <Text>{'Menu główne'}</Text>}
      {MAIN_MENU.map(({ href, name, description }) => (
        <Link
          className={clsx(menuItemClassName, pathname === href ? classes.menuItemActive : '')}
          href={href}
          key={name}
          title={description}
        >
          {name}
        </Link>
      ))}
    </div>
  )
}
