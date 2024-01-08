import { useCallback } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { Anchor, Button } from '@mantine/core'
import { formStyles, ILoginFormFields, LoginFormFields } from '@modules/auth'
import { z } from 'zod'

const schema = z.object({
  login: z.string().min(1, { message: 'Pole jest wymagane' }),
  password: z.string().min(1, { message: 'Pole jest wymagane' }),
  isRemember: z.boolean(),
})

const LoginForm = () => {
  const form = useForm<ILoginFormFields>({
    values: {
      login: '',
      password: '',
      isRemember: false,
    },
    resolver: zodResolver(schema),
  })

  const handleSubmit = useCallback((values: ILoginFormFields) => {
    console.log('values', values)
  }, [])

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className={'md:mr-4 w-full'}>
        <LoginFormFields />
        <Anchor
          href={'/restore-password'}
          component={Link}
          className={formStyles.loginFormLink}
        >
          {'Zapomniałeś hasła? Przypomnij je'}
        </Anchor>
        <Button
          type={'submit'}
          variant={'filled'}
          color={'violet'}
          className={'w-full mt-4'}
        >
          {'Zaloguj się'}
        </Button>
      </form>
    </FormProvider>
  )
}

export default LoginForm
