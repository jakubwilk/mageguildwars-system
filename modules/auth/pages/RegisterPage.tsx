'use client'

import Link from 'next/link'
import { Text, Title } from '@mantine/core'
import { RegisterForm } from 'auth/components'
import clsx from 'clsx'

import classes from './pages.module.css'

export default function RegisterPage() {
  return (
    <main className={'w-full flex flex-col items-center md:grid md:grid-cols-2 py-12'}>
      <RegisterForm />
      <section className={'w-full h-full md:flex md:justify-start bg-zinc-800 p-8'}>
        <header className={'w-full md:max-w-[90%] lg:max-w-[80%]'}>
          <Text className={'uppercase font-semibold tracking-widest text-xl text-white text-opacity-50 mb-4'}>
            {'Konto'}
          </Text>
          <Title className={'uppercase text-gray-200 text-4xl'}>{'Logowanie'}</Title>
          <Text className={'mt-8'}>
            {
              'Wróć do świata magii, by kontynuować przygodę wspinając się powoli na sam szczyt. Twoi towarzysze i gildia czekają na Ciebie.'
            }
          </Text>
          <Link className={clsx('inline-block mt-8 uppercase px-8 py-4', classes.authButton)} href={'/login'}>
            {'Zaloguj się'}
          </Link>
        </header>
      </section>
    </main>
  )
}
