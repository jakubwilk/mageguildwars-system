import { Fragment, useCallback } from 'react'
import { useAuthContext } from '@auth'
import { useAppConfigContext } from '@common'
import { Anchor, createStyles, Skeleton, Tooltip } from '@mantine/core'
import { clsx } from 'clsx'

const useStyles = createStyles((theme) => ({
  skeleton: {
    '&::after': {
      background: theme.colors.dark[4],
    },
    '&::before': {
      background: theme.colors.dark[6],
    },
  },
  list: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  linkDesktop: {
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    color: theme.colors.dark[2],
    '&:hover, &:focus': {
      textDecoration: 'none',
      color: theme.colors.gray[2],
    },
  },
  linkDesktopDisabled: {
    pointerEvents: 'none',
    userSelect: 'none',
    cursor: 'default',
  },
}))

interface IProps {
  isDesktopView?: boolean
}

function HelperMenu({ isDesktopView = true }: IProps) {
  const { isUser } = useAuthContext()
  const { helperNavigation, isHelperNavigationLoading } = useAppConfigContext()
  const { classes } = useStyles()

  const checkIsLinkEnabledForEveryUser = useCallback(
    (isEnabledForLoggedUser: boolean) => {
      if (isEnabledForLoggedUser) {
        return isUser
      }

      return true
    },
    [isUser]
  )

  const setLinkClassName = useCallback(
    (isDisabled: boolean): string => {
      if (isDesktopView) {
        const basicClassName = `mr-4 duration-100 ${classes.linkDesktop}`
        const basicDisabledClassName = classes.linkDesktopDisabled

        if (isDisabled) {
          return `${basicClassName} ${basicDisabledClassName}`
        }

        return basicClassName
      }

      return ''
    },
    [classes.linkDesktop, classes.linkDesktopDisabled, isDesktopView]
  )

  return isHelperNavigationLoading ? (
    <Skeleton height={20} width={'30%'} radius={'sm'} className={classes.skeleton} />
  ) : (
    <ul className={clsx('flex', classes.list)}>
      {helperNavigation.map(({ id, href, title, name, isDisabled, isEnabledForLoggedUser }) => (
        <Fragment key={id}>
          {checkIsLinkEnabledForEveryUser(isEnabledForLoggedUser) && (
            <Tooltip label={title} className={setLinkClassName(isDisabled)}>
              <Anchor href={href}>{name}</Anchor>
            </Tooltip>
          )}
        </Fragment>
      ))}
    </ul>
  )
}

export default HelperMenu
