import { Controller, useFormContext } from 'react-hook-form'
import { PasswordInput, PasswordInputProps } from '@mantine/core'
import { isNil } from 'lodash'

import '@mantine/core/styles/PasswordInput.css'
import classes from './Form.module.css'

interface IProps extends PasswordInputProps {
  name: string
  error?: string
  handleChange?: () => void
  isControlled?: boolean
}

export function PasswordInputField({
  name,
  error,
  label,
  description,
  handleChange,
  isControlled,
  ...restProps
}: IProps) {
  const { control } = useFormContext()

  if (isControlled) {
    return (
      <Controller
        control={control}
        name={name}
        render={({ field: { name, value, onBlur, onChange }, fieldState: { error } }) => (
          <PasswordInput
            classNames={{
              label: classes.label,
            }}
            description={description}
            label={label}
            name={name}
            onBlur={onBlur}
            onChange={() => {
              if (handleChange) {
                handleChange()
              }

              onChange()
            }}
            {...(!isNil(value) && { value })}
            {...(!isNil(error) && { error: error.message })}
            {...restProps}
          />
        )}
      />
    )
  }

  return (
    <PasswordInput
      classNames={{
        label: classes.label,
      }}
      description={description}
      label={label}
      name={name}
      onChange={handleChange}
      {...(!isNil(error) && { error })}
      {...restProps}
    />
  )
}
