import { ReactNode, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { typedFieldName } from '@common'
import { Button, createStyles, Grid, PasswordInput, TextInput } from '@mantine/core'
import { useForm, yupResolver } from '@mantine/form'
import { notifications } from '@mantine/notifications'
import { clsx } from 'clsx'
import * as Yup from 'yup'

import { useLoginAccountMutation } from '../../api'
import { useAuthContext } from '../../hooks'
import { LOGIN_ACCOUNT_INITIAL_VALUES, LoginAccountForm, LoginAccountRequestParams } from '../../models'
import { authService } from '../../services'

const useStyles = createStyles((theme) => ({
  input: {
    '& .mantine-TextInput-label, & .mantine-PasswordInput-label': {
      color: theme.colors.gray[6],
      marginBottom: 8,
      fontSize: '0.85rem',
    },
    '& .mantine-TextInput-input, & .mantine-PasswordInput-input': {
      backgroundColor: theme.colors.gray[3],
      borderColor: theme.colors.gray[3],
    },
    '& .mantine-TextInput-error, & .mantine-PasswordInput-error': {
      fontSize: '0.8rem',
    },
  },
  button: {
    fontSize: '0.85rem',
    fontWeight: 500,
    backgroundColor: theme.colors['dark-purple'][9],
    '&:hover, &:focus': {
      backgroundColor: theme.colors['dark-purple'][7],
    },
  },
}))

interface IProps {
  closeButton: ReactNode
  handleCloseDialog: () => void
}

function LoginAccountDialog({ closeButton, handleCloseDialog }: IProps) {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const { setUser } = useAuthContext()
  const { mutate: loginAccount, isLoading } = useLoginAccountMutation()

  const form = useForm({
    initialValues: LOGIN_ACCOUNT_INITIAL_VALUES,
    validate: yupResolver(
      Yup.object().shape({
        login: Yup.string().required(t('validation:fieldIsRequired') as string),
        password: Yup.string().required(t('validation:fieldIsRequired') as string),
      })
    ),
  })

  const handleLoginAccount = useCallback(
    (data: LoginAccountRequestParams) => {
      loginAccount(data, {
        onSuccess: ({ data }) => {
          authService.setLocalStorageItem('x-refresh-token', data.refreshToken)
          setUser(data.user)
          notifications.show({
            message: t('auth:message.accountCreatedSuccessfully'),
            color: 'green',
            autoClose: 5000,
            withCloseButton: true,
          })
          handleCloseDialog()
        },
      })
    },
    [loginAccount, handleCloseDialog, setUser, t]
  )

  useEffect(() => {
    form.clearErrors()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <form onSubmit={form.onSubmit(handleLoginAccount)}>
      <Grid gutter={'lg'} grow>
        <Grid.Col span={12}>
          <TextInput
            {...form.getInputProps('login')}
            label={t('auth:field.login')}
            name={typedFieldName<LoginAccountForm>('login')}
            className={classes.input}
            size={'md'}
            withAsterisk
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <PasswordInput
            {...form.getInputProps('password')}
            label={t('auth:field.password')}
            name={typedFieldName<LoginAccountForm>('password')}
            className={classes.input}
            size={'md'}
            withAsterisk
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <div className={'flex items-center justify-end mt-6'}>
            {closeButton}
            <Button type={'submit'} className={clsx('duration-100 ml-4', classes.button)} loading={isLoading} size={'md'}>
              {t('common:action.login')}
            </Button>
          </div>
        </Grid.Col>
      </Grid>
    </form>
  )
}

export default LoginAccountDialog
