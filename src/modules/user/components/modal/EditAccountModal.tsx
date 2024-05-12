import { useEffect, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { yupResolver } from '@hookform/resolvers/yup'
import { IRegisterAdminFormValues } from 'auth/models'
import { Button, Modal, PasswordInputField, TextInputField } from 'common/components'
import { UserGroupEnum } from 'user/models'
import { boolean, number, object, string } from 'yup'

interface IProps {
  slug?: string
  isEdit?: boolean
  isOpen: boolean
  handleClose: () => void
}

export function EditAccountModal({ slug, isEdit, isOpen, handleClose }: IProps) {
  const { t } = useTranslation()

  console.log('slug', slug)

  const form = useForm<IRegisterAdminFormValues>({
    mode: 'onBlur',
    criteriaMode: 'all',
    defaultValues: {
      slug: '',
      email: '',
      password: '',
      group: UserGroupEnum.USER,
      limit: 0,
      isActive: false,
    },
    resolver: yupResolver(
      object({
        slug: string().required(t('common:validation.field-required')),
        email: string()
          .email(t('common:validation.field-email'))
          .required(t('common:validation.field-required')),
        password: string()
          .required(t('common:validation.field-required'))
          .min(10, t('common:validation.field-password')),
        group: number().required(t('common:validation.field-required')),
        limit: number().required(t('common:validation.field-required')),
        isActive: boolean().required(t('common:validation.field-required')),
      }),
    ),
  })

  const formValues = useMemo(() => form, [form])

  useEffect(() => {
    form.clearErrors()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Modal
      handleClose={handleClose}
      isOpen={isOpen}
      title={isEdit ? 'Edytuj użytkownika' : 'Tworzenie użytkownika'}
    >
      <FormProvider {...formValues}>
        <form noValidate onSubmit={form.handleSubmit((val) => console.log('val', val))}>
          <div className={'flex flex-col gap-4 mb-4'}>
            <TextInputField
              autoComplete={'off'}
              description={t('auth:field.slug-description')}
              label={t('auth:field.slug-label')}
              name={'slug'}
              required
            />
            <TextInputField
              autoComplete={'off'}
              description={t('auth:field.email-description')}
              label={t('auth:field.email-label')}
              name={'email'}
              required
            />
            <PasswordInputField
              autoComplete={'off'}
              description={t('auth:field.password-description')}
              label={t('auth:field.password-label')}
              name={'password'}
              required
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
            <Button type={'submit'}>{t('auth:action.register-text')}</Button>
          </div>
        </form>
      </FormProvider>
    </Modal>
  )
}
