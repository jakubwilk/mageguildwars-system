'use client'

import { useMemo } from 'react'
import { Control, Controller } from 'react-hook-form'
import { Checkbox, CheckboxProps } from '@mantine/core'
import clsx from 'clsx'
import { Omit } from 'lodash'

import classes from './controls.module.css'

type TMantineCheckboxProps = Omit<CheckboxProps, 'checked' | 'autoContrast' | 'indeterminate'>

interface ICheckboxFieldProps extends TMantineCheckboxProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: Control<any>
  isChecked?: boolean
  hasAutoContrast?: boolean
  hasIndeterminate?: boolean
}

export default function CheckboxField({
  control,
  name,
  label,
  isChecked,
  description,
  error,
  radius = 'xs',
  size = 'md',
  hasAutoContrast,
  hasIndeterminate,
  ...rest
}: ICheckboxFieldProps) {
  const inputSharedProps = useMemo(
    () => ({
      label,
      radius,
      size,
      autoContrast: hasAutoContrast,
      indeterminate: hasIndeterminate,
      variant: 'outline'
    }),
    [hasAutoContrast, hasIndeterminate, label, radius, size]
  )

  const inputClassNames = {
    label: clsx('uppercase mb-1', classes.checkboxLabel),
    description: clsx(' mb-2', classes.checkboxDescription),
    input: clsx('bg-transparent', classes.checkboxInput)
  }

  if (control && name) {
    return (
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onBlur, onChange }, fieldState: { error } }) => (
          <Checkbox
            checked={value}
            classNames={inputClassNames}
            description={description}
            error={error?.message}
            onBlur={onBlur}
            onChange={onChange}
            {...inputSharedProps}
            {...rest}
          />
        )}
      />
    )
  }

  return (
    <Checkbox
      checked={isChecked}
      classNames={inputClassNames}
      description={description}
      error={error}
      {...inputSharedProps}
      {...rest}
    />
  )
}
