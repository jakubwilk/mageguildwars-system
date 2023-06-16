import { AuthRoutesType } from '@auth'

export const authRoutes: AuthRoutesType = {
  loginPage: () => '/account-login',
  registerPage: () => '/account-create',
  forgetPasswordPage: () => '/account-reset-password',
}
