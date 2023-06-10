import { Fragment, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useAuthContext } from '@auth'
import { Anchor, Burger, createStyles, Header, Tooltip, useMantineTheme } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import { clsx } from 'clsx'

import { useAppLayoutContext } from '../../hooks'
import { Logo } from '../logo'

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.colors.night[6],
    borderColor: 'transparent',
  },
  anchorButton: {
    color: theme.colors.gray[4],
    marginLeft: '1rem',
    padding: '10px 20px',
    '&:hover, &:focus': {
      textDecoration: 'none',
    },
  },
  login: {
    backgroundColor: theme.colors['dark-purple'][8],
    '&:hover, &:focus': {
      color: theme.white,
      backgroundColor: theme.colors['dark-purple'][7],
    },
  },
  register: {
    marginRight: '1rem',
    backgroundColor: theme.colors['night'][3],
    '&:hover, &:focus': {
      color: theme.white,
      backgroundColor: theme.colors['night'][2],
    },
  },
  user: {
    backgroundColor: theme.colors['dark-purple'][8],
    '&:hover, &:focus': {
      color: theme.white,
      backgroundColor: theme.colors['dark-purple'][7],
    },
  },
  logout: {
    marginRight: '1rem',
    backgroundColor: theme.colors.red[3],
    '&:hover, &:focus': {
      color: theme.white,
      backgroundColor: theme.colors.red[2],
    },
  },
}))

interface IProps {
  isOpen: boolean
  handleOpen: () => void
}

function AppHeader({ isOpen, handleOpen }: IProps) {
  const theme = useMantineTheme()
  const { setIsAuthModalOpen } = useAppLayoutContext()
  const { width } = useViewportSize()
  const { isUser } = useAuthContext()
  const { classes } = useStyles()
  const { t } = useTranslation()

  const handleOpenLoginDialog = useCallback(() => setIsAuthModalOpen(true), [setIsAuthModalOpen])

  const headerHeight = useMemo(() => {
    if (width <= 720) {
      return 150
    }

    return 70
  }, [width])

  return (
    <Header height={{ base: headerHeight, sm: 100, md: 110 }} className={clsx('px-4', classes.header)}>
      <div className={'container mx-auto h-full'}>
        <div className={'flex items-center justify-center flex-col md:flex-row md:justify-between h-full'}>
          <Link to={'/'}>
            <Logo />
          </Link>

          <div className={'flex items-center w-full md:w-auto mt-4 md:mt-0'}>
            {isUser ? (
              <Fragment>
                <Anchor
                  href={'/account'}
                  className={clsx('duration-150 rounded-md text-center flex-1 md:flex-auto', classes.anchorButton, classes.user)}
                >
                  {t('common:action.account')}
                </Anchor>
                <Anchor
                  component={'button'}
                  type={'button'}
                  className={clsx('duration-150 rounded-md text-center flex-1 md:flex-auto', classes.anchorButton, classes.logout)}
                >
                  {t('common:action.logout')}
                </Anchor>
              </Fragment>
            ) : (
              <Fragment>
                <Anchor
                  component={'button'}
                  type={'button'}
                  onClick={handleOpenLoginDialog}
                  className={clsx('duration-150 rounded-md text-center flex-1 md:flex-auto', classes.anchorButton, classes.login)}
                >
                  {t('common:action.login')}
                </Anchor>
                <Anchor
                  href={'/create-account'}
                  className={clsx('duration-150 rounded-md text-center flex-1 md:flex-auto', classes.anchorButton, classes.register)}
                >
                  {t('common:action.register')}
                </Anchor>
              </Fragment>
            )}
            <Tooltip label={t('common:action.openNavigation')} position={'bottom'} withArrow>
              <Burger opened={isOpen} onClick={handleOpen} size={'sm'} color={theme.colors.gray[1]} />
            </Tooltip>
          </div>
        </div>
      </div>
    </Header>
  )
}

export default AppHeader
