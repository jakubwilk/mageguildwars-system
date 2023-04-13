import { useCallback } from 'react'
import { authService, CreateOrLoginAccountMenuButton, useAuthContext, useLogoutAccountMutation } from '@auth'
import { Anchor, Button, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconMenu } from '@tabler/icons-react'

import AppNavigationPanel from './AppNavigationPanel'

function AppNavigation() {
  const { isUser, setUser } = useAuthContext()
  const [opened, { open, close }] = useDisclosure(false)
  const { mutate: logoutAccount, isLoading } = useLogoutAccountMutation()

  const handleLogoutUser = useCallback(() => {
    logoutAccount(null, {
      onSuccess: () => {
        setUser(null)
        authService.removeLocalStorageItem('x-refresh-token')
      },
    })
  }, [logoutAccount, setUser])

  return (
    <div className={'flex items-center ml-8'}>
      {isUser ? (
        <div className={'flex items-center'}>
          <Text>{'Witaj użytkowniku'}</Text>
          <Anchor href={'#'}>{'Profil'}</Anchor>
          <Button color={'red'} onClick={handleLogoutUser} loading={isLoading}>
            {'Wyloguj'}
          </Button>
        </div>
      ) : (
        <CreateOrLoginAccountMenuButton />
      )}
      <Button variant={'default'} onClick={open} leftIcon={<IconMenu size={'1.25rem'} />} radius={'xs'}>
        {'Menu'}
      </Button>
      <AppNavigationPanel isOpen={opened} handleClose={close} />
    </div>
  )
}

export default AppNavigation
