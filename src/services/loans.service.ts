import { api } from './api'

export const loansService = {
  getMyLoans: async () => {
    const res = await api.get('/loans')
    return res.data
  },

  getLoan: async (id: string) => {
    const res = await api.get(`/loans/${id}`)
    return res.data
  },
}
