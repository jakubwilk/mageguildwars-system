import { AuthWrapper } from '../components'

interface IProps {
  isLogin?: boolean
}

export function AuthPage({ isLogin }: IProps) {
  return (
    <div className={'container mx-auto px-4'}>
      <div className={'flex justify-end'}>
        <AuthWrapper isLogin={isLogin} />
      </div>
    </div>
  )
}
