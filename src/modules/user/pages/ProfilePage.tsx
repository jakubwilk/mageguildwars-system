'use client'

import { useMemo } from 'react'
import { useAuthContext } from '@modules/auth'
import { useLocale } from '@modules/locale'
import { isEqual, isNil } from 'lodash'

import { useGetUserQuery } from '@/modules/user'

import PageWithTitle from '../../common/pages/PageWithTitle'

interface IProps {
  uid: string
}

const ProfilePage = ({ uid }: IProps) => {
  const { data: userData } = useGetUserQuery(uid, { enabled: !isNil(uid) })
  const { user } = useAuthContext()
  const { translateByHook } = useLocale('profile')

  const isUserLogged = useMemo(
    () => isEqual(user?.uid, userData?.uid) && !isNil(user?.uid),
    [user?.uid, userData?.uid],
  )

  console.log('isUserLogged', isUserLogged)
  console.log('userData', userData)

  const profilePageTitle = useMemo(
    () => `${translateByHook('pageTitle')} ${userData?.login}`,
    [translateByHook, userData?.login],
  )

  return (
    <PageWithTitle title={profilePageTitle}>
      <div>{'Profile page'}</div>
    </PageWithTitle>
  )
}

export default ProfilePage
