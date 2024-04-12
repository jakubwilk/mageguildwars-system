import { useCallback, useEffect, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { Text } from '@mantine/core'
import { isEqual } from 'lodash'
import { object, string } from 'yup'

import { useDispatch } from '../../../app/config'
import { Button, PasswordInputField, TextInputField } from '../../common/components'
import { closeRegisterModal } from '../../common/store'
import { useResource } from '../../resource/hooks'
import { IRegisterFormValues } from '../models'

import classes from './Components.module.css'

export function RegisterForm() {
  const { getResource } = useResource('COMMON')
  const { getResource: getAuthResource } = useResource('AUTH')
  const dispatch = useDispatch()
  const form = useForm<IRegisterFormValues>({
    mode: 'onBlur',
    criteriaMode: 'all',
    defaultValues: {
      slug: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    resolver: yupResolver(
      object({
        slug: string().required(getResource('FIELD_REQUIRED_TEXT')),
        email: string()
          .email(getResource('FIELD_INCORRECT_EMAIL_TEXT'))
          .required(getResource('FIELD_REQUIRED_TEXT')),
        password: string()
          .required(getResource('FIELD_REQUIRED_TEXT'))
          .min(10, getResource('FIELD_INCORRECT_PASSWORD_TEXT')),
        repeatPassword: string()
          .required(getResource('FIELD_REQUIRED_TEXT'))
          .test(
            'checkIfPasswordsAreTheSame',
            getResource('FIELD_NOT_SAME_PASSWORD_TEXT'),
            function (value, context) {
              const passwordValue = context.parent.password
              return isEqual(value, passwordValue)
            },
          ),
      }),
    ),
  })

  const formValues = useMemo(() => form, [form])

  const handleCloseRegisterModal = useCallback(
    () => dispatch(closeRegisterModal()),
    [dispatch],
  )

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
            description={getAuthResource('FIELD_SLUG_DESCRIPTION_TEXT')}
            label={getAuthResource('FIELD_SLUG_LABEL')}
            name={'slug'}
            required
          />
          <TextInputField
            autoComplete={'off'}
            description={getAuthResource('FIELD_EMAIL_DESCRIPTION_TEXT')}
            label={getAuthResource('FIELD_EMAIL_LABEL')}
            name={'email'}
            required
          />
          <PasswordInputField
            autoComplete={'off'}
            description={getAuthResource('FIELD_PASSWORD_DESCRIPTION_TEXT')}
            label={getAuthResource('FIELD_PASSWORD_LABEL')}
            name={'password'}
            required
          />
          <PasswordInputField
            autoComplete={'off'}
            label={getAuthResource('FIELD_REPEAT_PASSWORD_LABEL')}
            name={'repeatPassword'}
            required
          />
        </div>
        <div className={'flex text-center justify-center mb-6'}>
          <Text className={classes.loginIssuesText}>
            {getAuthResource('REGISTER_RULES_AGREEMENT_TEXT')}
            <Link className={classes.loginIssuesLink} to={'/'}>
              {getAuthResource('REGISTER_RULES_AGREEMENT_LINK_TEXT')}
            </Link>
          </Text>
        </div>
        <div className={'w-full flex justify-end items-center gap-4'}>
          <Button onClick={handleCloseRegisterModal} type={'button'} variant={'default'}>
            {getResource('ACTION_CANCEL_TEXT')}
          </Button>
          <Button type={'submit'}>{getAuthResource('ACTION_REGISTER_TEXT')}</Button>
        </div>
      </form>
    </FormProvider>
  )
}
