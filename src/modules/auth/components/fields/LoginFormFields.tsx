import { Fragment } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Checkbox, PasswordInput, TextInput } from '@mantine/core'
import { IconThumbUp } from '@tabler/icons-react'

const LoginFormFields = () => {
  const { control } = useFormContext()

  return (
    <Fragment>
      <Controller
        name={'login'}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextInput
            label={'Login'}
            placeholder={'Nazwa użytkownika'}
            error={error?.message}
            className={'mb-4'}
            withAsterisk
            {...field}
          />
        )}
      />
      <Controller
        name={'password'}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <PasswordInput
            label={'Hasło'}
            error={error?.message}
            className={'mb-4'}
            withAsterisk
            {...field}
          />
        )}
      />
      <Controller
        name={'isRemember'}
        control={control}
        render={({ field }) => (
          <Checkbox
            label={'Zapamiętaj mnie przy następnych logowaniach'}
            color={'violet'}
            icon={IconThumbUp}
            className={'mb-4'}
            {...field}
          />
        )}
      />
    </Fragment>
  )
}

export default LoginFormFields
