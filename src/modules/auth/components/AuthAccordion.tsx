'use client'

import { ReactNode, useCallback, useMemo, useState } from 'react'
import { Button } from '@mantine/core'
import { AuthPageTabEnum } from '@modules/auth'
import { useLocale } from '@modules/locale'
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

  return (
    <div className={'max-w-[70vh] max-h-[70vh]'}>
      <div className={'flex flex-col md:flex-row items-center'}>
        <div className={'flex items-center w-full h-full'}>
          {isLoginTab ? loginForm : registerForm}
        </div>
        <div className={'flex items-center w-full h-full'}>
          {isLoginTab ? (
            <Button onClick={handleSwitchToRegisterTab} unstyled>
              {translateByHook('actions.registerActionText')}
              <span>{translateByHook('actions.registerAction')}</span>
            </Button>
          ) : (
            <Button onClick={handleSwitchToLoginTab} unstyled>
              {translateByHook('actions.loginActionText')}
              <span>{translateByHook('actions.loginAction')}</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default AuthAccordion
