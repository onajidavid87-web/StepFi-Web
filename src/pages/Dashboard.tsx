import { useWallet } from '../hooks/useWallet'
import { Link } from 'react-router-dom'
import {
  CreditCard, TrendingUp, Building, ArrowRight
} from 'lucide-react'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'

const quickActions = [
  {
    icon: CreditCard,
    label: 'Apply for Loan',
    href: '/apply',
    color: '#22C55E'
  },
  {
    icon: TrendingUp,
    label: 'View Reputation',
    href: '/reputation',
    color: '#2563EB'
  },
  {
    icon: Building,
    label: 'Browse Vendors',
    href: '/vendors',
    color: '#F59E0B'
  },
]

export function Dashboard() {
  const { address, isConnected } = useWallet()

  if (!isConnected) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24
        text-center">
        <h2 className="font-display font-bold text-3xl
          text-text-primary mb-4">
          Connect your wallet to continue
        </h2>
        <p className="text-text-secondary mb-8">
          You need a Stellar wallet to access the dashboard.
        </p>
        <Link to="/">
          <Button>Go to Home</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-10">
        <h1 className="font-display font-bold text-3xl
          text-text-primary mb-1">
          Welcome back
        </h1>
        <p className="font-mono text-sm text-text-muted">
          {address.slice(0, 12)}...{address.slice(-6)}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3
        gap-4 mb-10">
        {quickActions.map((action) => (
          <Link key={action.href} to={action.href}>
            <Card hover className="flex items-center
              justify-between cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl
                  flex items-center justify-center"
                  style={{
                    background: `${action.color}18`,
                    border: `1px solid ${action.color}30`,
                  }}>
                  <action.icon
                    size={18}
                    style={{ color: action.color }}
                  />
                </div>
                <span className="font-medium text-text-primary">
                  {action.label}
                </span>
              </div>
              <ArrowRight size={16} className="text-text-muted" />
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <h3 className="font-display font-semibold
            text-text-primary mb-4">
            Active Loans
          </h3>
          <div className="flex items-center justify-center
            py-8 text-text-muted text-sm">
            No active loans yet.
            <Link to="/apply"
              className="text-brand ml-1 hover:underline">
              Apply for one
            </Link>
          </div>
        </Card>

        <Card>
          <h3 className="font-display font-semibold
            text-text-primary mb-4">
            Reputation Score
          </h3>
          <div className="flex items-center justify-center
            py-8 text-text-muted text-sm">
            <Link to="/reputation"
              className="text-brand hover:underline">
              View your score
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
}
