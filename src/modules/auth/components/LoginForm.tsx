import { useCallback, useEffect, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { boolean, object, string } from 'yup'

import { useDispatch } from '../../../app/config'
import {
  Button,
  CheckboxInputField,
  PasswordInputField,
  TextInputField,
} from '../../common/components'
import { closeLoginModal } from '../../common/store'
import { ILoginFormValues } from '../models'

import classes from './Components.module.css'

export function LoginForm() {
  const dispatch = useDispatch()
  const form = useForm<ILoginFormValues>({
    mode: 'onBlur',
    criteriaMode: 'all',
    defaultValues: {
      login: '',
      password: '',
      isRemember: false,
    },
    resolver: yupResolver(
      object({
        login: string().email().required(),
        password: string().required(),
        isRemember: boolean(),
      }),
    ),
  })

  const formValues = useMemo(() => form, [form])

  const handleCloseLoginModal = useCallback(() => dispatch(closeLoginModal()), [dispatch])

  useEffect(() => {
    form.clearErrors()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <FormProvider {...formValues}>
      <form onSubmit={form.handleSubmit((val) => console.log('val', val))}>
        <div className={'flex flex-col gap-4 mb-4'}>
          <TextInputField label={'Adres email'} name={'login'} required />
          <PasswordInputField label={'Hasło'} name={'password'} required />
          <CheckboxInputField
            description={
              'Normalnie sesja użytkownika trzymana jest przez 2 dni, po zaznaczeniu czas ten zosrtanie wydłużony do 2 tygodni'
            }
            label={'Zapamiętaj mnie'}
            name={'isRemember'}
          />
        </div>
        <div className={'block text-center mb-6'}>
          <Link className={classes.loginIssuesLink} to={''}>
            {'Rozwiąż problemy z zalogowaniem się'}
          </Link>
        </div>
        <div className={'w-full flex justify-end items-center gap-4'}>
          <Button onClick={handleCloseLoginModal} type={'button'} variant={'default'}>
            {'Anuluj'}
          </Button>
          <Button type={'submit'}>{'Zaloguj się'}</Button>
        </div>
      </form>
    </FormProvider>
  )
}
