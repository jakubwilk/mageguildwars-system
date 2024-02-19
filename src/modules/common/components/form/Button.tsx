import { ReactNode } from 'react'
import { Button as ButtonMantine, ButtonProps } from '@mantine/core'

import '@mantine/core/styles/Button.css'

interface IProps extends ButtonProps {
  children: string | ReactNode
  type: 'button' | 'submit' | 'reset' | undefined
  isFullWidth?: boolean
  handleChange?: () => void
}

export function Button({
  children,
  type,
  isFullWidth,
  handleChange,
  variant = 'filled',
  ...restProps
}: IProps) {
  return (
    <ButtonMantine
      fullWidth={isFullWidth}
      onChange={handleChange}
      type={type}
      variant={variant}
      {...restProps}
    >
      {children}
    </ButtonMantine>
  )
}
