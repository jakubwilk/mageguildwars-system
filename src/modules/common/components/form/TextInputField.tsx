import { Controller, useFormContext } from 'react-hook-form'
import { TextInput, TextInputProps } from '@mantine/core'
import { isNil } from 'lodash'

import '@mantine/core/styles/Input.css'
import classes from './Form.module.css'

interface IProps extends TextInputProps {
  name: string
  error?: string
  handleChange?: (value: string) => void
  isControlled?: boolean
}

export function TextInputField({
  name,
  error,
  label,
  description,
  handleChange,
  isControlled = true,
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
            classNames={{
              root: classes.root,
              label: classes.label,
              description: classes.description,
            }}
            description={description}
            label={label}
            name={name}
            onBlur={onBlur}
            onChange={(event) => {
              if (handleChange) {
                const { value } = event.target
                handleChange(value)
              }

              onChange(event)
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
      classNames={{
        root: classes.root,
        label: classes.label,
        description: classes.description,
      }}
      description={description}
      label={label}
      name={name}
      onChange={(event) => {
        if (handleChange) {
          const { value } = event.target
          handleChange(value)
        }
      }}
      {...(!isNil(error) && { error })}
      {...restProps}
    />
  )
}
