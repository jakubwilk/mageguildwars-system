import axios, { AxiosInstance } from 'axios'
import { loadEnvVariable } from 'common/utils'

const instance: AxiosInstance = axios.create({
  baseURL: loadEnvVariable('VITE_API_URL'),
  timeout: 15000,
})

instance.interceptors.request.use(
  (config) => {
    console.log('instance.interceptors.request::config', config)
    return config
  },
  (error) => {
    console.log('instance.interceptors.request::error', error)
    return Promise.reject(error)
  },
)

instance.interceptors.response.use(
  (response) => {
    console.log('instance.interceptors.response::response', response)
    return response.data
  },
  (error) => {
    console.log('instance.interceptors.response::error', error)
    return Promise.reject(error)
  },
)

export default instance
