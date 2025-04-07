import axios from 'axios'

let accessToken = ''

export const setAccessToken = (token) => {
  accessToken = token
}

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

api.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})

api.interceptors.response.use(
  res => res,
  async (error) => {
    const originalRequest = error.config
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      try {
        const res = await axios.post(
          'http://localhost:3000/auth/refresh',
          {},
          { withCredentials: true }
        )
        const newToken = res.data.accessToken
        setAccessToken(newToken)
        originalRequest.headers.Authorization = `Bearer ${newToken}`
        return api(originalRequest)
      } catch (err) {
        window.location.href = '/login'
      }
    }
    return Promise.reject(error)
  }
)

export default api
