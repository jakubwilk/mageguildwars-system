import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { commonRoutes } from '@common'
import { Button, createStyles, Grid, PasswordInput, TextInput, Title, Tooltip } from '@mantine/core'
import { UseFormReturnType } from '@mantine/form'
import { IconArrowNarrowLeft } from '@tabler/icons-react'
import { clsx } from 'clsx'

const useStyles = createStyles((theme) => ({
  authCard: {
    backgroundColor: theme.colors.dark[5],
  },
  title: {
    color: theme.colors.gray[3],
    fontWeight: 400,
    fontSize: theme.fontSizes.xl,
  },
  input: {
    '& .mantine-TextInput-input, & 	.mantine-PasswordInput-input': {
      backgroundColor: theme.colors.dark[4],
      borderColor: theme.colors.dark[3],
      color: theme.colors.gray[4],
      '&[data-invalid]': {
        borderColor: theme.colors.red[6],
      },
    },
    '& .mantine-TextInput-label, & .mantine-PasswordInput-label': {
      color: theme.colors.gray[4],
      fontSize: theme.fontSizes.sm,
    },
    '& .mantine-TextInput-description, & .mantine-PasswordInput-description': {
      marginBottom: '0.5rem',
    },
    '& .mantine-TextInput-error, & .mantine-PasswordInput-error': {
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

interface IProps<T> {
  form: UseFormReturnType<T>
  isButtonLoading: boolean
}

function LoginAccountFormContent<T>({ form, isButtonLoading }: IProps<T>) {
  const { t } = useTranslation()
  const { classes } = useStyles()

  return (
    <div className={clsx('w-full max-w-[450px] mx-auto p-6', classes.authCard)}>
      <Title order={2} className={clsx('text-center mb-4', classes.title)}>
        {t('auth:title.login')}
      </Title>
      <Grid gutter={'lg'} grow>
        <Grid.Col span={12}>
          <TextInput
            label={t('auth:field.login')}
            description={t('auth:message.loginDescription')}
            size={'md'}
            className={clsx('duration-100', classes.input)}
            withAsterisk
            {...form.getInputProps('login')}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <PasswordInput
            label={t('auth:field.password')}
            size={'md'}
            className={clsx('duration-100', classes.input)}
            autoComplete={'off'}
            withAsterisk
            {...form.getInputProps('password')}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <div className={'flex flex-col text-center'}>
            <Button type={'submit'} disabled={isButtonLoading}>
              {t('auth:button.login')}
            </Button>
            <Tooltip label={t('auth:tooltip.backToHomePage')} position={'bottom'} width={250} multiline>
              <Link to={commonRoutes.homePage()} className={clsx('flex items-center mx-auto mt-4 duration-100', classes.link)}>
                <IconArrowNarrowLeft size={18} strokeWidth={2} className={'mr-2'} />
                {t('auth:button.backToHomePage')}
              </Link>
            </Tooltip>
          </div>
        </Grid.Col>
      </Grid>
    </div>
  )
}

export default LoginAccountFormContent
