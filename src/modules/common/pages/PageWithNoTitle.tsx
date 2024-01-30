'use client'

import { ReactNode } from 'react'
import { pageStyles } from '@modules/common'
import { clsx } from 'clsx'

interface IProps {
  children: ReactNode
}

const PageWithNoTitle = ({ children }: IProps) => {
  return (
    <main className={'w-full'}>
      <div className={clsx('rounded-xl p-8', pageStyles.header)}>{children}</div>
    </main>
  )
}

export default PageWithNoTitle
