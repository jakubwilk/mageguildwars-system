'use client'

import Link from 'next/link'
import { Text, Title } from '@mantine/core'
import { Navigation } from 'auth/components'
import clsx from 'clsx'
import { Button, PasswordInputField, TextInputField } from 'common/components'

import classes from './form.module.css'

export default function RegisterForm() {
  return (
    <section className={'relative w-full md:flex md:flex-col md:items-end bg-white'}>
      <div className={'w-full md:max-w-[90%] lg:max-w-[85%] p-8'}>
        <header className={'mb-8'}>
          <Text className={clsx('uppercase font-semibold tracking-widest text-xl mb-4', classes.subtitle)}>
            {'Konto'}
          </Text>
          <Title className={'uppercase text-gray-800 text-4xl'}>{'Rejestracja'}</Title>
        </header>
        <form className={'flex flex-col gap-4'}>
          <TextInputField
            description={'Adres email wykorzystywany jest podczas odzyskiwania hasła'}
            label={'Adres email'}
          />
          <PasswordInputField
            description={
              'Hasło powinno składać się z minimum 12 znaków oraz posiadać po jednym znaku specjalnym oraz cyfrze'
            }
            label={'Hasło'}
          />
          <PasswordInputField label={'Powtórz hasło'} />
          <div className={'w-full flex items-center justify-between flex-col lg:flex-row mt-4 gap-4'}>
            <Button className={'w-full lg:w-[auto]'}>{'Zarejestruj się'}</Button>
            <Text className={clsx('text-center lg:text-right', classes.registerRulesText)}>
              {'Rejestrując się na Mage Guild Wars akceptujesz'}
              <Link className={clsx('ml-1 underline duration-100', classes.recoveryPasswordLink)} href={'/rules'}>
                {'regulamin serwisu'}
              </Link>
            </Text>
          </div>
        </form>
      </div>
      <Navigation />
    </section>
  )
}
