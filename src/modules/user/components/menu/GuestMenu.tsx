import { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Group, Text } from '@mantine/core'
import { IconLogin2, IconUserPlus } from '@tabler/icons-react'
import clsx from 'clsx'

import classes from './Menu.module.css'

export function GuestMenu() {
  const renderRegisterLink = useCallback(
    () => (
      <Link
        className={clsx(
          'rounded-md w-full p-2 flex items-center',
          classes.linkExpanded,
          classes.link,
        )}
        to={'/create-account'}
      >
        <IconUserPlus
          stroke={1.5}
          style={{
            height: '24px',
            width: '24px',
          }}
        />
        <Text className={clsx('ml-2', classes.linkText)}>
          {'Zarejestruj się'}
          <span className={clsx('block', classes.linkSubText)}>
            {'Stwórz nowe konto i rozpocznij przygodę'}
          </span>
        </Text>
      </Link>
    ),
    [],
  )

  const renderLoginLink = useCallback(
    () => (
      <Link
        className={clsx(
          'rounded-md w-full p-2 flex items-center',
          classes.linkExpanded,
          classes.link,
        )}
        to={'/login'}
      >
        <IconLogin2
          stroke={1.5}
          style={{
            height: '24px',
            width: '24px',
          }}
        />
        <Text className={clsx('ml-2', classes.linkText)}>
          {'Zaloguj się'}
          <span className={clsx('block', classes.linkSubText)}>
            {'Zaloguj się na konto, by kontynuować rozgrywkę'}
          </span>
        </Text>
      </Link>
    ),
    [],
  )

  return (
    <Group gap={'md'}>
      {renderLoginLink()}
      {renderRegisterLink()}
    </Group>
  )
}
