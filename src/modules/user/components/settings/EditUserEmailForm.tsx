import { Dispatch, SetStateAction, useCallback, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Text } from '@mantine/core'
import { Button, TextInputField } from 'common/components'
import { closeUserSettingsModal } from 'common/store'
import { useDispatch } from 'config'
import { useResource } from 'resource/hooks'
import { IChangeEmailFormValues } from 'user/models'
import { object, string } from 'yup'

import classes from './../Components.module.css'

interface IProps {
  setisVisible: Dispatch<SetStateAction<boolean>>
}

export function EditUserEmailForm({ setisVisible }: IProps) {
  const { getResource } = useResource('COMMON')
  const { getResource: getUserResource } = useResource('USER')
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
          .email(getResource('FIELD_INCORRECT_EMAIL_TEXT'))
          .required(getResource('FIELD_REQUIRED_TEXT')),
        newEmail: string()
          .email(getResource('FIELD_INCORRECT_EMAIL_TEXT'))
          .required(getResource('FIELD_REQUIRED_TEXT')),
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
            label={getUserResource('FIELD_CURRENT_EMAIL_LABEL')}
            name={'currentEmail'}
            required
          />
          <TextInputField
            autoComplete={'off'}
            label={getUserResource('FIELD_NEW_EMAIL_LABEL')}
            name={'newEmail'}
            required
          />
        </div>
        <div className={'flex justify-center mb-6'}>
          <Text className={classes.loginIssuesText}>
            {getUserResource('MODAL_SETTINGS_CHANGE_EMAIL_NOTE_TEXT')}
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
