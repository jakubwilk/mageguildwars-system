'use client'

import { Controller, useFormContext } from 'react-hook-form'
import {
  PasswordInput,
  PasswordInputProps,
  TextInput,
  TextInputProps,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { inputStyles } from '@modules/common'

type MantineInputProps = TextInputProps & PasswordInputProps

interface IProps extends MantineInputProps {
  hasFormController?: boolean
  isPassword?: boolean
}

const TextFieldInput = ({
  name,
  label,
  placeholder,
  description,
  onChange,
  onBlur,
  error,
  hasFormController = true,
  isPassword = false,
  ...restProps
}: IProps) => {
  const { control } = useFormContext()
  const [visible, { toggle }] = useDisclosure(false)

  return hasFormController ? (
    <Controller
      control={control}
      name={name as string}
      render={({
        field: { name, onBlur, onChange, ...otherFormProps },
        fieldState: { error },
      }) =>
        isPassword ? (
          <PasswordInput
            label={label}
            name={name}
            placeholder={placeholder}
            onBlur={onBlur}
            onChange={onChange}
            classNames={{ description: inputStyles.description }}
            {...(error && { error: error?.message || description })}
            {...(description && { description })}
            visible={visible}
            onVisibilityChange={toggle}
            {...otherFormProps}
            {...restProps}
          />
        ) : (
          <TextInput
            label={label}
            name={name}
            placeholder={placeholder}
            onBlur={onBlur}
            onChange={onChange}
            classNames={{ description: inputStyles.description }}
            {...(error && { error: error?.message || description })}
            {...(description && { description })}
            {...otherFormProps}
            {...restProps}
          />
        )
      }
    />
  ) : isPassword ? (
    <PasswordInput
      label={label}
      name={name}
      placeholder={placeholder}
      onBlur={onBlur}
      onChange={onChange}
      classNames={{ description: inputStyles.description }}
      {...(error && { error: error || description })}
      {...(description && { description })}
      visible={visible}
      onVisibilityChange={toggle}
      {...restProps}
    />
  ) : (
    <TextInput
      label={label}
      name={name}
      placeholder={placeholder}
      onBlur={onBlur}
      onChange={onChange}
      classNames={{ description: inputStyles.description }}
      {...(error && { error: error || description })}
      {...(description && { description })}
      {...restProps}
    />
  )
}

export default TextFieldInput
