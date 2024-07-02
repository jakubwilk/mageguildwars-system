import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

export default function RootLayout({ children }: Readonly<IProps>) {
  return (
    <div className={'min-h-screen container mx-auto px-8'}>
      <div className={'w-full min-h-[inherit] flex items-center justify-center'}>{children}</div>
    </div>
  )
}
