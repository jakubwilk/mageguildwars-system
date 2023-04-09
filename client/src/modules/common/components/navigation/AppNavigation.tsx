import { useCallback } from 'react'
import { authService, CreateAccountMenuButton, useAuthContext, useLogoutAccountMutation } from '@auth'
import { Anchor, Button, Text } from '@mantine/core'

function AppNavigation() {
  const { isUser, setUser } = useAuthContext()
  const { mutate: logoutAccount, isLoading } = useLogoutAccountMutation()

  const handleLogoutUser = useCallback(() => {
    logoutAccount(null, {
      onSuccess: () => {
        setUser(null)
        authService.removeLocalStorageItem('x-refresh-token')
      },
    })
  }, [setUser])

  return (
    <div className={'flex items-center w-full'}>
      <img src={'https://mageguildwars.pl/images/revolution/logo.png'} alt={'Logo MGW'} />
      {isUser ? (
        <div className={'flex items-center'}>
          <Text>{'Witaj użytkowniku'}</Text>
          <Anchor href={'#'}>{'Profil'}</Anchor>
          <Button color={'red'} onClick={handleLogoutUser} loading={isLoading}>
            {'Wyloguj'}
          </Button>
        </div>
      ) : (
        <CreateAccountMenuButton />
      )}
    </div>
  )
}

export default AppNavigation
