'use client'

import { BackToHome } from '@modules/auth'

const AuthPage = () => {
  return (
    <div className={'w-full h-full flex items-center justify-center'}>
      <div className={'container mx-auto py-8'}>
        <div className={'flex flex-col items-center'}>
          <h1>{'Auth'}</h1>
          <BackToHome />
        </div>
      </div>
    </div>
  )
}

export default AuthPage
