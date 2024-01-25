'use client'

import { useCallback, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Link from 'next/link'
import { yupResolver } from '@hookform/resolvers/yup'
import { Anchor, Button, Text } from '@mantine/core'
import {
  AUTH_REGISTER_SCHEMA,
  AUTH_REGISTER_VALUES,
  IRegisterFormFields,
} from '@modules/auth'
import { TextFieldInput } from '@modules/common'
import { useLocale } from '@modules/locale'
import { clsx } from 'clsx'

import styles from './../styles/auth.module.css'

const RegisterForm = () => {
  const { translateByHook } = useLocale('auth')
  const form = useForm<IRegisterFormFields>({
    mode: 'onChange',
    resolver: yupResolver(AUTH_REGISTER_SCHEMA),
    values: AUTH_REGISTER_VALUES,
  })

  const handleRegisterSubmit = useCallback((formValues: IRegisterFormFields) => {
    console.log('formValues', formValues)
  }, [])

  const values = useMemo(() => form, [form])

  return (
    <FormProvider {...values}>
      <form
        onSubmit={form.handleSubmit(handleRegisterSubmit)}
        className={'flex flex-col w-full gap-4'}
      >
        <TextFieldInput name={'login'} label={translateByHook('fields.login')} required />
        <TextFieldInput
          name={'password'}
          label={translateByHook('fields.password')}
          isPassword
          required
        />
        <TextFieldInput name={'email'} label={translateByHook('fields.email')} required />
        <Text className={clsx('text-center', styles.linkText)}>
          {'Rejestrując się akceptujesz tym samym '}
          <Anchor href={'/'} component={Link}>
            {'regulamin'}
          </Anchor>
          {' Mage Guild Wars'}
        </Text>
        <Button type={'submit'} fullWidth>
          {translateByHook('actions.registerAction')}
        </Button>
        <Text className={clsx('text-center', styles.linkText)}>
          {'Masz już konto? Przejdź do '}
          <Anchor href={'/'} component={Link}>
            {'strony głównej'}
          </Anchor>
          {' żeby się zalogować'}
        </Text>
      </form>
    </FormProvider>
  )
}

export default RegisterForm
