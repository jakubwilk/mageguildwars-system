import { useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import {
  CREATE_ACCOUNT_INITIAL_VALUES,
  CreateAccountFormContent,
  CreateAccountRequestParams,
  createAccountSchema,
  useAuthContext,
  useCreateAccountMutation,
} from '@auth'
import { commonRoutes, Logo } from '@common'
import { Tooltip } from '@mantine/core'
import { useForm, yupResolver } from '@mantine/form'
import { notifications } from '@mantine/notifications'

function CreateAccountForm() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { setUser } = useAuthContext()
  const { mutate: createAccount, isLoading } = useCreateAccountMutation()
  const form = useForm<CreateAccountRequestParams>({
    initialValues: CREATE_ACCOUNT_INITIAL_VALUES,
    validate: yupResolver(createAccountSchema),
  })

  const handleCreateAccountSubmit = useCallback(
    (values: CreateAccountRequestParams) => {
      createAccount(values, {
        onSuccess: ({ data }) => {
          setUser(data.user)
          notifications.show({
            message: t('auth:message.accountCreatedSuccessfully'),
            color: 'green',
            autoClose: 5000,
            withCloseButton: true,
          })
          navigate(commonRoutes.homePage())
        },
      })
    },
    [createAccount, navigate, setUser, t]
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
      <form onSubmit={form.onSubmit(handleCreateAccountSubmit)}>
        <CreateAccountFormContent form={form} isButtonLoading={isLoading} />
      </form>
    </div>
  )
}

export default CreateAccountForm
