'use client'

import { useMemo } from 'react'
import { useAuthContext } from '@modules/auth'
import { PageWithTitle } from '@modules/common'
import { TUserLite, UserAccountDetails } from '@modules/user'

const AccountPage = () => {
  const { user } = useAuthContext()

  const userData = useMemo(() => user as TUserLite, [user])

  return (
    <PageWithTitle title={'Podgląd konta głównego'}>
      <UserAccountDetails user={userData} />
    </PageWithTitle>
  )
}

export default AccountPage
