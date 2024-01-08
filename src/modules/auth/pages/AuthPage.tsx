'use client'

import { Title } from '@mantine/core'
import { AuthAccordion, BackToHome, LoginForm, RegisterForm } from '@modules/auth'
import { authStyles } from '@modules/auth'
import { clsx } from 'clsx'

const AuthPage = () => {
  return (
    <div className={'sm:h-full flex items-center justify-center'}>
      <div className={'container mx-auto py-8'}>
        <div className={'flex flex-col items-center mx-4'}>
          <Title order={1} className={clsx('mb-4 text-center', authStyles.authPageTitle)}>
            {'Dołącz do rozgrywki'}
          </Title>
          <AuthAccordion loginForm={<LoginForm />} registerForm={<RegisterForm />} />
          <BackToHome />
        </div>
      </div>
    </div>
  )
}

export default AuthPage
