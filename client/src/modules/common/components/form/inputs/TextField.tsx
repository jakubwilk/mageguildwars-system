import { HTMLInputTypeAttribute, ReactNode } from 'react'
import { Controller } from 'react-hook-form'
import { Input, PasswordInput } from '@mantine/core'
import { useId } from '@mantine/hooks'
import { MantineNumberSize, MantineSize } from '@mantine/styles'

interface IProps {
  label: string
  name: string
  placeholder?: string
  type?: HTMLInputTypeAttribute
  icon?: ReactNode
  size?: MantineSize
  radius?: MantineNumberSize
  className?: string
  isRequired?: boolean
  isPointer?: boolean
  isMultiline?: boolean
  isDisabled?: boolean
  isPasswordInput?: boolean
}

function TextField({
  label,
  name,
  placeholder,
  type,
  icon,
  size = 'md',
  radius,
  className,
  isRequired,
  isPointer,
  isMultiline,
  isDisabled,
  isPasswordInput,
}: IProps) {
  const id = useId()

  return (
    <Controller
      name={name}
      render={({ field: { name, value, onChange, onBlur }, fieldState: { error } }) => (
        <Input.Wrapper id={id} label={label} required={isRequired}>
          {isPasswordInput ? (
            <PasswordInput
              id={id}
              value={value}
              name={name}
              onChange={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              error={!!error}
              icon={icon}
              size={size}
              radius={radius}
              className={className}
              autoComplete={'off'}
              disabled={isDisabled}
            />
          ) : (
            <Input
              id={id}
              value={value}
              name={name}
              type={type}
              onChange={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              error={!!error}
              icon={icon}
              size={size}
              radius={radius}
              className={className}
              autoComplete={'off'}
              pointer={isPointer}
              multiline={isMultiline}
              disabled={isDisabled}
            />
          )}
          {error && <Input.Error>{error.message}</Input.Error>}
        </Input.Wrapper>
      )}
    />
  )
}

export default TextField
