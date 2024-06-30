'use client'

import { Text, Title } from '@mantine/core'
import clsx from 'clsx'

import classes from './form.module.css'

export default function LoginForm() {
  return (
    <section className={'w-full md:flex md:justify-end bg-white p-8'}>
      <header className={'w-full md:max-w-[90%] lg:max-w-[80%]'}>
        <Text className={clsx('uppercase font-semibold tracking-widest text-xl mb-4', classes.subtitle)}>
          {'Konto'}
        </Text>
        <Title className={'uppercase text-gray-800 text-4xl'}>{'Logowanie'}</Title>
      </header>
    </section>
  )
}
