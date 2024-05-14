import { useMemo } from 'react'
import { useSelector } from 'config'
import { isNil } from 'lodash'

export function useValidateUser() {
  const { account } = useSelector((state) => state.user)

  const isUserLogged = useMemo(() => !isNil(account), [account])

  return { isUserLogged }
}
