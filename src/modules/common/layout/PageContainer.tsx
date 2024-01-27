'use client'

import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

const PageContainer = ({ children }: IProps) => {
  return (
    <div className={'flex flex-col items-center justify-between p-24'}>{children}</div>
  )
}

export default PageContainer
