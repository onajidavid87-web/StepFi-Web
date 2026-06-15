import { clsx } from 'clsx'

interface BadgeProps {
  label: string
  variant?: 'green' | 'blue' | 'amber' | 'red' | 'muted'
}

export function Badge({ label, variant = 'muted' }: BadgeProps) {
  return (
    <span className={clsx(
      'px-2.5 py-1 rounded-full text-xs font-medium',
      {
        'bg-brand/10 text-brand border border-brand/20':
          variant === 'green',
        'bg-blue-500/10 text-blue-400 border border-blue-500/20':
          variant === 'blue',
        'bg-amber-500/10 text-amber-400 border border-amber-500/20':
          variant === 'amber',
        'bg-red-500/10 text-red-400 border border-red-500/20':
          variant === 'red',
        'bg-elevated text-text-muted border border-border':
          variant === 'muted',
      }
    )}>
      {label}
    </span>
  )
}
