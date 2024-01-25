'use client'

import { ReactNode, useMemo } from 'react'
import { Loader, LoaderProps } from '@mantine/core'
import { isNil } from 'lodash'

interface IProps {
  customLoader?: ReactNode
  isFullPageLoader?: boolean
}

const AppLoader = ({ customLoader, isFullPageLoader }: IProps) => {
  const loaderProps: LoaderProps = useMemo(() => ({ color: 'violet', size: 'xl' }), [])

  if (isFullPageLoader && isNil(customLoader)) {
    return (
      <div className={'w-full h-full absolute z-10 flex items-center justify-center'}>
        <Loader {...loaderProps} />
      </div>
    )
  }

  if (!isFullPageLoader && isNil(customLoader)) {
    return (
      <div className={'w-full h-full flex items-center justify-center'}>
        <Loader {...loaderProps} />
      </div>
    )
  }

  return <>{customLoader}</>
}

export default AppLoader
