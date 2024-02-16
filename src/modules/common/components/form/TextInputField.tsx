import { Controller, useFormContext } from 'react-hook-form'
import { TextInput, TextInputProps } from '@mantine/core'
import { isNil } from 'lodash'

import '@mantine/core/styles/Input.css'

interface IProps extends TextInputProps {
  name: string
  error?: string
  handleChange?: () => void
  isControlled?: boolean
}

export function TextInputField({
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
          <TextInput
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
    <TextInput
      description={description}
      label={label}
      name={name}
      onChange={handleChange}
      {...(!isNil(error) && { error })}
      {...restProps}
    />
  )
}
