'use client'

import { useMemo } from 'react'
import { useAuthContext } from '@modules/auth'
import { isEqual, isNil } from 'lodash'

import { useGetUserQuery } from '@/modules/user'

interface IProps {
  uid: string
}

const ProfilePage = ({ uid }: IProps) => {
  const { data: userData } = useGetUserQuery(uid, { enabled: !isNil(uid) })
  const { user } = useAuthContext()

  const isUserLogged = useMemo(
    () => isEqual(user?.uid, userData?.uid) && !isNil(user?.uid),
    [user?.uid, userData?.uid],
  )

  console.log('userData', userData)
  console.log('isUserLogged', isUserLogged)

  return <div>{'Profile page'}</div>
}

export default ProfilePage
