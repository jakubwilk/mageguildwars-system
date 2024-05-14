import { useCallback, useEffect, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { Text } from '@mantine/core'
import {
  Button,
  CheckboxInputField,
  PasswordInputField,
  TextInputField,
} from 'common/components'
import { useNotifications } from 'common/hooks'
import { closeLoginModal } from 'common/store'
import { routeKeys } from 'common/utils'
import { useDispatch } from 'config'
import { setUser } from 'user/store'
import { boolean, object, string } from 'yup'

import { ILoginFormValues } from '../models'

import classes from './Components.module.css'

export function LoginForm() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { showNotificationSuccess } = useNotifications()

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
          .email(t('common:validation.field-email'))
          .required(t('common:validation.field-required')),
        password: string().required(t('common:validation.field-required')),
        isRemember: boolean(),
      }),
    ),
  })

  const formValues = useMemo(() => form, [form])

  const handleCloseLoginModal = useCallback(() => dispatch(closeLoginModal()), [dispatch])

  const handleSubmitForm = useCallback(
    (values: ILoginFormValues) => {
      console.log('values', values)

      const MOCK_USER = {
        registerDate: new Date().toISOString(),
        updateDate: new Date().toISOString(),
        group: 3,
        isBlocked: false,
        hasGameMasterPanel: true,
        canCreateNewCharacters: true,
      }

      dispatch(setUser(MOCK_USER))
      showNotificationSuccess({
        message: t('notification:message.success.login'),
      })
      handleCloseLoginModal()
    },
    [showNotificationSuccess, handleCloseLoginModal, dispatch, t],
  )

  useEffect(() => {
    form.clearErrors()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <FormProvider {...formValues}>
      <form noValidate onSubmit={form.handleSubmit(handleSubmitForm)}>
        <div className={'flex flex-col gap-4 mb-4'}>
          <TextInputField
            autoComplete={'off'}
            label={t('auth:field.email-label')}
            name={'login'}
            required
          />
          <PasswordInputField
            autoComplete={'off'}
            label={t('auth:field.password-label')}
            name={'password'}
            required
          />
          <CheckboxInputField
            description={t('auth:field.remember-description')}
            label={t('auth:field.remember-label')}
            name={'isRemember'}
          />
        </div>
        <div className={'flex justify-center mb-6'}>
          <Text className={classes.loginIssuesText}>
            {t('auth:text.login-issues')}
            <Link className={classes.loginIssuesLink} to={routeKeys.LOGIN_ISSUES}>
              {t('auth:text.login-issues-link')}
            </Link>
          </Text>
        </div>
        <div className={'w-full flex justify-end items-center gap-4'}>
          <Button onClick={handleCloseLoginModal} type={'button'} variant={'default'}>
            {t('common:action.cancel')}
          </Button>
          <Button type={'submit'}>{t('auth:action.login-text')}</Button>
        </div>
      </form>
    </FormProvider>
  )
}
