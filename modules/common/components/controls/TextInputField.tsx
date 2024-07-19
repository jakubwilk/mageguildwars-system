'use client'

import { useMemo } from 'react'
import { Control, Controller } from 'react-hook-form'
import { Barlow } from 'next/font/google'
import { TextInput, TextInputProps } from '@mantine/core'
import clsx from 'clsx'
import { Omit } from 'lodash'

import classes from './controls.module.css'

const barlow = Barlow({
  subsets: ['latin-ext'],
  weight: ['400'],
  style: ['normal']
})

type TMantineTextInputProps = Omit<
  TextInputProps,
  'disabled' | 'pointer' | 'required' | 'withAsterisk' | 'withErrorStyles'
>

export interface ITextInputFieldProps extends TMantineTextInputProps {
  error?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: Control<any>
  isDisabled?: boolean
  isPointer?: boolean
  isRequired?: boolean
  hasAsterisk?: boolean
  hasErrorStyles?: boolean
}

export default function TextInputField({
  control,
  value,
  name,
  label,
  error,
  description,
  radius = 'xs',
  size = 'lg',
  isDisabled,
  isPointer,
  isRequired,
  hasAsterisk = true,
  hasErrorStyles,
  onChange,
  ...rest
}: ITextInputFieldProps) {
  const inputSharedProps = useMemo(
    () => ({
      description: description,
      disabled: isDisabled,
      label: label,
      pointer: isPointer,
      radius: radius,
      required: isRequired,
      size: size,
      withAsterisk: hasAsterisk,
      withErrorStyles: hasErrorStyles
    }),
    [description, hasAsterisk, hasErrorStyles, isDisabled, isPointer, isRequired, label, radius, size]
  )

  const inputClassNames = {
    root: classes.textRoot,
    label: clsx('uppercase mb-1', classes.textLabel),
    required: classes.textRequired,
    description: clsx(' mb-2', classes.textDescription),
    error: clsx('text-sm', classes.textError),
    input: clsx('p-4 bg-transparent', classes.textInput, barlow.className)
  }

  if (control && name) {
    return (
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onBlur, onChange }, fieldState: { error } }) => (
          <TextInput
            classNames={inputClassNames}
            error={error?.message}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            {...inputSharedProps}
            {...rest}
          />
        )}
      />
    )
  }

  return (
    <TextInput
      classNames={inputClassNames}
      error={error}
      onChange={onChange}
      value={value}
      {...inputSharedProps}
      {...rest}
    />
  )
}
