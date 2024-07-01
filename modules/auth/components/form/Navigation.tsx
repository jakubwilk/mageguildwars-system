'use client'

import Link from 'next/link'
import { Tooltip } from '@mantine/core'
import { IconChevronLeft } from '@tabler/icons-react'
import clsx from 'clsx'

import classes from './form.module.css'

export default function Navigation() {
  return (
    <div className={'relative w-full flex justify-start'}>
      <Tooltip color={'dark'} label={'Wróć do strony głównej'} position={'right'}>
        <Link
          className={clsx('h-[50px] w-[50px] flex items-center justify-center duration-100', classes.navigationLink)}
          href={'/'}
        >
          <IconChevronLeft />
        </Link>
      </Tooltip>
    </div>
  )
}
