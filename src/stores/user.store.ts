import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UserStore {
  accessToken: string
  refreshToken: string
  isAuthenticated: boolean
  setTokens: (access: string, refresh: string) => void
  clearTokens: () => void
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      accessToken: '',
      refreshToken: '',
      isAuthenticated: false,
      setTokens: (accessToken, refreshToken) => {
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('refreshToken', refreshToken)
        set({ accessToken, refreshToken, isAuthenticated: true })
      },
      clearTokens: () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        set({
          accessToken: '',
          refreshToken: '',
          isAuthenticated: false,
        })
      },
    }),
    { name: 'stepfi-user' }
  )
)
