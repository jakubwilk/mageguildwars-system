import { Fragment, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { authService, useAuthContext, useLogoutAccountMutation } from '@auth'
import { Button, createStyles, Divider, Group, Text, ThemeIcon } from '@mantine/core'
import { IconDatabaseCog, IconServerCog, IconShieldCog, IconSquareArrowLeft, IconUserCog } from '@tabler/icons-react'
import { USER_NAVIGATION, UserNavigation } from '@user'
import { clsx } from 'clsx'

const useStyles = createStyles((theme) => ({
  line: {
    borderColor: theme.colors.gray[2],
  },
  link: {
    display: 'block',
    padding: '0.5rem',
    color: 'inherit',
    textDecoration: 'none',
    '&:hover, &:focus': {
      backgroundColor: theme.colors.gray[0],
    },
  },
  button: {
    backgroundColor: 'transparent',
    padding: '0.5rem',
    color: theme.colors.gray[5],
    fontWeight: 400,
    '&:hover, &:focus': {
      backgroundColor: theme.colors.night[3],
    },
    '& .icon': {
      color: theme.colors.gray[8],
    },
    '& .mantine-Button-inner': {
      justifyContent: 'flex-start',
    },
  },
  text: {
    fontSize: '0.85rem',
  },
}))

function LoggedUserNavigation() {
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
      {USER_NAVIGATION.map((menu: UserNavigation, index) => (
        <Link key={menu.id} to={menu.link} className={clsx('w-full duration-150', classes.link)}>
          <Group>
            <ThemeIcon variant={'light'} color={menu.iconColor}>
              {menuIcons[index]}
            </ThemeIcon>
            <Text className={clsx('uppercase', classes.text)}>{menu.name}</Text>
          </Group>
        </Link>
      ))}
      <Button
        onClick={handleLogoutUser}
        className={clsx('w-full duration-150 uppercase', classes.button)}
        leftIcon={<IconSquareArrowLeft size={18} />}
      >
        {t('auth:action.logout')}
      </Button>
    </Fragment>
  )
}

export default LoggedUserNavigation
