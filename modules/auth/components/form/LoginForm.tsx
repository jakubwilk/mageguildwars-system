'use client'

import Link from 'next/link'
import { Text, Title } from '@mantine/core'
import clsx from 'clsx'
import { Button, CheckboxField, PasswordInputField, TextInputField } from 'common/components'

import classes from './form.module.css'

export default function LoginForm() {
  return (
    <section className={'w-full md:flex md:flex-col md:items-end bg-white p-8'}>
      <div className={'w-full md:max-w-[90%] lg:max-w-[80%]'}>
        <header className={'mb-8'}>
          <Text className={clsx('uppercase font-semibold tracking-widest text-xl mb-4', classes.subtitle)}>
            {'Konto'}
          </Text>
          <Title className={'uppercase text-gray-800 text-4xl'}>{'Logowanie'}</Title>
        </header>
        <form className={'flex flex-col gap-4'}>
          <TextInputField description={'Wprowadź adres email użyty podczas rejestracji'} label={'Adres email'} />
          <PasswordInputField label={'Hasło użytkownika'} />
          <CheckboxField label={'Zapamiętaj przy następnych logowaniach'} />
          <div className={'flex items-center justify-between mt-4 gap-4'}>
            <Button className={'w-full md:w-[auto]'}>{'Zaloguj się'}</Button>
            <Link href={'/reset-password'}>{'Reset hasła'}</Link>
          </div>
        </form>
      </div>
    </section>
  )
}
