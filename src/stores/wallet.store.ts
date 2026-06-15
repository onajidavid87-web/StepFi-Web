import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { WalletType } from '../types'

interface WalletStore {
  address: string
  walletType: WalletType
  isConnected: boolean
  setWallet: (address: string, type: WalletType) => void
  disconnect: () => void
}

export const useWalletStore = create<WalletStore>()(
  persist(
    (set) => ({
      address: '',
      walletType: null,
      isConnected: false,
      setWallet: (address, walletType) =>
        set({ address, walletType, isConnected: true }),
      disconnect: () =>
        set({
          address: '',
          walletType: null,
          isConnected: false,
        }),
    }),
    { name: 'stepfi-wallet' }
  )
)
