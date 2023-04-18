import { useEffect, useState } from 'react'
import { UserGroup } from '@user'

import { LoginAccountResponseSnapshot } from '../models'

function useMockLogin() {
  const [data, setData] = useState<LoginAccountResponseSnapshot | null>(null)

  useEffect(() => {
    const loginData: LoginAccountResponseSnapshot = {
      refreshToken: 'mockRefreshToken-1234567890',
      user: {
        uid: 'e7712e04-a7e9-46e1-898d-9f6281711949',
        login: 'Abraham',
        slug: 'abraham',
        email: 'abraham@mageguildwars.pl',
        group: UserGroup.USER,
        isActive: true,
        isLocked: false,
        isCreateProfileEnabled: true,
        isGameMaster: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    }

    setData(loginData)
  }, [])

  return { data }
}

export default useMockLogin
