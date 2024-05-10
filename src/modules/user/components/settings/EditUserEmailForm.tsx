import { Dispatch, SetStateAction, useCallback, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { yupResolver } from '@hookform/resolvers/yup'
import { Text } from '@mantine/core'
import { Button, TextInputField } from 'common/components'
import { closeUserSettingsModal } from 'common/store'
import { useDispatch } from 'config'
import { IChangeEmailFormValues } from 'user/models'
import { object, string } from 'yup'

import classes from './../Components.module.css'

interface IProps {
  setisVisible: Dispatch<SetStateAction<boolean>>
}

export function EditUserEmailForm({ setisVisible }: IProps) {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const form = useForm<IChangeEmailFormValues>({
    mode: 'onBlur',
    criteriaMode: 'all',
    defaultValues: {
      currentEmail: '',
      newEmail: '',
    },
    resolver: yupResolver(
      object({
        currentEmail: string()
          .email(t('common:validation.field-email'))
          .required(t('common:validation.field-required')),
        newEmail: string()
          .email(t('common:validation.field-email'))
          .required(t('common:validation.field-required')),
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
          <TextInputField
            autoComplete={'off'}
            label={t('user:field.email')}
            name={'currentEmail'}
            required
          />
          <TextInputField
            autoComplete={'off'}
            label={t('user:field.email-new')}
            name={'newEmail'}
            required
          />
        </div>
        <div className={'flex justify-center mb-6'}>
          <Text className={classes.loginIssuesText}>{t('user:modal.text.email')}</Text>
        </div>
        <div className={'w-full flex justify-end items-center gap-4'}>
          <Button
            onClick={handleCloseUserSettingsModal}
            type={'button'}
            variant={'default'}
          >
            {t('common:action.cancel')}
          </Button>
          <Button type={'submit'}>{t('common:active.save')}</Button>
        </div>
      </form>
    </FormProvider>
  )
}
