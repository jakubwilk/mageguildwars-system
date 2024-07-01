import { ReactNode } from 'react'
import { Button as MantineButton, ButtonProps } from '@mantine/core'
import clsx from 'clsx'
import { Omit } from 'lodash'

import classes from './buttons.module.css'

type TMantineButtonProps = Omit<ButtonProps, 'autoContrast' | 'disabled' | 'fullWidth' | 'loading'>

export interface IButtonProps extends TMantineButtonProps {
  children: ReactNode
  hasAutoContrast?: boolean
  isDisabled?: boolean
  isFullWidth?: boolean
  isLoading?: boolean
  isPrimary?: boolean
}

export default function Button({
  children,
  variant = 'filled',
  radius = 'xs',
  size = 'md',
  hasAutoContrast,
  isDisabled,
  isFullWidth,
  isLoading,
  isPrimary = true,
  ...rest
}: IButtonProps) {
  return (
    <MantineButton
      autoContrast={hasAutoContrast}
      classNames={{
        root: clsx('duration-100', isPrimary ? classes.buttonRoot : ''),
        label: 'uppercase tracking-wide'
      }}
      disabled={isDisabled}
      fullWidth={isFullWidth}
      loading={isLoading}
      radius={radius}
      size={size}
      variant={variant}
      {...rest}
    >
      {children}
    </MantineButton>
  )
}