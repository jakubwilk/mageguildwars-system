import { Controller, useFormContext } from 'react-hook-form'
import { Checkbox, CheckboxProps } from '@mantine/core'
import clsx from 'clsx'
import { isNil } from 'lodash'

import classes from './Form.module.css'

interface IProps extends CheckboxProps {
  name: string
  error?: string
  handleChange?: (value: string) => void
  isControlled?: boolean
  isChecked?: boolean
}

export function CheckboxInputField({
  name,
  error,
  label,
  description,
  handleChange,
  isControlled = true,
  isChecked = false,
  ...restProps
}: IProps) {
  const { control } = useFormContext()

  if (isControlled) {
    return (
      <Controller
        control={control}
        name={name}
        render={({ field: { name, value, onBlur, onChange }, fieldState: { error } }) => (
          <Checkbox
            checked={isChecked}
            classNames={{
              label: classes.label,
              description: clsx(classes.description, classes.checkboxDescription),
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
            {...(!isNil(value) && { checked: value })}
            {...(!isNil(error) && { error: error.message })}
            {...restProps}
          />
        )}
      />
    )
  }

  return (
    <Checkbox
      classNames={{
        label: classes.label,
        description: classes.description,
      }}
      defaultChecked={isChecked}
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
