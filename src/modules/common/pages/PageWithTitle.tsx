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
  additionalTitleRightSideContent?: ReactNode
}

const PageWithTitle = ({
  title,
  children,
  isTitleAbsolute = false,
  additionalTitleLeftSideContent = null,
  additionalTitleRightSideContent = null,
}: IProps) => {
  const headerClass = useMemo(() => {
    if (isTitleAbsolute) {
      return 'rounded-xl'
    }

    return 'rounded-t-xl'
  }, [isTitleAbsolute])

  return (
    <main className={'w-full'}>
      <header
        className={clsx(
          'flex items-center justify-between text-left p-8',
          headerClass,
          pageStyles.header,
        )}
      >
        <div>
          {additionalTitleLeftSideContent}
          <Title order={2} className={pageStyles.title}>
            {title}
          </Title>
        </div>
        {additionalTitleRightSideContent}
      </header>
      {children}
    </main>
  )
}

export default PageWithTitle
