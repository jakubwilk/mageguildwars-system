import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

export function AuthLayout({ children }: IProps) {
  return (
    <div className={'w-full h-full min-h-screen flex items-center justify-center'}>
      {children}
    </div>
  )
}
