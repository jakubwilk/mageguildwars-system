import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { LOGIN_ACCOUNT_INITIAL_VALUES, LoginAccountFormContent, LoginAccountFormFields, loginSchema } from '@auth'
import { Logo } from '@common'
import { Tooltip } from '@mantine/core'
import { useForm, yupResolver } from '@mantine/form'

function LoginAccountForm() {
  const { t } = useTranslation()
  const form = useForm({
    initialValues: LOGIN_ACCOUNT_INITIAL_VALUES,
    validate: yupResolver(loginSchema),
  })

  const handleLoginSubmit = useCallback((values: LoginAccountFormFields) => {
    console.log('values', values)
  }, [])

  return (
    <div className={'flex flex-col items-center w-full'}>
      <Tooltip label={t('common:mainPage.title')}>
        <Link to={'/'} className={'mb-4'}>
          <Logo />
        </Link>
      </Tooltip>
      <form onSubmit={form.onSubmit(handleLoginSubmit)}>
        <LoginAccountFormContent<LoginAccountFormFields> form={form} />
      </form>
    </div>
  )
}

export default LoginAccountForm
