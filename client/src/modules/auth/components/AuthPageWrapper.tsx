import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

function AuthPageWrapper({ children }: IProps) {
  return (
    <div
      className={
        'flex w-auto h-full mt-10 mb-10 mx-6 md:mx-auto md:mt-0 md:mb-0 md:min-w-screen md:min-h-screen md:items-center md:justify-center'
      }
    >
      {children}
    </div>
  )
}

export default AuthPageWrapper
