import { createContext, useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { refresh, getProfile, apiLogout } from '../services/auth'
import { setAccessToken } from '../services/api'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const init = async () => {
      if (location.pathname === '/login') {
        setLoading(false)
        return
      }

      try {
        const res = await refresh()
        setAccessToken(res.data.accessToken)
        const profile = await getProfile()
        setUser(profile.data)
      } catch (err) {
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    init()
  }, [location.pathname])

  const logout = async () => {
    try {
      await apiLogout()
    } catch (err) {
      console.warn('Không thể logout từ server:', err)
    }
    setAccessToken('')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
