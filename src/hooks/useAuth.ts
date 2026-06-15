import { useUserStore } from '../stores/user.store'
import { useWalletStore } from '../stores/wallet.store'

export const useAuth = () => {
  const { isAuthenticated, setTokens, clearTokens } = useUserStore()
  const { isConnected, address } = useWalletStore()

  return {
    isAuthenticated,
    isConnected,
    address,
    setTokens,
    clearTokens,
  }
}
