'use client'
import { ReactNode } from 'react'
import { SidebarNavbar } from '@modules/common'

interface IProps {
  children: ReactNode
}

const AppLayout = ({ children }: IProps) => {
  return (
    <>
      <SidebarNavbar />
      {children}
    </>
  )
}

export default AppLayout
