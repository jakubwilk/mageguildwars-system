import { useCallback, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Group } from '@mantine/core'
import clsx from 'clsx'
import { object, string } from 'yup'

import { Button, PasswordInputField } from '../../../common/components'
import { useResources } from '../../../resources/hooks'

import classes from './Layout.module.css'

interface IProps {
  handleOpenOverlay: () => void
  handleCloseOverlay: () => void
}

export function EditPasswordBlockForm({ handleOpenOverlay, handleCloseOverlay }: IProps) {
  const { getResource } = useResources('USER')
  const { getResource: getCommonResources } = useResources('COMMON')

  const form = useForm({
    mode: 'onChange',
    criteriaMode: 'all',
    defaultValues: {
      currentPassword: '',
      newPassword: '',
    },
    resolver: yupResolver(
      object({
        currentPassword: string()
          .required(getCommonResources('FIELD_REQUIRED_TEXT'))
          .nullable(),
        newPassword: string()
          .required(getCommonResources('FIELD_REQUIRED_TEXT'))
          .min(10, getCommonResources('FIELD_INCORRECT_PASSWORD_TEXT'))
          .nullable(),
      }),
    ),
  })

  const values = useMemo(() => form, [form])

  const handleSave = useCallback(
    (values: unknown) => {
      console.log('values', values)
      // Mock async case
      handleOpenOverlay()
      setTimeout(() => {
        handleCloseOverlay()
      }, 3000)
    },
    [handleOpenOverlay, handleCloseOverlay],
  )

  return (
    <FormProvider {...values}>
      <form noValidate onSubmit={form.handleSubmit(handleSave)}>
        <Group>
          <PasswordInputField
            label={getResource('EDIT_USER_FORM_CURRENT_PASSWORD_LABEL')}
            name={'currentPassword'}
            required
            withAsterisk
          />
          <PasswordInputField
            label={getResource('EDIT_USER_FORM_NEW_PASSWORD_LABEL')}
            name={'newPassword'}
            required
            withAsterisk
          />
          <Button
            className={clsx('mt-2', classes.editUserBlockButton)}
            isFullWidth
            type={'submit'}
          >
            {getCommonResources('SAVE_ACTION_TEXT')}
          </Button>
        </Group>
      </form>
    </FormProvider>
  )
}
