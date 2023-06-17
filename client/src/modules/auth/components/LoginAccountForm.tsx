import { useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import {
  authService,
  LOGIN_ACCOUNT_INITIAL_VALUES,
  LoginAccountFormContent,
  LoginAccountFormFields,
  LoginAccountRequestParams,
  loginSchema,
  useAuthContext,
  useLoginAccountMutation,
} from '@auth'
import { commonRoutes, Logo, REFRESH_TOKEN } from '@common'
import { Tooltip } from '@mantine/core'
import { useForm, yupResolver } from '@mantine/form'
import { notifications } from '@mantine/notifications'

function LoginAccountForm() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { setUser } = useAuthContext()
  const { mutate: loginAccount, isLoading } = useLoginAccountMutation()
  const form = useForm<LoginAccountRequestParams>({
    initialValues: LOGIN_ACCOUNT_INITIAL_VALUES,
    validate: yupResolver(loginSchema),
  })

  const handleLoginSubmit = useCallback(
    (values: LoginAccountRequestParams) => {
      loginAccount(values, {
        onSuccess: ({ data }) => {
          setUser(data.user)
          authService.setLocalStorageItem(REFRESH_TOKEN, data.refreshToken)
          notifications.show({
            message: t('auth:message.userLoggedSuccessfully', { name: data.user.login }),
            color: 'green',
            autoClose: 5000,
            withCloseButton: true,
          })
          navigate(commonRoutes.homePage())
        },
      })
    },
    [navigate, loginAccount, setUser, t]
  )

  useEffect(() => {
    form.clearErrors()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={'flex flex-col items-center w-full'}>
      <Tooltip label={t('common:mainPage.title')}>
        <Link to={'/'} className={'mb-4'}>
          <Logo />
        </Link>
      </Tooltip>
      <form onSubmit={form.onSubmit(handleLoginSubmit)}>
        <LoginAccountFormContent<LoginAccountFormFields> form={form} isButtonLoading={isLoading} />
      </form>
    </div>
  )
}

export default LoginAccountForm
