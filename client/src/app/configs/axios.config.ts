import axios, { Axios } from 'axios'

const refreshAccessToken = async (axiosInstance: Axios) => {
  // eslint-disable-next-line no-useless-catch
  try {
    await axiosInstance.get('/auth/refresh')
  } catch (err) {
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
    if (error.response.status === 401 && originalRequest._retry && originalRequest.headers['NO_RETRY_HEADER']) {
      originalRequest._retry = false
      originalRequest.headers['NO_RETRY_HEADER'] = 'true'
      await refreshAccessToken(axiosApi)
      return axiosApi(originalRequest)
    }
    return Promise.reject(error)
  }
)

export default axiosApi
