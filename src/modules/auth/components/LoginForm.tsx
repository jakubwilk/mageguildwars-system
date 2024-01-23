import { useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { TextFieldInput } from '@modules/common'

const LoginForm = () => {
  const form = useForm()

  const values = useMemo(() => form, [form])

  return (
    <FormProvider {...values}>
      <form>
        <TextFieldInput name={'login'} label={'Nazwa użytkownika'} required />
        <TextFieldInput name={'password'} label={'Hasło'} isPassword required />
      </form>
    </FormProvider>
  )
}

export default LoginForm
