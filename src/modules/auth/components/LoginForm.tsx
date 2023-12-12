import Link from 'next/link'
import { Anchor, Button, Checkbox, PasswordInput, TextInput } from '@mantine/core'

const LoginForm = () => {
  return (
    <div>
      <h2>{'Logowanie'}</h2>
      <div className={'mt-4'}>
        <TextInput label={'Login'} placeholder={'Nazwa użytkownika'} withAsterisk />
        <PasswordInput label={'Hasło'} withAsterisk />
        <Checkbox
          label={'Zapamiętaj mnie przy następnych logowaniach'}
          color={'violet'}
        />
        <Anchor href={'/restore-password'} component={Link}>
          {'Zapomniałeś hasła? Przypomnij je'}
        </Anchor>
        <Button variant={'filled'} color={'violet'}>
          {'Zaloguj się'}
        </Button>
      </div>
    </div>
  )
}

export default LoginForm
