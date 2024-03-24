import { Link } from 'react-router-dom'
import { Text, Tooltip } from '@mantine/core'
import { IconArrowNarrowLeft } from '@tabler/icons-react'
import clsx from 'clsx'

import { useResources } from '../../resources/hooks'

import { LoginForm } from './login/LoginForm.tsx'
import { RegisterForm } from './register/RegisterForm.tsx'

import classes from './register/Register.module.css'

interface IProps {
  isLogin?: boolean
}

export function AuthWrapper({ isLogin }: IProps) {
  const { getResource } = useResources('AUTH')

  return (
    <div
      className={clsx(
        'flex items-end rounded-md h-full w-full my-4 min-h-[calc(100vh-32px)] sm:max-w-[400px]',
        classes.wrapper,
      )}
    >
      <div className={'m-8'}>
        <div className={'flex justify-center mb-8'}>
          <img
            alt={getResource('REGISTER_WRAPPER_LOGO_ALT_TEXT')}
            src={'https://mageguildwars.pl/images/mgw_modern/logo.png'}
          />
        </div>
        {isLogin ? <LoginForm /> : <RegisterForm />}
        <div className={'flex justify-center'}>
          <Tooltip
            color={'gray'}
            label={getResource('REGISTER_WRAPPER_BACK_LINK_TOOLTIP_TEXT')}
          >
            <Link
              className={clsx(
                'flex items-center justify-center mt-8',
                classes.backToHomeLink,
              )}
              to={'/'}
            >
              <IconArrowNarrowLeft className={'mr-1'} stroke={1.5} />
              <Text className={classes.backToHomeText}>
                {getResource('REGISTER_WRAPPER_BACK_LINK_TEXT')}
              </Text>
            </Link>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}
