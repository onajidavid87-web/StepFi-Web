import { useWalletStore } from '../stores/wallet.store'
import { useUserStore } from '../stores/user.store'
import {
  isConnected,
  requestAccess,
} from '@stellar/freighter-api'

export const useWallet = () => {
  const {
    address,
    walletType,
    isConnected: walletConnected,
    setWallet,
    disconnect,
  } = useWalletStore()

  const { clearTokens } = useUserStore()

  const connectFreighter = async () => {
    const connection = await isConnected()
    if (!connection.isConnected) {
      throw new Error(
        'Freighter not installed. Download at freighter.app'
      )
    }
    const access = await requestAccess()
    if (access.error) {
      throw new Error(access.error.message)
    }
    setWallet(access.address, 'freighter')
    return access.address
  }

  const disconnectWallet = () => {
    disconnect()
    clearTokens()
  }

  return {
    address,
    walletType,
    isConnected: walletConnected,
    connectFreighter,
    disconnectWallet,
  }
}
