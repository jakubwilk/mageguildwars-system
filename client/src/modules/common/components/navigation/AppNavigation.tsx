import { useState } from 'react'
import { CreateAccountMenuButton, useCreateAccountMutation } from '@auth'
// eslint-disable-next-line no-unused-vars
import { Anchor, Button, Input, Text } from '@mantine/core'

function AppNavigation() {
  const [isUserLogged, setIsUserLogged] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const { mutate: createAccount, isLoading } = useCreateAccountMutation()

  // <Dialog title={'Logowanie'}>
  //           <Input.Wrapper id={id} label={'Nazwa użytkownika'} required maw={320} mx={'auto'}>
  //             <Input id={id} placeholder={'Login używany na forum'} />
  //           </Input.Wrapper>
  //           <Input.Wrapper id={id} label={'Hasło'} required maw={320} mx={'auto'}>
  //             <Input id={id} type={'password'} />
  //           </Input.Wrapper>
  //           <Button
  //             onClick={() => {
  //               createAccount()
  //               handleCloseDialog()
  //               setIsUserLogged(true)
  //             }}
  //           >
  //             {'Zaloguj się'}
  //           </Button>
  //         </Dialog>

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
