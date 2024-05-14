import { useCallback, useEffect, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { Text } from '@mantine/core'
import { useRegisterMutation } from 'auth/api'
import { Button, PasswordInputField, TextInputField } from 'common/components'
import { closeRegisterModal } from 'common/store'
import { useDispatch } from 'config'
import { isEqual } from 'lodash'
import { object, string } from 'yup'

import { IRegisterFormValues, IRegisterRequestValues } from '../models'

import classes from './Components.module.css'

export function RegisterForm() {
  const { t } = useTranslation()
  const { mutate: createAccount } = useRegisterMutation()
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
        slug: string().required(t('common:validation.field-required')),
        email: string()
          .email(t('common:validation.field-email'))
          .required(t('common:validation.field-required')),
        password: string()
          .required(t('common:validation.field-required'))
          .min(10, t('common:validation.field-password')),
        repeatPassword: string()
          .required(t('common:validation.field-required'))
          .test(
            'checkIfPasswordsAreTheSame',
            t('common:validation.field-password-repeat'),
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

  const handleFormSubmit = useCallback(
    (values: IRegisterFormValues) => {
      const formData: IRegisterRequestValues = {
        slug: values.slug,
        email: values.email,
        password: values.password,
        group: 1,
      }

      createAccount(formData)
    },
    [createAccount],
  )

  useEffect(() => {
    form.clearErrors()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <FormProvider {...formValues}>
      <form noValidate onSubmit={form.handleSubmit(handleFormSubmit)}>
        <div className={'flex flex-col gap-4 mb-4'}>
          <TextInputField
            autoComplete={'off'}
            description={t('auth:field.slug-description')}
            label={t('auth:field.slug-label')}
            name={'slug'}
            required
          />
          <TextInputField
            autoComplete={'off'}
            description={t('auth:field.email-description')}
            label={t('auth:field.email-label')}
            name={'email'}
            required
          />
          <PasswordInputField
            autoComplete={'off'}
            description={t('auth:field.password-description')}
            label={t('auth:field.password-label')}
            name={'password'}
            required
          />
          <PasswordInputField
            autoComplete={'off'}
            label={t('auth:field.password-repeat-label')}
            name={'repeatPassword'}
            required
          />
        </div>
        <div className={'flex text-center justify-center mb-6'}>
          <Text className={classes.loginIssuesText}>
            {t('auth:text.register-rules-agreement')}
            <Link className={classes.loginIssuesLink} to={'/'}>
              {t('auth:text.register-rules-agreement-link')}
            </Link>
          </Text>
        </div>
        <div className={'w-full flex justify-end items-center gap-4'}>
          <Button onClick={handleCloseRegisterModal} type={'button'} variant={'default'}>
            {t('common:action.cancel')}
          </Button>
          <Button type={'submit'}>{t('auth:action.register-text')}</Button>
        </div>
      </form>
    </FormProvider>
  )
}
