export type WalletType = 'freighter' | 'lobstr' | null

export interface User {
  walletAddress: string
  walletType: WalletType
  accessToken: string
  refreshToken: string
}

export interface Loan {
  id: string
  borrower: string
  vendor: string
  amount: number
  installments: number
  paidInstallments: number
  status: 'Pending' | 'Active' | 'Repaid' | 'Defaulted'
  createdAt: string
  repayments: Repayment[]
}

export interface Repayment {
  index: number
  amount: number
  paid: boolean
  paidAt?: string
}

export interface ReputationScore {
  walletAddress: string
  score: number
  tier: 'Starter' | 'Bronze' | 'Silver' | 'Gold'
  interestRate: number
  creditLimit: number
  lastUpdated: string
}

export interface Vendor {
  id: string
  name: string
  category: string
  country: string
  website?: string
  description?: string
  rating?: number
}

export interface PoolInfo {
  totalDeposits: number
  totalShares: number
  sharePrice: number
  availableLiquidity: number
  lockedLiquidity: number
  apy: number
}
