import { Fragment, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { authService, useAuthContext, useLogoutAccountMutation } from '@auth'
import { ActionIcon, Button, createStyles, Divider, Grid, Group, Text } from '@mantine/core'
import { IconDatabaseCog, IconServerCog, IconShieldCog, IconSquareArrowLeft, IconUserCog } from '@tabler/icons-react'
import { USER_NAVIGATION, UserNavigation } from '@user'
import { clsx } from 'clsx'

const useStyles = createStyles((theme) => ({
  line: {
    borderColor: theme.colors.gray[9],
  },
  link: {
    display: 'flex',
    justifyContent: 'center',
    textDecoration: 'none',
    height: '2.625rem',
    color: theme.colors.gray[5],
    fontWeight: 400,
    border: `1px solid ${theme.colors.gray[9]}`,
    borderRadius: '0.25rem',
    fontSize: '0.85rem',
    '&:hover, &:focus': {
      backgroundColor: theme.colors['dark-purple'][9],
      borderColor: theme.colors['dark-purple'][9],
    },
  },
  button: {
    color: theme.colors.gray[5],
    fontWeight: 400,
    borderColor: theme.colors.gray[9],
    fontSize: '0.85rem',
    '&:hover, &:focus': {
      backgroundColor: theme.colors['dark-purple'][9],
      borderColor: theme.colors['dark-purple'][9],
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
      <Grid className={'mb-2'}>
        {USER_NAVIGATION.map((menu: UserNavigation, index) => (
          <Grid.Col key={menu.id} span={6}>
            <Link to={menu.link} className={clsx('w-full duration-150', classes.link)} onClick={handleCloseSidebar}>
              <Group>
                <ActionIcon variant={'transparent'}>{menuIcons[index]}</ActionIcon>
                <Text className={clsx('uppercase', classes.text)}>{menu.name}</Text>
              </Group>
            </Link>
          </Grid.Col>
        ))}
      </Grid>
      <Button
        onClick={handleLogoutUser}
        className={clsx('w-full duration-150 uppercase', classes.button)}
        radius={'sm'}
        size={'md'}
        variant={'outline'}
        leftIcon={<IconSquareArrowLeft size={18} />}
        uppercase
      >
        {t('auth:action.logout')}
      </Button>
    </Fragment>
  )
}

export default LoggedUserNavigation
