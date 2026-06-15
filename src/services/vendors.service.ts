import { api } from './api'

export const vendorsService = {
  listVendors: async (page = 1, limit = 10) => {
    const res = await api.get(
      `/vendors?page=${page}&limit=${limit}`
    )
    return res.data
  },

  getVendor: async (id: string) => {
    const res = await api.get(`/vendors/${id}`)
    return res.data
  },
}
