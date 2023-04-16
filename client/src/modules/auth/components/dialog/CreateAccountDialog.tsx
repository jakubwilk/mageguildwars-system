import { ReactNode, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {
  authService,
  CREATE_ACCOUNT_INITIAL_VALUES,
  CreateAccountForm,
  CreateAccountRequestParams,
  useAuthContext,
  useCreateAccountMutation,
} from '@auth'
import { MIN_PASSWORD_LENGTH, typedFieldName } from '@common'
import { Button, createStyles, Grid, TextInput } from '@mantine/core'
import { useForm, yupResolver } from '@mantine/form'
import { notifications } from '@mantine/notifications'
import { clsx } from 'clsx'
import * as Yup from 'yup'

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

function CreateAccountDialog({ closeButton, handleCloseDialog }: IProps) {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const { setUser } = useAuthContext()
  const { mutate: createAccount, isLoading } = useCreateAccountMutation()

  const form = useForm({
    initialValues: CREATE_ACCOUNT_INITIAL_VALUES,
    validate: yupResolver(
      Yup.object().shape({
        login: Yup.string().required(t('validation:fieldIsRequired') as string),
        email: Yup.string()
          .email(t('validation:wrongEmailAddress') as string)
          .required(t('validation:fieldIsRequired') as string),
        password: Yup.string()
          .min(
            MIN_PASSWORD_LENGTH,
            t('validation:fieldShouldContainAtLeastCharacters', {
              field: t('auth:field.password'),
              characters: MIN_PASSWORD_LENGTH,
            }) as string
          )
          .required(t('validation:fieldIsRequired') as string),
        // repeatPassword: Yup.string()
        //   .valid(Yup.ref('password'))
        //   .messages({ 'string.empty': t('validation:fieldIsRequired'), 'any.only': t('validation:passwordAreNotTheSame') }),
      })
    ),
  })

  const handleCreateAccount = useCallback(
    (data: CreateAccountRequestParams) => {
      createAccount(data, {
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
    [createAccount, handleCloseDialog, setUser, t]
  )

  useEffect(() => {
    form.clearErrors()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <form onSubmit={form.onSubmit(handleCreateAccount)}>
      <Grid grow>
        <Grid.Col span={12}>
          <TextInput
            {...form.getInputProps('login')}
            label={t('auth:field.login')}
            name={typedFieldName<CreateAccountForm>('login')}
            className={classes.input}
            size={'md'}
            withAsterisk
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <TextInput
            {...form.getInputProps('email')}
            label={t('auth:field.email')}
            name={typedFieldName<CreateAccountForm>('email')}
            className={classes.input}
            size={'md'}
            withAsterisk
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <TextInput
            {...form.getInputProps('password')}
            label={t('auth:field.password')}
            name={typedFieldName<CreateAccountForm>('password')}
            className={classes.input}
            size={'md'}
            withAsterisk
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <TextInput
            {...form.getInputProps('repeatPassword')}
            label={t('auth:field.repeatPassword')}
            name={typedFieldName<CreateAccountForm>('repeatPassword')}
            className={classes.input}
            size={'md'}
            withAsterisk
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <div className={'flex items-center justify-end mt-4'}>
            {closeButton}
            <Button type={'submit'} className={clsx('duration-100 ml-4')} loading={isLoading}>
              {t('common:action.register')}
            </Button>
          </div>
        </Grid.Col>
      </Grid>
    </form>
  )
}

export default CreateAccountDialog
