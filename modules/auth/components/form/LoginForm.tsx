'use client'

import { useCallback, useMemo } from 'react'
import { FormProvider } from 'react-hook-form'
import Link from 'next/link'
import { yupResolver } from '@hookform/resolvers/yup'
import { Text, Title } from '@mantine/core'
import { IconLock } from '@tabler/icons-react'
import { Navigation } from 'auth/components'
import { ILoginFormValues } from 'auth/models'
import clsx from 'clsx'
import { Button, CheckboxField, PasswordInputField, TextInputField } from 'common/components'
import { useForm } from 'common/hooks'
import { boolean, object, string } from 'yup'

import classes from './form.module.css'

export default function LoginForm() {
  const form = useForm<ILoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
      shouldRemember: true
    },
    resolver: yupResolver(
      object({
        email: string().required('Pole email jest wymagane'),
        password: string().required('Pole hasło jest wymagane'),
        shouldRemember: boolean()
      })
    )
  })

  const formValues = useMemo(() => form, [form])

  const handleFormSubmit = useCallback((values: ILoginFormValues) => {
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
            <Title className={'uppercase text-gray-800 text-4xl'}>{'Logowanie'}</Title>
          </header>
          <form className={'flex flex-col gap-4'} onSubmit={form.handleSubmit(handleFormSubmit)}>
            <TextInputField
              control={form.control}
              description={'Wprowadź adres email użyty podczas rejestracji'}
              label={'Adres email'}
              name={'email'}
            />
            <PasswordInputField control={form.control} label={'Hasło'} name={'password'} />
            <CheckboxField
              control={form.control}
              label={'Zapamiętaj przy następnych logowaniach'}
              name={'shouldRemember'}
            />
            <div className={'flex items-center justify-between flex-col lg:flex-row mt-4 gap-4'}>
              <Button className={'w-full lg:w-[auto]'} isSubmit>
                {'Zaloguj się'}
              </Button>
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
    </FormProvider>
  )
}
