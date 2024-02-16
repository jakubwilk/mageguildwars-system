import { ReactNode } from 'react'
import { Button as ButtonMantine, ButtonProps } from '@mantine/core'

import '@mantine/core/styles/Button.css'

interface IProps extends ButtonProps {
  children: string | ReactNode
  isFullWidth?: boolean
  handleChange?: () => void
}

export function Button({
  children,
  isFullWidth,
  handleChange,
  variant = 'filled',
  ...restProps
}: IProps) {
  return (
    <ButtonMantine
      fullWidth={isFullWidth}
      onChange={handleChange}
      variant={variant}
      {...restProps}
    >
      {children}
    </ButtonMantine>
  )
}
