'use client'

import { useCallback, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '@mantine/core'
import { AUTH_LOGIN_SCHEMA, AUTH_LOGIN_VALUES, ILoginFormFields } from '@modules/auth'
import { CheckboxFieldInput, TextFieldInput } from '@modules/common'
import { useLocale } from '@modules/locale'

const LoginForm = () => {
  const { translateByHook } = useLocale('auth')
  const form = useForm<ILoginFormFields>({
    mode: 'onChange',
    resolver: yupResolver(AUTH_LOGIN_SCHEMA),
    values: AUTH_LOGIN_VALUES,
  })

  const handleLoginSubmit = useCallback((formValues: ILoginFormFields) => {
    console.log('formValues', formValues)
  }, [])

  const values = useMemo(() => form, [form])

  return (
    <FormProvider {...values}>
      <form
        onSubmit={form.handleSubmit(handleLoginSubmit)}
        className={'flex flex-col gap-4'}
        noValidate
      >
        <TextFieldInput name={'login'} label={translateByHook('fields.login')} required />
        <TextFieldInput
          name={'password'}
          label={translateByHook('fields.password')}
          isPassword
          required
        />
        <CheckboxFieldInput
          name={'isRemember'}
          label={translateByHook('fields.remember')}
        />
        <Button type={'submit'} fullWidth>
          {translateByHook('actions.loginAction')}
        </Button>
      </form>
    </FormProvider>
  )
}

export default LoginForm
