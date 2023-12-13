import Link from 'next/link'
import { Anchor, Button, Checkbox, PasswordInput, TextInput } from '@mantine/core'
import { formStyles } from '@modules/auth'
import { IconThumbUp } from '@tabler/icons-react'

const LoginForm = () => {
  return (
    <div className={'py-8'}>
      <h2>{'Logowanie'}</h2>
      <div className={'mt-4'}>
        <TextInput
          label={'Login'}
          placeholder={'Nazwa użytkownika'}
          className={'mb-4'}
          withAsterisk
        />
        <PasswordInput label={'Hasło'} className={'mb-4'} withAsterisk />
        <Checkbox
          label={'Zapamiętaj mnie przy następnych logowaniach'}
          color={'violet'}
          icon={IconThumbUp}
          className={'mb-4'}
        />
        <Anchor
          href={'/restore-password'}
          component={Link}
          className={formStyles.loginFormLink}
        >
          {'Zapomniałeś hasła? Przypomnij je'}
        </Anchor>
        <Button variant={'filled'} color={'violet'} className={'w-full mt-4'}>
          {'Zaloguj się'}
        </Button>
      </div>
    </div>
  )
}

export default LoginForm
