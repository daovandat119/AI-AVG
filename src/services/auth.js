import api from './api'

export const login = (username, password) =>
  api.post('/auth/login', { username, password })

export const refresh = () =>
  api.post('/auth/refresh')

export const getProfile = () =>
  api.get('/user/profile')

export const apiLogout = () =>
  api.post('/auth/logout')
