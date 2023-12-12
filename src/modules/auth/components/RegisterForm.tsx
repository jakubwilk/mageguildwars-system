import { Button, PasswordInput, TextInput } from '@mantine/core'

const RegisterForm = () => {
  return (
    <div>
      <h2>{'Rejestracja'}</h2>
      <div className={'mt-4'}>
        <TextInput label={'Login'} placeholder={'Nazwa użytkownika'} withAsterisk />
        <PasswordInput label={'Hasło'} withAsterisk />
        <TextInput label={'Email'} placeholder={'Adres email wymagany do weryfikacji'} />
        <Button variant={'filled'} color={'violet'}>
          {'Utwórz konto'}
        </Button>
      </div>
    </div>
  )
}

export default RegisterForm
