import { ReactNode } from 'react'
import { Title } from '@mantine/core'
import clsx from 'clsx'

import classes from './Content.module.css'

interface IProps {
  children: ReactNode
  title: string
  className?: string
}

export function Section({ children, title, className }: IProps) {
  return (
    <section
      className={clsx('w-full h-full p-4 md:p-8 rounded-xl', classes.section, className)}
    >
      <Title className={clsx('mb-4 md:mb-8', classes.title)} order={2}>
        {title}
      </Title>
      {children}
    </section>
  )
}
