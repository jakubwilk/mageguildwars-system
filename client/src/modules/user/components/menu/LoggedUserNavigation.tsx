import { Fragment, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { authService, useAuthContext, useLogoutAccountMutation } from '@auth'
import { Button, createStyles, Divider, Grid } from '@mantine/core'
import { IconDatabaseCog, IconServerCog, IconShieldCog, IconSquareArrowLeft, IconUserCog } from '@tabler/icons-react'
import { USER_NAVIGATION, UserNavigation } from '@user'
import { clsx } from 'clsx'

const useStyles = createStyles((theme) => ({
  line: {
    borderColor: theme.colors.gray[9],
  },
  link: {
    color: theme.colors.gray[5],
    fontWeight: 600,
    fontSize: '0.85rem',
    '&:hover, &:focus': {
      backgroundColor: theme.colors['dark-purple'][9],
      color: theme.white,
    },
    '& .mantine-Button-inner': {
      justifyContent: 'flex-start',
    },
  },
  button: {
    color: theme.colors.red[5],
    fontWeight: 600,
    fontSize: '0.85rem',
    '&:hover, &:focus': {
      backgroundColor: theme.colors.red[9],
      color: theme.white,
    },
    '& .mantine-Button-inner': {
      justifyContent: 'flex-start',
    },
  },
  text: {
    fontSize: '0.85rem',
  },
}))

interface IProps {
  handleCloseSidebar: () => void
}

function LoggedUserNavigation({ handleCloseSidebar }: IProps) {
  const { setUser } = useAuthContext()
  const { t } = useTranslation()
  const { classes } = useStyles()
  const { mutate: logoutAccount } = useLogoutAccountMutation()

  const handleLogoutUser = useCallback(() => {
    logoutAccount(null, {
      onSuccess: () => {
        setUser(null)
        authService.removeLocalStorageItem('x-refresh-token')
      },
    })
  }, [logoutAccount, setUser])

  const menuIcons = useMemo(
    () => [<IconUserCog size={18} />, <IconShieldCog size={18} />, <IconServerCog size={18} />, <IconDatabaseCog size={18} />],
    []
  )

  return (
    <Fragment>
      <Divider className={clsx('my-4', classes.line)} />
      <Grid className={'mb-2'} gutter={'sm'}>
        {USER_NAVIGATION.map((menu: UserNavigation, index) => (
          <Grid.Col key={menu.id} span={12}>
            <Button
              component={Link}
              to={menu.link}
              className={clsx('w-full duration-150', classes.link)}
              radius={'sm'}
              size={'md'}
              variant={'subtle'}
              onClick={handleCloseSidebar}
              leftIcon={menuIcons[index]}
            >
              {menu.name}
            </Button>
          </Grid.Col>
        ))}
        <Grid.Col span={12}>
          <Button
            onClick={handleLogoutUser}
            className={clsx('w-full duration-150', classes.button)}
            radius={'sm'}
            size={'md'}
            variant={'subtle'}
            leftIcon={<IconSquareArrowLeft size={18} />}
          >
            {t('auth:action.logout')}
          </Button>
        </Grid.Col>
      </Grid>
    </Fragment>
  )
}

export default LoggedUserNavigation
