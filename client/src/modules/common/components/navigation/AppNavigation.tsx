import { useState } from 'react'
import { CreateAccountMenuButton } from '@auth'
import { Anchor, Button, Text } from '@mantine/core'

function AppNavigation() {
  const [isUserLogged, setIsUserLogged] = useState(false)

  return (
    <div className={'flex items-center w-full'}>
      <img src={'https://mageguildwars.pl/images/revolution/logo.png'} alt={'Logo MGW'} />
      {isUserLogged ? (
        <div className={'flex items-center'}>
          <Text>{'Witaj użytkowniku'}</Text>
          <Anchor href={'#'}>{'Profil'}</Anchor>
          <Button color={'red'} onClick={() => setIsUserLogged(false)}>
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
