import { useState } from 'react'
import { Anchor, Button, Dialog, Input, Text } from '@mantine/core'
import { useId } from '@mantine/hooks'
import { useDisclosure } from '@mantine/hooks'

function AppNavigation() {
  const id = useId()
  const [opened, { toggle, close }] = useDisclosure(false)
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
          <Button onClick={toggle}>{'Zaloguj się'}</Button>
        )}
      </div>
      <Dialog opened={opened} onClose={close} withCloseButton>
        <Text>{'Logowanie'}</Text>
        <Input.Wrapper id={id} label={'Nazwa użytkownika'} required maw={320} mx={'auto'}>
          <Input id={id} placeholder={'Login używany na forum'} />
        </Input.Wrapper>
        <Input.Wrapper id={id} label={'Hasło'} required maw={320} mx={'auto'}>
          <Input id={id} type={'password'} />
        </Input.Wrapper>
        <Button
          onClick={() => {
            close()
            setIsUserLogged(true)
          }}
        >
          {'Zaloguj się\r'}
        </Button>
      </Dialog>
    </>
  )
}

export default AppNavigation
