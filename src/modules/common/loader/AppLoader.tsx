'use client'

import { Loader } from '@mantine/core'
import { isNil } from 'lodash'
import { ReactNode } from 'react'

interface IProps {
  customLoader?: ReactNode
  isFullPageLoader?: boolean
}

const AppLoader = ({ customLoader, isFullPageLoader }: IProps) => {
  if (isFullPageLoader && isNil(customLoader)) {
    return (
      <div className='w-full h-full absolute z-10 flex items-center justify-center'>
        <Loader color='violet' />;
      </div>
    )
  }

  if (!isFullPageLoader && isNil(customLoader)) {
    return (
      <div className='w-full h-full flex items-center justify-center'>
        <Loader color='violet' />;
      </div>
    )
  }

  return <>{customLoader}</>
}

export default AppLoader
