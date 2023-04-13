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

const useStyles = createStyles(() => ({
  inputWrapper: {
    '& .mantine-InputWrapper-label': {
      display: 'block',
      marginBottom: '0.5rem',
    },
  },
  submitButton: {
    '&.mantine-Button-root': {
      borderRadius: '0.125rem',
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
              classNameWrapper={classes.inputWrapper}
              isRequired
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <TextField
              label={t('auth:field.password')}
              name={typedFieldName<LoginAccountForm>('password')}
              type={'password'}
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
