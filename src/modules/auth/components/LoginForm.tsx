'use client'

import { useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { TextFieldInput } from '@modules/common'
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
      </form>
    </FormProvider>
  )
}

export default LoginForm
