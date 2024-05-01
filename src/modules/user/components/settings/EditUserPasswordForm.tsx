import { Dispatch, SetStateAction, useCallback, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Text } from '@mantine/core'
import { Button, PasswordInputField } from 'common/components'
import { closeUserSettingsModal } from 'common/store'
import { useDispatch } from 'config'
import { useResource } from 'resource/hooks'
import { IChangePasswordFormValues } from 'user/models'
import { object, string } from 'yup'

import classes from './../Components.module.css'

interface IProps {
  setisVisible: Dispatch<SetStateAction<boolean>>
}

export function EditUserPasswordForm({ setisVisible }: IProps) {
  const { getResource } = useResource('COMMON')
  const { getResource: getUserResource } = useResource('USER')
  const { getResource: getAuthResource } = useResource('AUTH')
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
          .required(getResource('FIELD_REQUIRED_TEXT'))
          .min(10, getResource('FIELD_INCORRECT_PASSWORD_TEXT')),
        newPassword: string().required(getResource('FIELD_REQUIRED_TEXT')),
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
            label={getUserResource('FIELD_CURRENT_PASSWORD_LABEL')}
            name={'currentPassword'}
            required
          />
          <PasswordInputField
            autoComplete={'off'}
            description={getAuthResource('FIELD_PASSWORD_DESCRIPTION_TEXT')}
            label={getUserResource('FIELD_NEW_PASSWORD_LABEL')}
            name={'newPassword'}
            required
          />
        </div>
        <div className={'flex justify-center mb-6'}>
          <Text className={classes.loginIssuesText}>
            {getUserResource('MODAL_SETTINGS_CHANGE_PASSWORD_NOTE_TEXT')}
          </Text>
        </div>
        <div className={'w-full flex justify-end items-center gap-4'}>
          <Button
            onClick={handleCloseUserSettingsModal}
            type={'button'}
            variant={'default'}
          >
            {getResource('ACTION_CLOSE_TEXT')}
          </Button>
          <Button type={'submit'}>{getResource('ACTION_SAVE_TEXT')}</Button>
        </div>
      </form>
    </FormProvider>
  )
}
