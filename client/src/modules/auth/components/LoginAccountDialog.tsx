import { useCallback, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import {
  authService,
  LOGIN_ACCOUNT_INITIAL_VALUES,
  LoginAccountForm,
  LoginAccountRequestParams,
  useAuthContext,
  useLoginAccountMutation,
} from '@auth'
import { REFRESH_TOKEN, typedFieldName } from '@common'
import { Button, createStyles, Grid, Modal, PasswordInput, TextInput, Title } from '@mantine/core'
import { useForm, yupResolver } from '@mantine/form'
import { notifications } from '@mantine/notifications'
import { clsx } from 'clsx'
import * as Yup from 'yup'

const useStyles = createStyles((theme) => ({
  dialog: {
    '& .mantine-Modal-content': {
      backgroundColor: theme.colors.night[6],
      border: `1px solid ${theme.colors.gray[9]}`,
    },
  },
  title: {
    color: theme.colors.gray[4],
    fontWeight: 600,
  },
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
  isOpen: boolean
  handleClose: () => void
}

function LoginAccountDialog({ isOpen, handleClose }: IProps) {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const { setUser } = useAuthContext()
  const { mutate: loginAccount, isLoading } = useLoginAccountMutation()

  const closeButton = useMemo(
    () => (
      <Button onClick={handleClose} className={clsx('duration-100', classes.button)} size={'md'}>
        {t('common:action.cancel')}
      </Button>
    ),
    [handleClose, classes.button, t]
  )

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
          setUser(data.user)
          authService.setLocalStorageItem(REFRESH_TOKEN, data.refreshToken)
          notifications.show({
            message: t('auth:message.userLoggedSuccessfully', { name: data.user.login }),
            color: 'green',
            autoClose: 5000,
            withCloseButton: true,
          })
          handleClose()
        },
      })
    },
    [handleClose, loginAccount, setUser, t]
  )

  useEffect(() => {
    form.clearErrors()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Modal opened={isOpen} onClose={handleClose} size={'lg'} radius={'sm'} withCloseButton={false} className={classes.dialog}>
      <Title size={'h4'} className={clsx('mb-4', classes.title)}>
        {t('auth:tab.loginTitle')}
      </Title>
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
            <div className={'flex items-center justify-end'}>
              {closeButton}
              <Button type={'submit'} className={clsx('duration-100 ml-4', classes.button)} loading={isLoading} size={'md'}>
                {t('common:action.login')}
              </Button>
            </div>
          </Grid.Col>
        </Grid>
      </form>
    </Modal>
  )
}

export default LoginAccountDialog
