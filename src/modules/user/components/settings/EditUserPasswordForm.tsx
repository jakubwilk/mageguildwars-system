import { Dispatch, SetStateAction, useCallback, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { yupResolver } from '@hookform/resolvers/yup'
import { Text } from '@mantine/core'
import { Button, PasswordInputField } from 'common/components'
import { closeUserSettingsModal } from 'common/store'
import { useDispatch } from 'config'
import { IChangePasswordFormValues } from 'user/models'
import { object, string } from 'yup'

import classes from './../Components.module.css'

interface IProps {
  setisVisible: Dispatch<SetStateAction<boolean>>
}

export function EditUserPasswordForm({ setisVisible }: IProps) {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const form = useForm<IChangePasswordFormValues>({
    mode: 'onBlur',
    criteriaMode: 'all',
    defaultValues: {
      currentPassword: '',
      newPassword: '',
    },
    resolver: yupResolver(
      object({
        currentPassword: string()
          .required(t('common:validation.field-required'))
          .min(10, t('common:validation.field-password')),
        newPassword: string().required(t('common:validation.field-required')),
      }),
    ),
  })

  const formValues = useMemo(() => form, [form])

  const handleCloseUserSettingsModal = useCallback(
    () => dispatch(closeUserSettingsModal()),
    [dispatch],
  )

  return (
    <FormProvider {...formValues}>
      <form
        noValidate
        onSubmit={form.handleSubmit((val) => {
          console.log('val', val)
          setisVisible(true)
        })}
      >
        <div className={'flex flex-col gap-4 mb-4'}>
          <PasswordInputField
            autoComplete={'off'}
            label={t('user:field.password')}
            name={'currentPassword'}
            required
          />
          <PasswordInputField
            autoComplete={'off'}
            description={t('auth:field.password-description')}
            label={t('user:field.password-new')}
            name={'newPassword'}
            required
          />
        </div>
        <div className={'flex justify-center mb-6'}>
          <Text className={classes.loginIssuesText}>{t('user:modal.text.password')}</Text>
        </div>
        <div className={'w-full flex justify-end items-center gap-4'}>
          <Button
            onClick={handleCloseUserSettingsModal}
            type={'button'}
            variant={'default'}
          >
            {t('common:action.close')}
          </Button>
          <Button type={'submit'}>{t('common:action.save')}</Button>
        </div>
      </form>
    </FormProvider>
  )
}
