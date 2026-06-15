import { api } from './api'

export const reputationService = {
  getScore: async (walletAddress: string) => {
    const res = await api.get(`/reputation/${walletAddress}`)
    return res.data
  },
}
