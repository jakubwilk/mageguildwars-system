import { useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Group } from '@mantine/core'

import { Button, PasswordInputField, TextInputField } from '../../common/components'

export function RegisterForm() {
  const form = useForm()

  const values = useMemo(() => form, [form])

  return (
    <FormProvider {...values}>
      <form>
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
          <Button className={'mt-2'} isFullWidth>
            {'Utwórz konto'}
          </Button>
        </Group>
      </form>
    </FormProvider>
  )
}
