import { Controller, useFormContext } from 'react-hook-form'
import { Switch, SwitchProps } from '@mantine/core'
import clsx from 'clsx'
import { isNil } from 'lodash'

import classes from './Form.module.css'

interface IProps extends SwitchProps {
  name: string
  error?: string
  handleChange?: (value: boolean) => void
  isControlled?: boolean
  isChecked?: boolean
}

export function SwitchInputField({
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
          <Switch
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
                const { checked } = event.currentTarget
                handleChange(checked)
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
    <Switch
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
          const { checked } = event.currentTarget
          handleChange(checked)
        }
      }}
      {...(!isNil(error) && { error })}
      {...restProps}
    />
  )
}
