import { AuthPage as AuthModulePage } from '../../modules/auth/pages'

interface IProps {
  isLogin?: boolean
}

export function AuthPage({ isLogin }: IProps) {
  return <AuthModulePage isLogin={isLogin} />
}
