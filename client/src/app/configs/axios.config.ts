import axios, { Axios } from 'axios'

const refreshAccessToken = async (axiosInstance: Axios) => {
  try {
    await axiosInstance.get('/auth/refresh')
  } catch (err) {
    console.error(err)
    throw err
  }
}

const axiosApi = axios.create({
  baseURL: process.env['REACT_APP_API_ENDPOINT'],
})

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      return refreshAccessToken(axiosApi).then(() => axios(originalRequest))
    }

    return Promise.reject(error)
  }
)

export default axiosApi
