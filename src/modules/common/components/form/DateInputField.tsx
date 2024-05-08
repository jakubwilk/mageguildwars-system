import { Controller, useFormContext } from 'react-hook-form'
import { DateInput, DateInputProps } from '@mantine/dates'
import { isNil } from 'lodash'

import classes from './Form.module.css'

interface IProps extends DateInputProps {
  value?: Date
  name: string
  error?: string
  handleChange?: (value: Date) => void
  isControlled?: boolean
}

export function DateInputField({
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
        render={({ field: { name, value, onBlur, onChange }, fieldState: { error } }) => (
          <DateInput
            classNames={{
              root: classes.root,
              label: classes.label,
              description: classes.description,
            }}
            description={description}
            label={label}
            name={name}
            onBlur={onBlur}
            onChange={(value) => {
              if (handleChange) {
                handleChange(value as Date)
              }

              onChange(value)
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
    <DateInput
      classNames={{
        root: classes.root,
        label: classes.label,
        description: classes.description,
      }}
      description={description}
      label={label}
      name={name}
      onChange={(value) => {
        if (handleChange) {
          handleChange(value as Date)
        }
      }}
      value={value !== undefined ? value : null}
      {...(!isNil(error) && { error: error })}
      {...restProps}
    />
  )
}
