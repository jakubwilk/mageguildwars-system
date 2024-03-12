import { ReactNode, useEffect } from 'react'

interface IProps {
  children: ReactNode
}

export function AuthLayout({ children }: IProps) {
  useEffect(() => {
    const body = document.querySelector('body')
    body?.classList.remove('overflow-y-hidden')
  }, [])

  return (
    <div className={'w-full h-full min-h-screen flex items-center justify-center'}>
      {children}
    </div>
  )
}
