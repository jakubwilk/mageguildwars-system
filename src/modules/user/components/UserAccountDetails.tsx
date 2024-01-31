'use client'

import { Fragment, useMemo } from 'react'
import { Badge, Group, Text } from '@mantine/core'
import { useLocale } from '@modules/locale'
import {
  accountStyles,
  FieldWrapper,
  TUserLite,
  useGetUserQuery,
  UserGroupEnum,
} from '@modules/user'
import { clsx } from 'clsx'

import { getGroupName } from '@/modules/user/utils/user.utils'

interface IProps {
  user: TUserLite
}

const UserAccountDetails = ({ user }: IProps) => {
  const { translateByHook } = useLocale('profile')
  const { data: userData } = useGetUserQuery(user?.uid)

  const userGroup = useMemo(
    () => getGroupName(userData?.group as UserGroupEnum),
    [userData],
  )

  return (
    <Fragment>
      <div className={clsx('rounded-b-xl p-8 pt-0', accountStyles.accountContent)}>
        <Badge color={userGroup.color} size={'xl'} radius={'md'}>
          {userGroup.name}
        </Badge>
        <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'}>
          <Group gap={'xs'}>
            <FieldWrapper
              label={translateByHook('fields.email')}
              value={userData?.email}
              isEmailModal
              isEditAvailable
            />
            <FieldWrapper
              label={translateByHook('fields.password')}
              isPasswordField
              isPasswordModal
              isEditAvailable
            />
          </Group>
          <Group gap={'xs'}>
            <FieldWrapper
              label={translateByHook('fields.registerDate')}
              value={userData?.registerDate}
              isDateField
            />
            <FieldWrapper
              label={translateByHook('fields.updateDate')}
              value={userData?.updateDate}
              isDateField
            />
          </Group>
          <Group gap={'xs'}>
            <FieldWrapper
              label={translateByHook('fields.isAccountLocked')}
              value={userData?.isLocked}
              isBooleanField
            />
            <FieldWrapper
              label={translateByHook('fields.isAccountBanned')}
              value={userData?.isBanned}
              isBooleanField
            />
          </Group>
        </div>
        <div className={'mt-4'}>
          <FieldWrapper
            label={translateByHook('fields.isUserAbleToCreateCharacters')}
            value={userData?.hasCreateProfileEnabled}
            isBooleanField
          />
        </div>
      </div>
      <div
        className={clsx('text-center rounded-xl mt-8 p-8', accountStyles.accountContent)}
      >
        <Text>{translateByHook('noCharactersFound')}</Text>
      </div>
    </Fragment>
  )
}

export default UserAccountDetails
