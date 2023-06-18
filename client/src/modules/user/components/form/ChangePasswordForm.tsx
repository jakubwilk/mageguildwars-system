import { Fragment, useCallback, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useAuthContext } from '@auth'
import { MIN_PASSWORD_LENGTH } from '@common'
import { Button, createStyles, Grid, PasswordInput } from '@mantine/core'
import { useForm, yupResolver } from '@mantine/form'
import { CHANGE_PASSWORD_INITIAL_VALUES, ChangePasswordFormFields, ChangePasswordRequestParams, changePasswordSchema } from '@user'
import { clsx } from 'clsx'

const useStyles = createStyles((theme) => ({
  input: {
    '& .mantine-PasswordInput-input': {
      backgroundColor: theme.colors.dark[4],
      borderColor: theme.colors.dark[3],
      color: theme.colors.gray[4],
      '&[data-invalid]': {
        borderColor: theme.colors.red[6],
      },
    },
    '& .mantine-PasswordInput-label': {
      color: theme.colors.gray[4],
      fontSize: theme.fontSizes.sm,
    },
    '& .mantine-PasswordInput-description': {
      marginBottom: '0.5rem',
    },
    '& .mantine-PasswordInput-error': {
      color: theme.colors.red[6],
    },
    '& .mantine-PasswordInput-visibilityToggle': {
      '&:hover, &:focus': {
        backgroundColor: theme.colors.dark[3],
      },
    },
    '& .mantine-PasswordInput-innerInput': {
      color: theme.colors.gray[4],
    },
  },
  link: {
    color: theme.colors.gray[6],
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    '&:hover, &:focus': {
      color: theme.colors.indigo[6],
    },
  },
}))

interface IProps {
  handleClose: () => void
}

function ChangePasswordForm({ handleClose }: IProps) {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const { user } = useAuthContext()

  const form = useForm({
    initialValues: CHANGE_PASSWORD_INITIAL_VALUES,
    validate: yupResolver(changePasswordSchema),
  })

  const handleChangePasswordSubmit = useCallback(
    (values: ChangePasswordFormFields) => {
      const formValues: ChangePasswordRequestParams = {
        userId: user?.uid || '',
        newPassword: values.newPassword,
      }
      console.log('values', formValues)
    },
    [user?.uid]
  )

  useEffect(() => {
    form.clearErrors()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Fragment>
      <Helmet>
        <title>{t('user:page.settings.changePasswordTitle')}</title>
      </Helmet>
      <form onSubmit={form.onSubmit(handleChangePasswordSubmit)}>
        <Grid gutter={'lg'} grow>
          <Grid.Col span={12}>
            <PasswordInput
              label={t('user:fields.oldPassword')}
              size={'md'}
              className={clsx('duration-100', classes.input)}
              autoComplete={'off'}
              withAsterisk
              {...form.getInputProps('oldPassword')}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <PasswordInput
              label={t('user:fields.newPassword')}
              description={t('auth:message.passwordDescription', { min: MIN_PASSWORD_LENGTH })}
              size={'md'}
              className={clsx('duration-100', classes.input)}
              autoComplete={'off'}
              withAsterisk
              {...form.getInputProps('newPassword')}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <PasswordInput
              label={t('user:fields.repeatNewPassword')}
              size={'md'}
              className={clsx('duration-100', classes.input)}
              autoComplete={'off'}
              withAsterisk
              {...form.getInputProps('repeatNewPassword')}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <div className={'flex flex-row text-center'}>
              <Button variant={'light'} onClick={handleClose}>
                {t('common:action.cancel')}
              </Button>
              <Button type={'submit'}>{t('common:action.save')}</Button>
            </div>
          </Grid.Col>
        </Grid>
      </form>
    </Fragment>
  )
}

export default ChangePasswordForm
