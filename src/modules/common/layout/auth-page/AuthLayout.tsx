import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

const AuthLayout = ({ children }: IProps) => {
  return <>{children}</>
}

export default AuthLayout
