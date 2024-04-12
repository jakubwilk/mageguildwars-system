import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Button as ButtonMantine, ButtonProps } from '@mantine/core'

import '@mantine/core/styles/Button.css'

type TButtonProps = ButtonProps & ComponentPropsWithoutRef<'button'>

interface IProps extends TButtonProps {
  children: string | ReactNode
  type: 'button' | 'submit' | 'reset' | undefined
  isFullWidth?: boolean
}

export function Button({
  children,
  type,
  onClick,
  isFullWidth,
  variant = 'filled',
  ...restProps
}: IProps) {
  return (
    <ButtonMantine
      fullWidth={isFullWidth}
      onClick={onClick}
      type={type}
      variant={variant}
      {...restProps}
    >
      {children}
    </ButtonMantine>
  )
}
