import { useState } from 'react'
import { Anchor, Button, Input, Text } from '@mantine/core'
import { useId } from '@mantine/hooks'

import { useDialog } from '../../hooks'
import { Dialog } from '../dialog'

function AppNavigation() {
  const id = useId()
  const { isOpen, handleOpenDialog, handleCloseDialog } = useDialog()
  const [isUserLogged, setIsUserLogged] = useState(false)

  return (
    <>
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
          <Button onClick={handleOpenDialog}>{'Zaloguj się'}</Button>
        )}
      </div>
      {isOpen && (
        <Dialog title={'Logowanie'}>
          <Input.Wrapper id={id} label={'Nazwa użytkownika'} required maw={320} mx={'auto'}>
            <Input id={id} placeholder={'Login używany na forum'} />
          </Input.Wrapper>
          <Input.Wrapper id={id} label={'Hasło'} required maw={320} mx={'auto'}>
            <Input id={id} type={'password'} />
          </Input.Wrapper>
          <Button
            onClick={() => {
              handleCloseDialog()
              setIsUserLogged(true)
            }}
          >
            {'Zaloguj się'}
          </Button>
        </Dialog>
      )}
    </>
  )
}

export default AppNavigation
