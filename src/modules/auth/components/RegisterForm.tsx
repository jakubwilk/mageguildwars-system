import { Button, PasswordInput, TextInput } from '@mantine/core'

const RegisterForm = () => {
  return (
    <div className={'md:ml-4 w-full'}>
      <TextInput
        label={'Login'}
        placeholder={'Nazwa użytkownika'}
        className={'mb-4'}
        withAsterisk
      />
      <PasswordInput label={'Hasło'} className={'mb-4'} withAsterisk />
      <TextInput
        label={'Email'}
        placeholder={'Adres email wymagany do weryfikacji'}
        className={'mb-4'}
      />
      <Button variant={'filled'} color={'violet'} className={'w-full mt-4'}>
        {'Utwórz konto'}
      </Button>
    </div>
  )
}

export default RegisterForm
