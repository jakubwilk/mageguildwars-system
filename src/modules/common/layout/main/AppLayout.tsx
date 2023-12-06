'use client'
import { ReactNode } from 'react'
import { SideNavbar } from '@modules/common'

interface IProps {
  children: ReactNode
}

const AppLayout = ({ children }: IProps) => {
  return (
    <>
      <SideNavbar />
      {children}
    </>
  )
}

export default AppLayout
