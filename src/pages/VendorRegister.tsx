import { useState } from 'react'
import type { FormEvent } from 'react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { useToast } from '../hooks/useToast'

export function VendorRegister() {
  const { toast } = useToast()
  const [form, setForm] = useState({
    businessName: '',
    contactEmail: '',
    website: '',
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.businessName.trim() || !form.contactEmail.trim()) {
      toast.error('Please fill in the business name and contact email.')
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(form.contactEmail)) {
      toast.error('Please provide a valid email address.')
      return
    }

    toast.success('Vendor registration request submitted successfully.')
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="font-display font-bold text-3xl text-text-primary mb-2">
          Register as Vendor
        </h1>
        <p className="text-text-muted">
          Share your details and we’ll review your vendor application.
        </p>
      </div>

      <Card>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-text-secondary mb-2">Business name</label>
            <input
              value={form.businessName}
              onChange={(e) => setForm((prev) => ({ ...prev, businessName: e.target.value }))}
              className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-text-primary focus:border-brand focus:outline-none"
              placeholder="StepFi Education"
            />
          </div>

          <div>
            <label className="block text-sm text-text-secondary mb-2">Contact email</label>
            <input
              type="email"
              value={form.contactEmail}
              onChange={(e) => setForm((prev) => ({ ...prev, contactEmail: e.target.value }))}
              className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-text-primary focus:border-brand focus:outline-none"
              placeholder="vendor@example.com"
            />
          </div>

          <div>
            <label className="block text-sm text-text-secondary mb-2">Website (optional)</label>
            <input
              value={form.website}
              onChange={(e) => setForm((prev) => ({ ...prev, website: e.target.value }))}
              className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-text-primary focus:border-brand focus:outline-none"
              placeholder="https://example.com"
            />
          </div>

          <Button type="submit" className="w-full">
            Submit Registration
          </Button>
        </form>
      </Card>
    </div>
  )
}
