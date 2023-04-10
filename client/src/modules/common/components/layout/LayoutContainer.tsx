import { ReactNode } from 'react'

import { AppNavigation } from '../navigation'

import MainHeader from './MainHeader'

interface IProps {
  children: ReactNode
}

function LayoutContainer({ children }: IProps) {
  return (
    <div className={'container mx-auto'}>
      <MainHeader navigation={<AppNavigation />} />
      {children}
    </div>
  )
}

export default LayoutContainer
