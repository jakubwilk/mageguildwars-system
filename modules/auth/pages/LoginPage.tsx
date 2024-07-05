'use client'

import Link from 'next/link'
import { Text, Title } from '@mantine/core'
import { LoginForm } from 'auth/components'
import clsx from 'clsx'

import classes from './pages.module.css'

export default function LoginPage() {
  return (
    <main className={'w-full flex flex-col items-center md:grid md:grid-cols-2 py-12'}>
      <LoginForm />
      <section className={'w-full h-full md:flex md:justify-start bg-zinc-800 p-8'}>
        <header className={'w-full md:max-w-[90%] lg:max-w-[80%]'}>
          <Text className={'uppercase font-semibold tracking-widest text-xl text-white text-opacity-50 mb-4'}>
            {'Konto'}
          </Text>
          <Title className={'uppercase text-gray-200 text-4xl'}>{'Rejestracja'}</Title>
          <Text className={'mt-8'}>
            {'Dołącz już teraz do świata pełnego magii i niebezpieczeństwa. Wzmocnij siły jednej z kilku oficjalnych'}
            {'gildii lub podróżuj jako Samotnik, by któregoś dnia wspiąć się na szczyt z własną organizacją.'}
          </Text>
          <Link className={clsx('inline-block mt-8 uppercase px-8 py-4', classes.authButton)} href={'/register'}>
            {'Utwórz konto'}
          </Link>
        </header>
      </section>
    </main>
  )
}
