import { Controller, useFormContext } from 'react-hook-form'
import { NumberInput, NumberInputProps } from '@mantine/core'
import { isNil } from 'lodash'

import '@mantine/core/styles/Input.css'
import classes from './Form.module.css'

interface IProps extends NumberInputProps {
  value?: string | number
  name: string
  error?: string
  handleChange?: (value: string | number) => void
  isControlled?: boolean
}

export function NumberInputField({
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
          <NumberInput
            classNames={{
              root: classes.root,
              label: classes.label,
              description: classes.description,
            }}
            description={description}
            label={label}
            name={name}
            onBlur={onBlur}
            onChange={(val) => {
              if (handleChange) {
                handleChange(val)
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
    <NumberInput
      classNames={{
        root: classes.root,
        label: classes.label,
        description: classes.description,
      }}
      description={description}
      label={label}
      name={name}
      onChange={(val) => {
        if (handleChange) {
          handleChange(val)
        }
      }}
      value={value === undefined ? '' : value}
      {...(!isNil(error) && { error })}
    />
  )
}
