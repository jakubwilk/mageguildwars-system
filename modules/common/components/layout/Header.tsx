'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Tooltip } from '@mantine/core'
import clsx from 'clsx'

import classes from './layout.module.css'

export default function Header() {
  return (
    <section className={clsx('w-full h-full px-4 md:px-8', classes.headerRoot)}>
      <div className={'container mx-auto'}>
        <header className={'min-h-full py-12 md:py-0 md:min-h-[calc(100vh-80px)] flex items-center justify-center'}>
          <Tooltip color={'dark'} label={'Strona główna Mage Guild Wars'} position={'bottom'}>
            <Link className={'inline-block'} href={'/'}>
              <Image
                alt={'Napis Mage Guild Wars - Fairy Tail Play by forum'}
                height={50}
                src={'/logo.png'}
                width={320}
              />
            </Link>
          </Tooltip>
        </header>
      </div>
    </section>
  )
}
