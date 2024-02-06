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
  useCreateAccountMutation,
} from '@modules/auth'
import { TextFieldInput } from '@modules/common'
import { useLocale } from '@modules/locale'
import { clsx } from 'clsx'

import styles from './../styles/auth.module.css'

const RegisterForm = () => {
  const { mutate: createAccount } = useCreateAccountMutation()
  const { translateByHook } = useLocale('auth')
  const form = useForm<IRegisterFormFields>({
    mode: 'onChange',
    criteriaMode: 'all',
    resolver: yupResolver(AUTH_REGISTER_SCHEMA),
    defaultValues: AUTH_REGISTER_VALUES,
  })

  const handleRegisterSubmit = useCallback(
    (formValues: IRegisterFormFields) => {
      createAccount(formValues, {
        onSuccess: (response) => {
          console.log('response', response)
        },
        onError: (error) => {
          console.log('error', error)
        },
        onSettled: (settled) => {
          console.log('settled', settled)
        },
      })
    },
    [createAccount],
  )

  const values = useMemo(() => form, [form])

  return (
    <FormProvider {...values}>
      <form
        onSubmit={form.handleSubmit(handleRegisterSubmit)}
        className={'flex flex-col w-full gap-4'}
        noValidate
      >
        <TextFieldInput name={'email'} label={translateByHook('fields.email')} required />
        <TextFieldInput
          name={'password'}
          label={translateByHook('fields.password')}
          isPassword
          required
        />
        <Text className={clsx('text-center', styles.linkText)}>
          {translateByHook('text.register.ifRegister')}
          <Anchor href={'/'} component={Link}>
            {translateByHook('text.link.rules')}
          </Anchor>
          {translateByHook('text.register.name')}
        </Text>
        <Button type={'submit'} fullWidth>
          {translateByHook('actions.registerAction')}
        </Button>
        <Text className={clsx('text-center', styles.linkText)}>
          {translateByHook('text.register.haveAccount')}
          <Anchor href={'/'} component={Link}>
            {translateByHook('text.link.homepage')}
          </Anchor>
          {translateByHook('text.register.goToLogin')}
        </Text>
      </form>
    </FormProvider>
  )
}

export default RegisterForm
