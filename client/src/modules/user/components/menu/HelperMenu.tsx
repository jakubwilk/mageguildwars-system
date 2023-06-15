import { Fragment, useCallback } from 'react'
import { useAuthContext } from '@auth'
import { Anchor, createStyles, Tooltip } from '@mantine/core'
import { clsx } from 'clsx'

const NAVIGATION = [
  {
    id: 1,
    href: '/',
    title: 'Przejdź do zakładki z regulaminem',
    name: 'Zasady',
    isDisabled: false,
    isEnabledForLoggedUser: false,
  },
  {
    id: 2,
    href: '/',
    title: 'Przejdź do zakładki z FAQ',
    name: 'Pomoc',
    isDisabled: false,
    isEnabledForLoggedUser: false,
  },
  {
    id: 3,
    href: '/',
    title: 'Przejdź do systemu raportowania użytkowników',
    name: 'System zgłoszeń',
    isDisabled: false,
    isEnabledForLoggedUser: true,
  },
  {
    id: 4,
    href: '/',
    title: 'Przejdź do zakładki z informacjami o wymianie linków',
    name: 'Partnerstwo',
    isDisabled: false,
    isEnabledForLoggedUser: false,
  },
]

const useStyles = createStyles((theme) => ({
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

  return (
    <ul className={clsx('flex', classes.list)}>
      {NAVIGATION.map(({ id, href, title, name, isDisabled, isEnabledForLoggedUser }) => (
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
