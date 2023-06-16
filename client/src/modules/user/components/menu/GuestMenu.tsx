import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { authRoutes } from '@auth'
import { Button, createStyles } from '@mantine/core'
import { clsx } from 'clsx'

const useStyles = createStyles((theme) => ({
  buttonBasic: {
    fontWeight: 400,
  },
  loginButton: {
    backgroundColor: theme.colors.gray[9],
    '&:hover, &:focus': {
      backgroundColor: theme.colors.gray[8],
    },
  },
}))

function GuestMenu() {
  const { t } = useTranslation()
  const { classes } = useStyles()

  return (
    <div className={'flex items-center justify-center w-full flex-col sm:justify-end md:w-auto sm:flex-row'}>
      <Button
        component={Link}
        to={authRoutes.loginPage()}
        className={clsx('duration-100 mb-2 mr-0 sm:mb-0 sm:mr-4 w-full sm:w-auto', classes.buttonBasic, classes.loginButton)}
      >
        {t('auth:action.login')}
      </Button>
      <Button
        component={Link}
        to={authRoutes.registerPage()}
        className={clsx('duration-100 w-full sm:w-auto', classes.buttonBasic)}
        color={'indigo'}
      >
        {t('auth:action.register')}
      </Button>
    </div>
  )
}

export default GuestMenu
