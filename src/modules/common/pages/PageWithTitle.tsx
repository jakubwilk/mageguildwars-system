'use client'

import { ReactNode } from 'react'
import { Title } from '@mantine/core'

interface IProps {
  title: string
  children: ReactNode
}

const PageWithTitle = ({ title, children }: IProps) => {
  return (
    <main className={'w-full'}>
      <header className={'text-left'}>
        <Title order={2}>{title}</Title>
      </header>
      {children}
    </main>
  )
}

export default PageWithTitle
