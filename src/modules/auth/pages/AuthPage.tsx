'use client'

import { RegisterForm } from '@modules/auth'
import { clsx } from 'clsx'

import styles from './../styles/auth.module.css'

const AuthPage = () => {
  return (
    <div className={clsx('sm:h-full flex items-center justify-center', styles.page)}>
      <div className={'container mx-auto'}>
        <div className={'flex justify-center md:justify-end'}>
          <div
            className={clsx(
              'w-full h-[calc(100vh-2rem)] flex items-center md:max-w-[400px] m-4 px-8 rounded-md',
              styles.registerBox,
            )}
          >
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
