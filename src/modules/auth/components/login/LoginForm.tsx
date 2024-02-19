import { useCallback, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { Group, Text } from '@mantine/core'
import { boolean, object, string } from 'yup'

import {
  Button,
  CheckboxInputField,
  PasswordInputField,
  TextInputField,
} from '../../../common/components'
import { useResources } from '../../../resources/hooks'

import classes from './Login.module.css'

export function LoginForm() {
  const { getResource } = useResources('AUTH')

  const form = useForm({
    mode: 'onChange',
    criteriaMode: 'all',
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: yupResolver(
      object({
        email: string()
          .required(getResource('LOGIN_FORM_FIELD_REQUIRED_VALIDATION_TEXT'))
          .email(getResource('LOGIN_FORM_FIELD_EMAIL_VALIDATION_TEXT'))
          .nullable(),
        password: string()
          .required(getResource('LOGIN_FORM_FIELD_REQUIRED_VALIDATION_TEXT'))
          .nullable(),
        rememberMe: boolean(),
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
            className={'w-full'}
            label={getResource('LOGIN_FORM_FIELD_EMAIL_LABEL')}
            name={'email'}
            withAsterisk
          />
          <PasswordInputField
            className={'w-full'}
            label={getResource('LOGIN_FORM_FIELD_PASSWORD_LABEL')}
            name={'password'}
            withAsterisk
          />
          <CheckboxInputField
            description={getResource('LOGIN_FORM_FIELD_REMEMBER_ME_DESCRIPTION_TEXT')}
            label={getResource('LOGIN_FORM_FIELD_REMEMBER_ME_LABEL')}
            name={'rememberMe'}
          />
          <div className={'w-full flex justify-center'}>
            <Text className={classes.forgotPasswordText}>
              {getResource('LOGIN_FORM_FORGOT_PASSWORD_TEXT')}
              <Link className={classes.forgotPasswordLink} to={'/'}>
                {getResource('LOGIN_FORM_FORGOT_PASSWORD_LINK_TEXT')}
              </Link>
            </Text>
          </div>
          <Button className={'mt-2'} isFullWidth type={'submit'}>
            {getResource('LOGIN_FORM_BUTTON_LOGIN_ACCOUNT_TEXT')}
          </Button>
        </Group>
      </form>
    </FormProvider>
  )
}
