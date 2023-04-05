import { useCallback } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Dialog, TextField } from '@common'
import { joiResolver } from '@hookform/resolvers/joi'
import { Button } from '@mantine/core'
import Joi from 'joi'

function CreateAccountDialog() {
  const form = useForm({
    mode: 'onBlur',
    defaultValues: {
      login: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    resolver: joiResolver(
      Joi.object({
        login: Joi.string().required().messages({ 'string.empty': 'Pole jest wymagane' }),
        email: Joi.string()
          .email({ tlds: false })
          .messages({ 'string.empty': 'Pole jest wymagane', 'string.email': 'Adres email jest niepoprawny' }),
        password: Joi.string()
          .min(12)
          .messages({ 'string.empty': 'Pole jest wymagane', 'string.min': 'Hasło powinno zawierać minimum 12 znaków' }),
        repeatPassword: Joi.string()
          .valid(Joi.ref('password'))
          .required()
          .messages({ 'string.empty': 'Pole jest wymagane', 'any.only': 'Hasła nie są identyczne' }),
      })
    ),
  })

  const handleCreateAccount = useCallback((data: any) => console.log('data', data), [])

  return (
    <FormProvider {...form}>
      <Dialog title={'Zakładanie konta'}>
        <form onSubmit={form.handleSubmit(handleCreateAccount)}>
          <TextField
            label={'Nazwa użytkownika'}
            name={'login'}
            placeholder={'Podaj nazwę użytkownka, która posłuży również za imię postaci'}
            isRequired
          />
          <TextField label={'Email'} name={'email'} placeholder={'Podaj swój adres email'} isRequired />
          <TextField label={'Hasło'} name={'password'} type={'password'} isRequired isPasswordInput />
          <TextField label={'Potwierdź hasło'} name={'repeatPassword'} type={'password'} isRequired isPasswordInput />
          <Button type={'submit'}>{'Utwórz konto'}</Button>
        </form>
      </Dialog>
    </FormProvider>
  )
}

export default CreateAccountDialog
