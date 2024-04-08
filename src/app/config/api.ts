import axios, { AxiosInstance } from 'axios'

import { loadEnvVariable } from '../../modules/common/utils'

const instance: AxiosInstance = axios.create({
  baseURL: loadEnvVariable('VITE_API_URL'),
  timeout: 15000,
})

export default instance
