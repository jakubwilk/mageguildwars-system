import { cache } from 'react'
import { IUser, MOCK_USER } from '@modules/user'

const getUser = cache(async (uid: string): Promise<IUser> => {
  // const { data } = await axios.get<IUser>(`https://localhost:8080/api/user/${uid}`, {
  //   withCredentials: true,
  // })
  //
  // return data

  return {
    ...MOCK_USER,
    uid,
  }
})

export default getUser
