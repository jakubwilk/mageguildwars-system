'use client'

import { ReactNode, useCallback, useMemo, useState } from 'react'
import { Button } from '@mantine/core'
import { AuthPageTabEnum, authStyles } from '@modules/auth'
import { useLocale } from '@modules/locale'
import { clsx } from 'clsx'
import { isEqual } from 'lodash'

interface IProps {
  loginForm: ReactNode
  registerForm: ReactNode
}

const AuthAccordion = ({ loginForm, registerForm }: IProps) => {
  const { translateByHook } = useLocale('auth')
  const [card, setCard] = useState<AuthPageTabEnum>(AuthPageTabEnum.LOGIN)

  const isLoginTab = useMemo(() => isEqual(card, AuthPageTabEnum.LOGIN), [card])

  const handleSwitchToLoginTab = useCallback(() => setCard(AuthPageTabEnum.LOGIN), [])

  const handleSwitchToRegisterTab = useCallback(
    () => setCard(AuthPageTabEnum.REGISTER),
    [],
  )

  const buttonContent = useMemo(() => {
    const title = isLoginTab ? 'actions.registerAction' : 'actions.loginAction'
    const description = isLoginTab
      ? 'actions.registerActionText'
      : 'actions.loginActionText'

    return (
      <div
        className={clsx(
          'flex flex-col items-start p-4',
          authStyles.authAccordionButtonInner,
        )}
      >
        {translateByHook(description)}
        <span>{translateByHook(title)}</span>
      </div>
    )
  }, [isLoginTab, translateByHook])

  return (
    <div className={clsx('w-full max-w-[70vw] mt-4', authStyles.authAccordionWrapper)}>
      <div className={'grid grid-cols-2'}>
        <div className={'flex items-center w-full h-full p-4'}>
          {isLoginTab ? loginForm : registerForm}
        </div>
        <div
          className={clsx(
            'flex items-center w-full h-full',
            authStyles.authAccordionButtonDivider,
          )}
        >
          <Button
            onClick={isLoginTab ? handleSwitchToRegisterTab : handleSwitchToLoginTab}
            className={clsx(
              'flex items-end h-full w-full cursor-pointer',
              authStyles.authAccordionButton,
              isLoginTab
                ? authStyles.authAccordionRegisterButton
                : authStyles.authAccordionLoginButton,
            )}
            loading={false}
            unstyled
          >
            {buttonContent}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AuthAccordion
