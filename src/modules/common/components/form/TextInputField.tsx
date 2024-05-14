import { Controller, useFormContext } from 'react-hook-form'
import { TextInput, TextInputProps } from '@mantine/core'
import { isNil } from 'lodash'

import '@mantine/core/styles/Input.css'
import classes from './Form.module.css'

interface IProps extends TextInputProps {
  value?: string
  name: string
  error?: string
  handleChange?: (value: string) => void
  isControlled?: boolean
}

export function TextInputField({
  value,
  name,
  error,
  label,
  description,
  handleChange,
  isControlled = true,
  ...restProps
}: IProps) {
  const formContext = useFormContext()

  if (isControlled && formContext) {
    return (
      <Controller
        control={formContext.control}
        name={name}
        render={({
          field: { name, value = '', onBlur, onChange },
          fieldState: { error },
        }) => (
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
                const { value } = event.currentTarget
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
      value={value === undefined ? '' : value}
      {...(!isNil(error) && { error })}
    />
  )
}
