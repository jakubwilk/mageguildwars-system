'use client'

import { ReactNode, useMemo } from 'react'
import { Title } from '@mantine/core'
import { pageStyles } from '@modules/common'
import { clsx } from 'clsx'

interface IProps {
  title: string
  children: ReactNode
  isTitleAbsolute?: boolean
  additionalTitleLeftSideContent?: ReactNode
}

const PageWithTitle = ({
  title,
  children,
  isTitleAbsolute = false,
  additionalTitleLeftSideContent = null,
}: IProps) => {
  const headerClass = useMemo(() => {
    if (isTitleAbsolute) {
      return 'rounded-md'
    }

    return 'rounded-t-md'
  }, [isTitleAbsolute])

  return (
    <main className={'w-full'}>
      <header
        className={clsx(
          'flex items-center text-left p-8',
          headerClass,
          pageStyles.header,
        )}
      >
        {additionalTitleLeftSideContent}
        <Title order={2} className={pageStyles.title}>
          {title}
        </Title>
      </header>
      {children}
    </main>
  )
}

export default PageWithTitle
