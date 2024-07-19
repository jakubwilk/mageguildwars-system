'use client'

import { useMemo } from 'react'
import { Control, Controller } from 'react-hook-form'
import { Barlow } from 'next/font/google'
import { PasswordInput, PasswordInputProps } from '@mantine/core'
import clsx from 'clsx'
import { Omit } from 'lodash'

import classes from './controls.module.css'

const barlow = Barlow({
  subsets: ['latin-ext'],
  weight: ['400'],
  style: ['normal']
})

type TMantinePasswordInputProps = Omit<
  PasswordInputProps,
  'defaultVisible' | 'visible' | 'disabled' | 'pointer' | 'required' | 'withAsterisk' | 'withErrorStyles'
>

export interface IPasswordInputFieldProps extends TMantinePasswordInputProps {
  error?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: Control<any>
  isDefaultVisible?: boolean
  isVisible?: boolean
  isDisabled?: boolean
  isPointer?: boolean
  isRequired?: boolean
  hasAsterisk?: boolean
  hasErrorStyles?: boolean
}

export default function PasswordInputField({
  control,
  value,
  name,
  label,
  error,
  description,
  radius = 'xs',
  size = 'lg',
  isDefaultVisible,
  isVisible,
  isDisabled,
  isPointer,
  isRequired,
  hasAsterisk = true,
  hasErrorStyles,
  onChange,
  ...rest
}: IPasswordInputFieldProps) {
  const inputSharedProps = useMemo(
    () => ({
      defaultVisible: isDefaultVisible,
      visible: isVisible,
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
    [
      description,
      hasAsterisk,
      hasErrorStyles,
      isDefaultVisible,
      isDisabled,
      isPointer,
      isRequired,
      isVisible,
      label,
      radius,
      size
    ]
  )

  const inputClassNames = {
    root: classes.textRoot,
    label: clsx('uppercase mb-1', classes.textLabel),
    required: classes.textRequired,
    description: clsx(' mb-2', classes.textDescription),
    error: clsx('text-sm', classes.textError),
    input: clsx('p-4 bg-transparent', classes.textInput, barlow.className),
    visibilityToggle: classes.passwordVisibilityToggle
  }

  if (control && name) {
    return (
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onBlur, onChange }, fieldState: { error } }) => (
          <PasswordInput
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
    <PasswordInput
      classNames={inputClassNames}
      error={error}
      onChange={onChange}
      value={value}
      {...inputSharedProps}
      {...rest}
    />
  )
}
