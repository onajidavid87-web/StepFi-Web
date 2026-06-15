import { api } from './api'

export const authService = {
  getNonce: async (wallet: string) => {
    const res = await api.post('/auth/nonce', { wallet })
    return res.data
  },

  verify: async (
    wallet: string,
    nonce: string,
    signature: string
  ) => {
    const res = await api.post('/auth/verify', {
      wallet,
      nonce,
      signature,
    })
    return res.data
  },

  refresh: async (refreshToken: string) => {
    const res = await api.post('/auth/refresh', { refreshToken })
    return res.data
  },
}
