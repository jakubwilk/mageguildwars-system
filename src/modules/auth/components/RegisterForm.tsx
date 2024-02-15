import { Button, PasswordInput, TextInput } from '@mantine/core'

export function RegisterForm() {
  return (
    <div>
      <TextInput
        description={
          'Służy nie tylko do odzyskania dostępu do konta, ale również głównie za pomocą adresu email użytkownik może się zalogować'
        }
        label={'Adres email'}
        withAsterisk
      />
      <PasswordInput label={'Hasło'} withAsterisk />
      <PasswordInput label={'Powtórz hasło'} withAsterisk />
      <Button fullWidth variant={'filled'}>
        {'Utwórz konto'}
      </Button>
    </div>
  )
}
