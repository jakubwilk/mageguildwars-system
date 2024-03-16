import { useCallback, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Group } from '@mantine/core'
import { isEqual } from 'lodash'
import { object, string } from 'yup'

import { Button, PasswordInputField, TextInputField } from '../../../common/components'
import { useResources } from '../../../resources/hooks'
import { useCreateAccountMutation } from '../../api'
import { IRegisterDataRequest, IRegisterFormData } from '../../models'

export function RegisterForm() {
  const { getResource } = useResources('AUTH')
  const { getResource: getCommonResources } = useResources('COMMON')
  const { mutate: createAccount, isPending } = useCreateAccountMutation()

  const form = useForm<IRegisterFormData>({
    mode: 'onChange',
    criteriaMode: 'all',
    defaultValues: {
      slug: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    resolver: yupResolver(
      object({
        slug: string().required(getCommonResources('FIELD_REQUIRED_TEXT')),
        email: string()
          .required(getCommonResources('FIELD_REQUIRED_TEXT'))
          .email(getCommonResources('FIELD_INCORRECT_EMAIL_TEXT')),
        password: string()
          .required(getCommonResources('FIELD_REQUIRED_TEXT'))
          .min(10, getCommonResources('FIELD_INCORRECT_PASSWORD_TEXT')),
        repeatPassword: string()
          .required(getCommonResources('FIELD_REQUIRED_TEXT'))
          .test(
            'checkIfPasswordsAreTheSame',
            getCommonResources('FIELD_NOT_SAME_PASSWORD_TEXT'),
            function (value, context) {
              const passwordValue = context.parent.password
              return isEqual(value, passwordValue)
            },
          ),
      }),
    ),
  })

  const handleSubmit = useCallback(
    (values: IRegisterFormData) => {
      const requestData: IRegisterDataRequest = {
        slug: values.slug,
        email: values.email,
        password: values.password,
      }

      createAccount(requestData)
    },
    [createAccount],
  )

  console.log('isPending', isPending)

  const values = useMemo(() => form, [form])

  return (
    <FormProvider {...values}>
      <form noValidate onSubmit={form.handleSubmit(handleSubmit)}>
        <Group>
          <TextInputField
            description={getResource('REGISTER_FORM_FIELD_SLUG_DESCRIPTION_TEXT')}
            label={getResource('REGISTER_FORM_FIELD_SLUG_LABEL')}
            name={'slug'}
            withAsterisk
          />
          <TextInputField
            description={getResource('REGISTER_FORM_FIELD_EMAIL_DESCRIPTION_TEXT')}
            label={getResource('REGISTER_FORM_FIELD_EMAIL_LABEL')}
            name={'email'}
            withAsterisk
          />
          <PasswordInputField
            className={'w-full'}
            description={getResource('REGISTER_FORM_FIELD_PASSWORD_DESCRIPTION_TEXT')}
            label={getResource('REGISTER_FORM_FIELD_PASSWORD_LABEL')}
            name={'password'}
            withAsterisk
          />
          <PasswordInputField
            className={'w-full'}
            label={getResource('REGISTER_FORM_FIELD_REPEAT_PASSWORD_LABEL')}
            name={'repeatPassword'}
            withAsterisk
          />
          <Button className={'mt-2'} isFullWidth type={'submit'}>
            {getResource('REGISTER_FORM_BUTTON_CREATE_ACCOUNT_TEXT')}
          </Button>
        </Group>
      </form>
    </FormProvider>
  )
}
