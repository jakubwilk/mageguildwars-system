import { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Group, Text, Tooltip } from '@mantine/core'
import { IconLogin2, IconUserPlus } from '@tabler/icons-react'
import clsx from 'clsx'

import classes from './Menu.module.css'

interface IProps {
  isExpanded: boolean
  setIsSidebarExpanded: (val: boolean) => void
}

export function GuestMenu({ isExpanded, setIsSidebarExpanded }: IProps) {
  const renderRegisterLink = useCallback(
    () => (
      <Link
        className={clsx(
          'rounded-md',
          isExpanded ? `w-full p-2 flex items-center ${classes.linkExpanded}` : '',
          classes.link,
        )}
        onClick={() => setIsSidebarExpanded(false)}
        to={'/create-account'}
      >
        <IconUserPlus
          stroke={1.5}
          style={{
            height: '24px',
            width: '24px',
          }}
        />
        {isExpanded && (
          <Text className={clsx('ml-2', classes.linkText)}>
            {'Zarejestruj się'}
            <span className={clsx('block', classes.linkSubText)}>
              {'Stwórz nowe konto i rozpocznij przygodę'}
            </span>
          </Text>
        )}
      </Link>
    ),
    [isExpanded, setIsSidebarExpanded],
  )

  const renderLoginLink = useCallback(
    () => (
      <Link
        className={clsx(
          'rounded-md',
          isExpanded ? `w-full p-2 flex items-center ${classes.linkExpanded}` : '',
          classes.link,
        )}
        onClick={() => setIsSidebarExpanded(false)}
        to={'/login'}
      >
        <IconLogin2
          stroke={1.5}
          style={{
            height: '24px',
            width: '24px',
          }}
        />
        {isExpanded && (
          <Text className={clsx('ml-2', classes.linkText)}>
            {'Zaloguj się'}
            <span className={clsx('block', classes.linkSubText)}>
              {'Zaloguj się na konto, by kontynuować rozgrywkę'}
            </span>
          </Text>
        )}
      </Link>
    ),
    [isExpanded, setIsSidebarExpanded],
  )

  if (isExpanded) {
    return (
      <Group gap={'md'}>
        {renderLoginLink()}
        {renderRegisterLink()}
      </Group>
    )
  }

  return (
    <Group gap={'md'} justify={'center'}>
      <Tooltip color={'gray'} label={'Zaloguj się na konto'} position={'right'}>
        {renderLoginLink()}
      </Tooltip>
      <Tooltip color={'gray'} label={'Utwórz nowe konto'} position={'right'}>
        {renderRegisterLink()}
      </Tooltip>
    </Group>
  )
}
