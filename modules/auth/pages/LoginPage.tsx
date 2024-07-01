'use client'

import { Text, Title } from '@mantine/core'
import { LoginForm } from 'auth/components'

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
        </header>
      </section>
    </main>
  )
}
