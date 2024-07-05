'use client'

import Link from 'next/link'
import { Text, Title } from '@mantine/core'
import { IconLock } from '@tabler/icons-react'
import { Navigation } from 'auth/components'
import clsx from 'clsx'
import { Button, CheckboxField, PasswordInputField, TextInputField } from 'common/components'

import classes from './form.module.css'

export default function LoginForm() {
  return (
    <section className={'relative w-full md:flex md:flex-col md:items-end bg-white'}>
      <div className={'w-full md:max-w-[90%] lg:max-w-[85%] p-8'}>
        <header className={'mb-8'}>
          <Text className={clsx('uppercase font-semibold tracking-widest text-xl mb-4', classes.subtitle)}>
            {'Konto'}
          </Text>
          <Title className={'uppercase text-gray-800 text-4xl'}>{'Logowanie'}</Title>
        </header>
        <form className={'flex flex-col gap-4'}>
          <TextInputField description={'Wprowadź adres email użyty podczas rejestracji'} label={'Adres email'} />
          <PasswordInputField label={'Hasło'} />
          <CheckboxField label={'Zapamiętaj przy następnych logowaniach'} />
          <div className={'flex items-center justify-between flex-col lg:flex-row mt-4 gap-4'}>
            <Button className={'w-full lg:w-[auto]'}>{'Zaloguj się'}</Button>
            <div className={'flex items-center gap-2'}>
              <div className={'flex flex-col'}>
                <Text className={classes.recoveryPasswordText}>{'Zapomniałeś hasła?'}</Text>
                <Link className={clsx('underline', classes.recoveryPasswordLink)} href={'/reset-password'}>
                  {'Odzyskaj hasło'}
                </Link>
              </div>
              <IconLock className={'mr-2'} size={48} />
            </div>
          </div>
        </form>
      </div>
      <Navigation />
    </section>
  )
}
