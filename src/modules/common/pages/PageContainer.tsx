'use client'

import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

const PageContainer = ({ children }: IProps) => {
  return <div className={'container mx-auto px-4'}>{children}</div>
}

export default PageContainer
