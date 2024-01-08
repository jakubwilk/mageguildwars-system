'use client'

import { ReactNode, useMemo } from 'react'
import { Divider, DividerProps } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import { authStyles } from '@modules/auth'
import { clsx } from 'clsx'

interface IProps {
  loginForm: ReactNode
  registerForm: ReactNode
}

const AuthAccordion = ({ loginForm, registerForm }: IProps) => {
  const { width } = useViewportSize()

  const isMobile = useMemo(() => width <= 768, [width])
  const dividerProps: DividerProps = useMemo(
    () => ({ orientation: isMobile ? 'horizontal' : 'vertical' }),
    [isMobile],
  )

  return (
    <div
      className={clsx(
        'w-full max-w-full md:max-w-[75vw] xl:max-w-[50vw] mx-4 mt-4 p-8 rounded-md',
        authStyles.authAccordionWrapper,
      )}
    >
      <div className={'flex flex-col md:flex-row gap-8 h-[inherit]'}>
        {loginForm}
        <Divider
          {...dividerProps}
          className={clsx(
            'flex items-center justify-center mb-2 mt-4 md:my-0',
            authStyles.authAccordionDivider,
          )}
        />
        {registerForm}
      </div>
    </div>
  )
}

export default AuthAccordion
