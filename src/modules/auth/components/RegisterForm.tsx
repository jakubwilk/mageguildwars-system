import { useCallback, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Group } from '@mantine/core'
import { object, string } from 'yup'

import { Button, PasswordInputField, TextInputField } from '../../common/components'

export function RegisterForm() {
  const form = useForm({
    mode: 'onChange',
    criteriaMode: 'all',
    defaultValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    resolver: yupResolver(
      object({
        email: string().email().required().nullable(),
        password: string().required().nullable(),
        repeatPassword: string().required().nullable(),
      }),
    ),
  })

  const handleSubmit = useCallback((values: unknown) => {
    console.log('values', values)
  }, [])

  const values = useMemo(() => form, [form])

  return (
    <FormProvider {...values}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Group>
          <TextInputField
            description={
              'Służy nie tylko do odzyskania dostępu do konta, ale również głównie za pomocą adresu email użytkownik może się zalogować'
            }
            label={'Adres email'}
            name={'email'}
            withAsterisk
          />
          <PasswordInputField
            className={'w-full'}
            label={'Hasło'}
            name={'password'}
            withAsterisk
          />
          <PasswordInputField
            className={'w-full'}
            label={'Powtórz hasło'}
            name={'repeatPassword'}
            withAsterisk
          />
          <Button className={'mt-2'} isFullWidth type={'submit'}>
            {'Utwórz konto'}
          </Button>
        </Group>
      </form>
    </FormProvider>
  )
}
