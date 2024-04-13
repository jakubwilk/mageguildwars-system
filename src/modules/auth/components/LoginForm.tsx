import { useCallback, useEffect, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { Text } from '@mantine/core'
import {
  Button,
  CheckboxInputField,
  PasswordInputField,
  TextInputField,
} from 'common/components'
import { closeLoginModal } from 'common/store'
import { routeEnum } from 'common/utils'
import { useDispatch } from 'config'
import { useResource } from 'resource/hooks'
import { boolean, object, string } from 'yup'

import { ILoginFormValues } from '../models'

import classes from './Components.module.css'

export function LoginForm() {
  const { getResource } = useResource('COMMON')
  const { getResource: getAuthResource } = useResource('AUTH')
  const dispatch = useDispatch()
  const form = useForm<ILoginFormValues>({
    mode: 'onBlur',
    criteriaMode: 'all',
    defaultValues: {
      login: '',
      password: '',
      isRemember: false,
    },
    resolver: yupResolver(
      object({
        login: string()
          .email(getResource('FIELD_INCORRECT_EMAIL_TEXT'))
          .required(getResource('FIELD_REQUIRED_TEXT')),
        password: string().required(getResource('FIELD_REQUIRED_TEXT')),
        isRemember: boolean(),
      }),
    ),
  })

  const formValues = useMemo(() => form, [form])

  const handleCloseLoginModal = useCallback(() => dispatch(closeLoginModal()), [dispatch])

  useEffect(() => {
    form.clearErrors()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <FormProvider {...formValues}>
      <form noValidate onSubmit={form.handleSubmit((val) => console.log('val', val))}>
        <div className={'flex flex-col gap-4 mb-4'}>
          <TextInputField
            autoComplete={'off'}
            label={getAuthResource('FIELD_EMAIL_LABEL')}
            name={'login'}
            required
          />
          <PasswordInputField
            autoComplete={'off'}
            label={getAuthResource('FIELD_PASSWORD_LABEL')}
            name={'password'}
            required
          />
          <CheckboxInputField
            description={getAuthResource('FIELD_REMEMBER_ME_DESCRIPTION_TEXT')}
            label={getAuthResource('FIELD_REMEMBER_ME_LABEL')}
            name={'isRemember'}
          />
        </div>
        <div className={'flex justify-center mb-6'}>
          <Text className={classes.loginIssuesText}>
            {getAuthResource('LOGIN_ISSUES_TEXT')}
            <Link className={classes.loginIssuesLink} to={routeEnum.LOGIN_ISSUES}>
              {getAuthResource('LOGIN_ISSUES_LINK_TEXT')}
            </Link>
          </Text>
        </div>
        <div className={'w-full flex justify-end items-center gap-4'}>
          <Button onClick={handleCloseLoginModal} type={'button'} variant={'default'}>
            {getResource('ACTION_CANCEL_TEXT')}
          </Button>
          <Button type={'submit'}>{getAuthResource('ACTION_LOGIN_TEXT')}</Button>
        </div>
      </form>
    </FormProvider>
  )
}
