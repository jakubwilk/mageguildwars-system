import { useEffect, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { yupResolver } from '@hookform/resolvers/yup'
import { ICreateUserAdminFormValues, IEditUserAdminFormValues } from 'auth/models'
import {
  Button,
  Modal,
  NumberInputField,
  PasswordInputField,
  SelectInputField,
  SwitchInputField,
  TextInputField,
} from 'common/components'
import { useGetAccountQuery } from 'user/api'
import { UserGroupEnum } from 'user/models'
import { USER_GROUP_OPTIONS } from 'user/utils'
import { boolean, number, object, string } from 'yup'

interface IProps {
  slug?: string
  isEdit?: boolean
  isOpen: boolean
  handleClose: () => void
}

export function EditAccountModal({ slug, isEdit, isOpen, handleClose }: IProps) {
  const { t } = useTranslation()
  const { data, isFetching } = useGetAccountQuery(slug as string, {
    enabled: Boolean(slug),
  })

  const form = useForm<IEditUserAdminFormValues | ICreateUserAdminFormValues>({
    mode: 'onBlur',
    criteriaMode: 'all',
    defaultValues: {
      slug: '',
      email: '',
      ...(isEdit && { password: '' }),
      group: UserGroupEnum.USER,
      limit: 3,
      isActive: false,
    },
    resolver: yupResolver(
      object({
        slug: string().required(t('common:validation.field-required')),
        email: string()
          .email(t('common:validation.field-email'))
          .required(t('common:validation.field-required')),
        ...(!isEdit && {
          password: string()
            .required(t('common:validation.field-required'))
            .min(10, t('common:validation.field-password')),
        }),
        group: number().required(t('common:validation.field-required')),
        limit: number().required(t('common:validation.field-required')),
        isActive: boolean().required(t('common:validation.field-required')),
      }),
    ),
  })

  const formValues = useMemo(() => form, [form])

  useEffect(() => {
    if (data) {
      form.reset({
        ...data,
        group: data.group.value as number,
        isActive: !data.isBlocked,
      })
    }

    form.clearErrors()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  console.log('form', form.getValues())

  return (
    <Modal
      handleClose={handleClose}
      isOpen={isOpen}
      title={isEdit ? 'Edytuj użytkownika' : 'Tworzenie użytkownika'}
    >
      <FormProvider {...formValues}>
        <form
          noValidate
          onSubmit={form.handleSubmit((val) => console.log('val', JSON.stringify(val)))}
        >
          <div className={'flex flex-col gap-4 mb-4'}>
            <TextInputField
              autoComplete={'off'}
              description={t('auth:field.slug-description')}
              disabled={isFetching}
              label={t('auth:field.slug-label')}
              name={'slug'}
              required
            />
            <TextInputField
              autoComplete={'off'}
              description={t('auth:field.email-description')}
              disabled={isFetching}
              label={t('auth:field.email-label')}
              name={'email'}
              required
            />
            <PasswordInputField
              autoComplete={'off'}
              description={t('auth:field.password-description')}
              disabled={isFetching}
              label={t('auth:field.password-label')}
              name={'password'}
              required={!isEdit}
            />
            <SelectInputField
              isDisabled={isFetching}
              isRequired
              label={'Grupa'}
              name={'group'}
              options={USER_GROUP_OPTIONS}
            />
            <NumberInputField
              disabled={isFetching}
              label={'Limit postaci dla użytkownika'}
              name={'limit'}
              required
            />
            <SwitchInputField
              disabled={isFetching}
              label={'Czy konto użytkownika powinno być aktywne?'}
              name={'isActive'}
            />
          </div>
          <div className={'w-full flex justify-end items-center gap-4'}>
            <Button
              className={'font-normal'}
              onClick={handleClose}
              type={'button'}
              variant={'default'}
            >
              {t('common:action.cancel')}
            </Button>
            <Button disabled={isFetching} type={'submit'}>
              {t('common:action.save')}
            </Button>
          </div>
        </form>
      </FormProvider>
    </Modal>
  )
}
