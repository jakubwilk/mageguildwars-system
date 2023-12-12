'use client'

import { AuthAccordion, BackToHome, LoginForm, RegisterForm } from '@modules/auth'

const AuthPage = () => {
  return (
    <div className={'w-full h-full flex items-center justify-center'}>
      <div className={'container mx-auto py-8'}>
        <div className={'flex flex-col items-center'}>
          <h1>{'Auth'}</h1>
          <AuthAccordion loginForm={<LoginForm />} registerForm={<RegisterForm />} />
          <BackToHome />
        </div>
      </div>
    </div>
  )
}

export default AuthPage
