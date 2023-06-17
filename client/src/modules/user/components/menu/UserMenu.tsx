import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import { authService, useAuthContext, useLogoutAccountMutation } from '@auth'
import { BREAKPOINT, commonRoutes, REFRESH_TOKEN } from '@common'
import { Button, createStyles, Text, Tooltip } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import { notifications } from '@mantine/notifications'
import { IconPower } from '@tabler/icons-react'
import { clsx } from 'clsx'

const useStyles = createStyles((theme) => ({
  accountButton: {
    backgroundColor: theme.colors.dark[5],
    fontWeight: 400,
  },
}))

function UserMenu() {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const navigate = useNavigate()
  const { user, setUser } = useAuthContext()
  const { width } = useViewportSize()
  const { mutate: logoutAccount, isLoading } = useLogoutAccountMutation()

  const username = useMemo(() => user?.login, [user])
  const isMobileView = useMemo(() => width <= BREAKPOINT.MD, [width])

  const handleUserLogout = useCallback(() => {
    logoutAccount(null, {
      onSuccess: () => {
        setUser(null)
        authService.removeLocalStorageItem(REFRESH_TOKEN)
        notifications.show({
          message: t('auth:message.userLogoutSuccessfully'),
          color: 'green',
          autoClose: 5000,
          withCloseButton: true,
        })
        navigate(commonRoutes.homePage())
      },
    })
  }, [logoutAccount, navigate, setUser, t])

  return (
    <div className={'w-full md:w-auto flex items-center flex-col sm:flex-row justify-end'}>
      <Button component={Link} to={'/'} className={clsx('duration-100 mb-4 w-full sm:w-auto sm:mb-0 sm:mr-4', classes.accountButton)}>
        {username}
      </Button>
      <Tooltip label={t('auth:tooltip.logoutFromAccount')} position={'bottom'} disabled={isMobileView}>
        <Button
          color={'red'}
          className={clsx('duration-100 w-full sm:w-auto md:w-[2.25rem] md:px-0')}
          onClick={handleUserLogout}
          loading={isLoading}
        >
          {isMobileView && <Text>{t('auth:action.logout')}</Text>}
          <IconPower size={20} strokeWidth={2} />
        </Button>
      </Tooltip>
    </div>
  )
}

export default UserMenu
