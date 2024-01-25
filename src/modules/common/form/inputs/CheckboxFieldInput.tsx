'use client'

import { Controller, useFormContext } from 'react-hook-form'
import { Checkbox, CheckboxProps } from '@mantine/core'

interface IProps extends CheckboxProps {
  hasFormController?: boolean
}

const CheckboxFieldInput = ({
  name,
  label,
  onChange,
  onBlur,
  error,
  hasFormController = true,
  ...restProps
}: IProps) => {
  const { control } = useFormContext()

  return hasFormController ? (
    <Controller
      control={control}
      name={name as string}
      render={({ field: { name, onBlur, onChange }, fieldState: { error } }) => (
        <Checkbox
          label={label}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          error={!!error}
          description={error?.message}
          {...restProps}
        />
      )}
    />
  ) : (
    <Checkbox
      label={label}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      error={!!error}
      description={error}
      {...restProps}
    />
  )
}

export default CheckboxFieldInput
