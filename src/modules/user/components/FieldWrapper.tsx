'use client'

import { Fragment, useMemo } from 'react'
import { ActionIcon, Text, Tooltip } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
  BooleanFieldInputValue,
  convertBooleanValueToText,
  inputStyles,
  navbarStyles,
} from '@modules/common'
import { useLocale } from '@modules/locale'
import { IconEdit } from '@tabler/icons-react'
import { clsx } from 'clsx'
import dayjs from 'dayjs'
import { isDate } from 'lodash'

import { ChangeEmailModal } from '@/modules/user'
require('dayjs/locale/pl')

interface IProps {
  label: string
  value?: string | boolean | Date
  isPasswordField?: boolean
  isDateField?: boolean
  isBooleanField?: boolean
  isEditAvailable?: boolean
  isEmailModal?: boolean
  isPasswordModal?: boolean
}

const FieldWrapper = ({
  label,
  value,
  isPasswordField,
  isDateField,
  isBooleanField,
  isEditAvailable,
  isEmailModal,
  isPasswordModal,
}: IProps) => {
  const { translateByHook } = useLocale('global')
  const [opened, { open: handleOpenModal, close: handleCloseModal }] =
    useDisclosure(false)

  const ModalComponent = useMemo(() => {
    if (isEmailModal) {
      return <ChangeEmailModal isOpen={opened} handleCloseModal={handleCloseModal} />
    }

    if (isPasswordModal) {
      return <ChangeEmailModal isOpen={opened} handleCloseModal={handleCloseModal} />
    }

    return null
  }, [handleCloseModal, isEmailModal, isPasswordModal, opened])

  const FieldComponent = useMemo(() => {
    if (isPasswordField) {
      return <Text className={inputStyles.viewLabel}>{label}</Text>
    }

    if (isDateField) {
      return (
        <div className={'flex flex-col'}>
          <Text className={inputStyles.viewLabel}>{label}</Text>
          {value && isDate(value) && (
            <Text>{dayjs(value).locale('pl').format('DD MMMM YYYY')}</Text>
          )}
        </div>
      )
    }

    if (isBooleanField && typeof value === 'boolean') {
      return (
        <div className={'flex flex-col'}>
          <Text className={clsx('mb-1', inputStyles.viewLabel)}>{label}</Text>
          <BooleanFieldInputValue
            value={value}
            label={convertBooleanValueToText(value)}
          />
        </div>
      )
    }

    return (
      <div className={'flex flex-col'}>
        <Text className={inputStyles.viewLabel}>{label}</Text>
        {value && typeof value === 'string' && <Text>{value}</Text>}
      </div>
    )
  }, [isBooleanField, isDateField, isPasswordField, label, value])

  return (
    <Fragment>
      <div
        className={clsx(
          'w-full flex justify-between',
          isPasswordField ? 'items-center' : 'items-start',
        )}
      >
        {FieldComponent}
        {isEditAvailable && (
          <Tooltip position={'bottom'} label={translateByHook('actions.editData')}>
            <ActionIcon
              variant={'transparent'}
              color={'violet'}
              aria-label={translateByHook('actions.editData')}
              className={clsx('ml-4', navbarStyles.mainNavbarItem)}
              onClick={() => {
                handleOpenModal()
              }}
            >
              <IconEdit style={{ width: '80%', height: '80%' }} stroke={1.5} />
            </ActionIcon>
          </Tooltip>
        )}
      </div>
      {opened && ModalComponent}
    </Fragment>
  )
}

export default FieldWrapper
