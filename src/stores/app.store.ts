import { create } from 'zustand'

interface AppStore {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

export const useAppStore = create<AppStore>((set) => ({
  mobileMenuOpen: false,
  setMobileMenuOpen: (mobileMenuOpen) => set({ mobileMenuOpen }),
}))
