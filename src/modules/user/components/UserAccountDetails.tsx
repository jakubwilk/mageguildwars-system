'use client'

import { Fragment, useMemo } from 'react'
import { Badge, Text } from '@mantine/core'
import {
  accountStyles,
  TUserLite,
  useGetUserQuery,
  UserAccountFormModeEnum,
  UserGroupEnum,
} from '@modules/user'
import { clsx } from 'clsx'
import { isEqual } from 'lodash'

import { getGroupName } from '@/modules/user/utils/user.utils'

interface IProps {
  user: TUserLite
  formMode: UserAccountFormModeEnum
}

const UserAccountDetails = ({ user, formMode }: IProps) => {
  const { data: userData } = useGetUserQuery(user.uid)

  const userGroup = useMemo(
    () => getGroupName(userData?.group as UserGroupEnum),
    [userData],
  )

  const isFormMode = useMemo(
    () => isEqual(formMode, UserAccountFormModeEnum.FORM_MODE),
    [formMode],
  )

  console.log('isFormMode', isFormMode)

  return (
    <Fragment>
      <div className={clsx('rounded-b-xl p-8', accountStyles.accountContent)}>
        <Badge color={userGroup.color} size={'xl'} radius={'md'}>
          {userGroup.name}
        </Badge>
        <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'}>
          <div>
            <div>{`Email: ${userData?.email}`}</div>
            <div>{'Hasło: *******'}</div>
          </div>
          <div>
            <div>{`Data rejestracji: ${userData?.registerDate}`}</div>
            <div>{`Data ostatniej aktualizacji: ${userData?.updateDate}`}</div>
          </div>
          <div>
            <div>{`Czy konto jest zablokowane: ${userData?.isLocked}`}</div>
            <div>{`Czy konto jest zbanowane: ${userData?.isBanned}`}</div>
          </div>
        </div>
        <div className={'mt-4'}>
          <div>{`Czy użytkownik może tworzyć nowe postacie: ${userData?.hasCreateProfileEnabled}`}</div>
        </div>
      </div>
      <div
        className={clsx('text-center rounded-xl mt-8 p-8', accountStyles.accountContent)}
      >
        <Text>{'Użytkownik nie posiada utworzonych żadnych postaci'}</Text>
      </div>
    </Fragment>
  )
}

export default UserAccountDetails
