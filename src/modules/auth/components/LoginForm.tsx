'use client'

import { useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '@mantine/core'
import { CheckboxFieldInput, TextFieldInput } from '@modules/common'
import { useLocale } from '@modules/locale'

const LoginForm = () => {
  const { translateByHook } = useLocale('auth')
  const form = useForm()

  const values = useMemo(() => form, [form])

  return (
    <FormProvider {...values}>
      <form>
        <TextFieldInput name={'login'} label={translateByHook('fields.login')} required />
        <TextFieldInput
          name={'password'}
          label={translateByHook('fields.password')}
          isPassword
          required
        />
        <CheckboxFieldInput
          name={'remember'}
          label={'Zapamiętaj dane przy następnym logowaniu'}
        />
        <Button fullWidth>{translateByHook('actions.loginAction')}</Button>
      </form>
    </FormProvider>
  )
}

export default LoginForm
