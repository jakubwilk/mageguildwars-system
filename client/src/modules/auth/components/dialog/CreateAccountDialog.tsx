import { ReactNode, useCallback } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import {
  authService,
  CREATE_ACCOUNT_INITIAL_VALUES,
  CreateAccountForm,
  CreateAccountRequestParams,
  useAuthContext,
  useCreateAccountMutation,
} from '@auth'
import { COLOR_PALETTE, MIN_PASSWORD_LENGTH, TextField, typedFieldName } from '@common'
import { joiResolver } from '@hookform/resolvers/joi'
import { Button, createStyles, MantineTheme } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { clsx } from 'clsx'
import Joi from 'joi'

const useStyles = createStyles((theme: MantineTheme) => ({
  submitButton: {
    '&.mantine-Button-root': {
      borderRadius: '0.125rem',
      backgroundColor: theme.colors[COLOR_PALETTE.JONQUIL][9],
      color: theme.black,
      '&:hover, &:focus': {
        backgroundColor: theme.colors[COLOR_PALETTE.JONQUIL][5],
      },
    },
  },
}))

interface IProps {
  closeButton: ReactNode
  handleCloseDialog: () => void
}

function CreateAccountDialog({ closeButton, handleCloseDialog }: IProps) {
  const { t } = useTranslation()
  const { setUser } = useAuthContext()
  const { classes } = useStyles()
  const { mutate: createAccount, isLoading } = useCreateAccountMutation()

  const form = useForm({
    mode: 'onBlur',
    defaultValues: CREATE_ACCOUNT_INITIAL_VALUES,
    resolver: joiResolver(
      Joi.object({
        login: Joi.string()
          .required()
          .messages({ 'string.empty': t('validation:fieldIsRequired') }),
        email: Joi.string()
          .email({ tlds: false })
          .messages({ 'string.empty': t('validation:fieldIsRequired'), 'string.email': t('validation:wrongEmailAddress') }),
        password: Joi.string()
          .min(MIN_PASSWORD_LENGTH)
          .messages({
            'string.empty': t('validation:fieldIsRequired'),
            'string.min': t('validation:fieldShouldContainAtLeastCharacters', {
              field: t('auth:field.password'),
              characters: MIN_PASSWORD_LENGTH,
            }),
          }),
        repeatPassword: Joi.string()
          .valid(Joi.ref('password'))
          .required()
          .messages({ 'string.empty': t('validation:fieldIsRequired'), 'any.only': t('validation:passwordAreNotTheSame') }),
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

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleCreateAccount)}>
        <TextField label={t('auth:field.login')} name={typedFieldName<CreateAccountForm>('login')} isRequired />
        <TextField label={t('auth:field.email')} name={typedFieldName<CreateAccountForm>('email')} isRequired />
        <TextField
          label={t('auth:field.password')}
          name={typedFieldName<CreateAccountForm>('password')}
          type={'password'}
          isRequired
          isPasswordInput
        />
        <TextField
          label={t('auth:field.repeatPassword')}
          name={typedFieldName<CreateAccountForm>('repeatPassword')}
          type={'password'}
          isRequired
          isPasswordInput
        />
        <div className={'flex items-center justify-end mt-8'}>
          {closeButton}
          <Button type={'submit'} className={clsx('ml-4', classes.submitButton)} loading={isLoading}>
            {t('common:action.register')}
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}

export default CreateAccountDialog
