import { ReactNode, useCallback, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { MIN_PASSWORD_LENGTH, TextField, typedFieldName } from '@common'
import { joiResolver } from '@hookform/resolvers/joi'
import { Button, createStyles, Grid } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { clsx } from 'clsx'
import Joi from 'joi'

import { useLoginAccountMutation } from '../../api'
import { useAuthContext } from '../../hooks'
import { LOGIN_ACCOUNT_INITIAL_VALUES, LoginAccountForm, LoginAccountRequestParams } from '../../models'
import { authService } from '../../services'

const useStyles = createStyles((theme) => ({
  input: {
    '& .mantine-Input-input, & .mantine-PasswordInput-innerInput': {
      backgroundColor: theme.colors.night[7],
      borderColor: theme.colors.night[4],
      color: theme.colors.gray[6],
    },
    '& .mantine-Input.Wrapper-label': {
      color: theme.colors.gray[6],
    },
  },
  button: {
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
    mode: 'onBlur',
    defaultValues: LOGIN_ACCOUNT_INITIAL_VALUES,
    resolver: joiResolver(
      Joi.object({
        login: Joi.string()
          .required()
          .messages({ 'string.empty': t('validation:fieldIsRequired') }),
        password: Joi.string()
          .min(MIN_PASSWORD_LENGTH)
          .messages({
            'string.empty': t('validation:fieldIsRequired'),
            'string.min': t('validation:fieldShouldContainAtLeastCharacters', {
              field: t('auth:field.password'),
              characters: MIN_PASSWORD_LENGTH,
            }),
          }),
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
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleLoginAccount)}>
        <Grid grow>
          <Grid.Col span={12}>
            <TextField
              label={t('auth:field.login')}
              name={typedFieldName<LoginAccountForm>('login')}
              className={classes.input}
              isRequired
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <TextField
              label={t('auth:field.password')}
              name={typedFieldName<LoginAccountForm>('password')}
              type={'password'}
              className={classes.input}
              isRequired
              isPasswordInput
            />
          </Grid.Col>
        </Grid>
        <div className={'flex items-center justify-end mt-4'}>
          {closeButton}
          <Button type={'submit'} className={clsx('duration-100 ml-4', classes.button)} loading={isLoading}>
            {t('common:action.login')}
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}

export default LoginAccountDialog
