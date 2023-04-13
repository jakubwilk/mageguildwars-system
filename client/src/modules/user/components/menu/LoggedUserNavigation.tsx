import { Fragment, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { authService, useAuthContext, useLogoutAccountMutation } from '@auth'
import { createStyles, Divider, Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core'
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
    padding: '0.5rem',
    '&:hover, &:focus': {
      backgroundColor: theme.colors.gray[0],
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
      <UnstyledButton onClick={handleLogoutUser} className={clsx('w-full duration-150', classes.button)}>
        <Group>
          <ThemeIcon variant={'light'} color={'red'}>
            <IconSquareArrowLeft size={18} />
          </ThemeIcon>
          <Text className={clsx('uppercase', classes.text)}>{t('auth:action.logout')}</Text>
        </Group>
      </UnstyledButton>
    </Fragment>
  )
}

export default LoggedUserNavigation
