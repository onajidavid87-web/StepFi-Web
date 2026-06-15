import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Zap, Users, TrendingUp } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { useWallet } from '../hooks/useWallet'

const features = [
  {
    icon: Shield,
    title: 'Wallet Auth',
    desc: 'Sign in with your Stellar wallet. No passwords, no email, no KYC.',
  },
  {
    icon: Zap,
    title: 'Instant Credit',
    desc: 'Apply for a loan and get approved on-chain within minutes.',
  },
  {
    icon: TrendingUp,
    title: 'Build Reputation',
    desc: 'Every on-time payment improves your on-chain credit score.',
  },
  {
    icon: Users,
    title: 'Sponsor Yield',
    desc: 'Sponsors deposit to the pool and earn APY from learner repayments.',
  },
]

export function Home() {
  const { isConnected, connectFreighter } = useWallet()

  return (
    <div>
      <section className="max-w-7xl mx-auto px-6 pt-20
        pb-24 text-center">
        <div className="inline-flex items-center gap-2
          px-4 py-2 rounded-full text-xs font-medium mb-8"
          style={{
            background: 'rgba(34,197,94,0.08)',
            border: '1px solid rgba(34,197,94,0.2)',
            color: '#22C55E',
          }}>
          <span className="w-1.5 h-1.5 rounded-full
            bg-brand animate-pulse" />
          Live on Stellar Testnet
        </div>

        <h1 className="font-display font-bold text-5xl
          md:text-6xl lg:text-7xl text-text-primary
          leading-tight mb-6">
          Step into your future.
          <br />
          <span style={{ color: '#22C55E' }}>
            Credit without banks.
          </span>
        </h1>

        <p className="text-text-secondary text-lg md:text-xl
          max-w-2xl mx-auto mb-10">
          StepFi is an open-source BNPL protocol on Stellar.
          Finance laptops, courses, and dev tools.
          Repay in installments. Build your on-chain reputation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4
          justify-center">
          {isConnected ? (
            <Link to="/dashboard">
              <Button size="lg">
                Go to Dashboard
                <ArrowRight size={18} />
              </Button>
            </Link>
          ) : (
            <Button
              size="lg"
              onClick={async () => {
                try {
                  await connectFreighter()
                } catch (err) {
                  alert(err instanceof Error ? err.message : 'Failed to connect')
                }
              }}
            >
              Connect Wallet to Start
              <ArrowRight size={18} />
            </Button>
          )}

          <a
            href="https://stepfi.vercel.app/demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline">
              View Demo
            </Button>
          </a>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2
          lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <Card key={f.title} hover>
              <div className="w-10 h-10 rounded-xl
                flex items-center justify-center mb-4"
                style={{
                  background: 'rgba(34,197,94,0.1)',
                  border: '1px solid rgba(34,197,94,0.2)',
                }}>
                <f.icon size={20} style={{ color: '#22C55E' }} />
              </div>
              <h3 className="font-display font-semibold
                text-text-primary mb-2">
                {f.title}
              </h3>
              <p className="text-text-secondary text-sm
                leading-relaxed">
                {f.desc}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="rounded-2xl p-10 md:p-14 text-center"
          style={{
            background: 'rgba(13,27,42,0.6)',
            border: '1px solid rgba(30,58,82,0.6)',
          }}>
          <h2 className="font-display font-bold text-3xl
            md:text-4xl text-text-primary mb-4">
            Deployed Contracts on Stellar Testnet
          </h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">
            5 Soroban smart contracts live and initialized.
            Verified on Stellar Expert.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Creditline',
              'Reputation',
              'Liquidity Pool',
              'Vendor Registry',
              'Parameters',
            ].map((name) => (
              <span key={name}
                className="px-4 py-2 rounded-full text-sm
                  text-text-secondary"
                style={{
                  border: '1px solid rgba(30,58,82,0.6)',
                  background: 'rgba(13,27,42,0.4)',
                }}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
