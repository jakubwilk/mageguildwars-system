import { useCallback, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Group } from '@mantine/core'
import clsx from 'clsx'
import { object, string } from 'yup'

import { Button, TextInputField } from '../../../common/components'
import { useResources } from '../../../resources/hooks'

import classes from './Layout.module.css'

interface IProps {
  handleOpenOverlay: () => void
  handleCloseOverlay: () => void
}

export function EditEmailBlockForm({ handleOpenOverlay, handleCloseOverlay }: IProps) {
  const { getResource } = useResources('USER')

  const form = useForm({
    mode: 'onChange',
    criteriaMode: 'all',
    defaultValues: {
      currentEmail: '',
      newEmail: '',
    },
    resolver: yupResolver(
      object({
        currentEmail: string()
          .required(getResource('EDIT_USER_FIELD_REQUIRED_VALIDATION_TEXT'))
          .email(getResource('EDIT_USER_FIELD_EMAIL_VALIDATION_TEXT'))
          .nullable(),
        newEmail: string()
          .required(getResource('EDIT_USER_FIELD_REQUIRED_VALIDATION_TEXT'))
          .email(getResource('EDIT_USER_FIELD_EMAIL_VALIDATION_TEXT'))
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
          <TextInputField
            label={getResource('EDIT_USER_FORM_CURRENT_EMAIL_LABEL')}
            name={'currentEmail'}
            required
            withAsterisk
          />
          <TextInputField
            label={getResource('EDIT_USER_FORM_NEW_EMAIL_LABEL')}
            name={'newEmail'}
            required
            withAsterisk
          />
          <Button
            className={clsx('mt-2', classes.editUserBlockButton)}
            isFullWidth
            type={'submit'}
          >
            {getResource('EDIT_USER_CHANGE_EMAIL_BUTTON_TEXT')}
          </Button>
        </Group>
      </form>
    </FormProvider>
  )
}
