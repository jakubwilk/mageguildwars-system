import axios, { Axios } from 'axios'

const refreshAccessToken = async (axiosInstance: Axios) => {
  try {
    const { data } = await axiosInstance.get('/auth/refresh')
    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}

const axiosApi = axios.create({
  baseURL: process.env['REACT_APP_API_ENDPOINT'],
  headers: {
    'Content-Type': ['application/json'],
  },
  withCredentials: true,
})

axiosApi.interceptors.response.use(
  (response) => response,
  async function (error) {
    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      const resp = await refreshAccessToken(axiosApi)

      axiosApi.defaults.headers.common['x-access-token'] = resp.accessToken
      return axiosApi(originalRequest)
    }
    return Promise.reject(error)
  }
)

export default axiosApi
