'use client'

import { useCallback, useMemo } from 'react'
import { FormProvider } from 'react-hook-form'
import Link from 'next/link'
import { yupResolver } from '@hookform/resolvers/yup'
import { Text, Title } from '@mantine/core'
import { Navigation } from 'auth/components'
import { IRegisterFormValues } from 'auth/models'
import clsx from 'clsx'
import { Button, PasswordInputField, TextInputField } from 'common/components'
import { useForm } from 'common/hooks'
import { object, string } from 'yup'

import classes from './form.module.css'

export default function RegisterForm() {
  const form = useForm<IRegisterFormValues>({
    defaultValues: {
      email: '',
      password: '',
      repeatPassword: ''
    },
    resolver: yupResolver(
      object({
        email: string().email('Podany email jest niepoprawny').required('Pole email jest wymagane'),
        password: string().required('Pole hasło jest wymagane'),
        repeatPassword: string()
          .test('isPasswordTheSame', 'Podane hasła nie są identyczne', (value, context) => {
            const { password } = context.parent
            return value === password
          })
          .required('Pole powtórz hasło jest wymagane')
      })
    )
  })

  const formValues = useMemo(() => form, [form])

  const handleFormSubmit = useCallback((values: IRegisterFormValues) => {
    console.log('values', values)
  }, [])

  return (
    <FormProvider {...formValues}>
      <section className={'relative w-full md:flex md:flex-col md:items-end bg-white'}>
        <div className={'w-full md:max-w-[90%] lg:max-w-[85%] p-8'}>
          <header className={'mb-8'}>
            <Text className={clsx('uppercase font-semibold tracking-widest text-xl mb-4', classes.subtitle)}>
              {'Konto'}
            </Text>
            <Title className={'uppercase text-gray-800 text-4xl'}>{'Rejestracja'}</Title>
          </header>
          <form className={'flex flex-col gap-4'} onSubmit={form.handleSubmit(handleFormSubmit)}>
            <TextInputField
              control={form.control}
              description={'Adres email wykorzystywany jest podczas odzyskiwania hasła'}
              label={'Adres email'}
              name={'email'}
            />
            <PasswordInputField
              control={form.control}
              description={
                'Hasło powinno składać się z minimum 12 znaków oraz posiadać po jednym znaku specjalnym oraz cyfrze'
              }
              label={'Hasło'}
              name={'password'}
            />
            <PasswordInputField control={form.control} label={'Powtórz hasło'} name={'repeatPassword'} />
            <div className={'w-full flex items-center justify-between flex-col lg:flex-row mt-4 gap-4'}>
              <Button className={'w-full lg:w-[auto]'} isSubmit>
                {'Zarejestruj się'}
              </Button>
              <Text className={clsx('text-center lg:text-right', classes.registerRulesText)}>
                {'Rejestrując się na Mage Guild Wars akceptujesz'}
                <Link className={clsx('ml-1 underline', classes.recoveryPasswordLink)} href={'/rules'}>
                  {'regulamin serwisu'}
                </Link>
              </Text>
            </div>
          </form>
        </div>
        <Navigation />
      </section>
    </FormProvider>
  )
}
