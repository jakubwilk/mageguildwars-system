import { ICreateUserRequest, IRegisterFormFields } from '@modules/auth'
import { UserGroupEnum } from '@modules/user'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const createAccount = async (user: IRegisterFormFields) => {
  const data: ICreateUserRequest = {
    email: user.email,
    password: user.password,
    group: UserGroupEnum.USER,
  }
  return await axios.put('http://localhost:52311/api/v1/auth', data, {
    withCredentials: true,
  })
}

const useCreateAccountMutation = () => {
  return useMutation({ mutationKey: ['CREATE_ACCOUNT'], mutationFn: createAccount })
}

export default useCreateAccountMutation
