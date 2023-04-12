import { ReactNode, useCallback } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { COLOR_PALETTE, MIN_PASSWORD_LENGTH, TextField, typedFieldName } from '@common'
import { joiResolver } from '@hookform/resolvers/joi'
import { Button, createStyles, Grid, MantineTheme } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { clsx } from 'clsx'
import Joi from 'joi'

import { useLoginAccountMutation } from '../../api'
import { useAuthContext } from '../../hooks'
import { LOGIN_ACCOUNT_INITIAL_VALUES, LoginAccountForm, LoginAccountRequestParams } from '../../models'
import { authService } from '../../services'

const useStyles = createStyles((theme: MantineTheme) => ({
  inputWrapper: {
    '& .mantine-InputWrapper-label': {
      display: 'block',
      marginBottom: '0.5rem',
      color: theme.colors[COLOR_PALETTE.SNOW_WHITE][7],
    },
  },
  textField: {
    '& .mantine-Input-input, & .mantine-PasswordInput-input > input': {
      backgroundColor: theme.colors[COLOR_PALETTE.EERIE_BLACK][9],
      borderColor: theme.colors[COLOR_PALETTE.EERIE_BLACK][7],
      color: theme.colors[COLOR_PALETTE.SNOW_WHITE][7],
    },
  },
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

function LoginAccountDialog({ closeButton, handleCloseDialog }: IProps) {
  const { t } = useTranslation()
  const { setUser } = useAuthContext()
  const { classes } = useStyles()
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

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleLoginAccount)}>
        <Grid grow>
          <Grid.Col span={12}>
            <TextField
              label={t('auth:field.login')}
              name={typedFieldName<LoginAccountForm>('login')}
              className={classes.textField}
              classNameWrapper={classes.inputWrapper}
              isRequired
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <TextField
              label={t('auth:field.password')}
              name={typedFieldName<LoginAccountForm>('password')}
              type={'password'}
              className={classes.textField}
              classNameWrapper={classes.inputWrapper}
              isRequired
              isPasswordInput
            />
          </Grid.Col>
        </Grid>
        <div className={'flex items-center justify-end mt-8'}>
          {closeButton}
          <Button type={'submit'} className={clsx('duration-100 ml-4', classes.submitButton)} loading={isLoading}>
            {t('common:action.login')}
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}

export default LoginAccountDialog
