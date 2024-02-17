import { useCallback, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Group } from '@mantine/core'
import { isEqual } from 'lodash'
import { object, string } from 'yup'

import { Button, PasswordInputField, TextInputField } from '../../common/components'
import { useResources } from '../../resources/hooks'

export function RegisterForm() {
  const { getResource } = useResources('AUTH')
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
        email: string()
          .required(getResource('REGISTER_FORM_FIELD_REQUIRED_VALIDATION_TEXT'))
          .email(getResource('REGISTER_FORM_FIELD_EMAIL_VALIDATION_TEXT'))
          .nullable(),
        password: string()
          .required(getResource('REGISTER_FORM_FIELD_REQUIRED_VALIDATION_TEXT'))
          .min(10, getResource('REGISTER_FORM_FIELD_PASSWORD_VALIDATION_TEXT'))
          .nullable(),
        repeatPassword: string()
          .required(getResource('REGISTER_FORM_FIELD_REQUIRED_VALIDATION_TEXT'))
          .test(
            'checkIfPasswordsAreTheSame',
            getResource('REGISTER_FORM_FIELD_REPEAT_PASSWORD_VALIDATION_TEXT'),
            function (value, context) {
              const passwordValue = context.parent.password
              return isEqual(value, passwordValue)
            },
          )
          .nullable(),
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
            description={getResource('REGISTER_FORM_FIELD_EMAIL_DESCRIPTION_TEXT')}
            label={getResource('REGISTER_FORM_FIELD_EMAIL_LABEL')}
            name={'email'}
            withAsterisk
          />
          <PasswordInputField
            className={'w-full'}
            description={getResource('REGISTER_FORM_FIELD_PASSWORD_DESCRIPTION_TEXT')}
            label={getResource('REGISTER_FORM_FIELD_PASSWORD_LABEL')}
            name={'password'}
            withAsterisk
          />
          <PasswordInputField
            className={'w-full'}
            label={getResource('REGISTER_FORM_FIELD_REPEAT_PASSWORD_LABEL')}
            name={'repeatPassword'}
            withAsterisk
          />
          <Button className={'mt-2'} isFullWidth type={'submit'}>
            {getResource('REGISTER_FORM_BUTTON_CREATE_ACCOUNT_TEXT')}
          </Button>
        </Group>
      </form>
    </FormProvider>
  )
}
