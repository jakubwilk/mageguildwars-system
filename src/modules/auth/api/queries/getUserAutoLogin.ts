import { cache } from 'react'
import axios from 'axios'

const getUserAutoLogin = cache(async () => {
  const { data } = await axios.get('http://localhost:52311/api/v1/auth', {
    withCredentials: true,
  })

  return data
})

export default getUserAutoLogin
