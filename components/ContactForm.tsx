'use client'
import { useState } from 'react'

type FormState = {
  firstName: string
  lastName: string
  email: string
  phone: string
  product: string
  message: string
}

const initial: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  product: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initial)
  const [sent, setSent] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setForm(initial)
    }, 4000)
  }

  return (
    <div className="form-card rv rv-d1">
      <div className="form-card-title">Send an Enquiry</div>
      <div className="form-card-sub">Fill in your details and we&apos;ll get back to you with pricing and availability.</div>

      <form className="form-grid" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              autoComplete="given-name"
              value={form.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              autoComplete="family-name"
              value={form.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="product">Product Interest</label>
          <select id="product" name="product" value={form.product} onChange={handleChange}>
            <option value="">Select a product…</option>
            <option>Structural Timber</option>
            <option>Hardwood Flooring</option>
            <option>Decking Timber</option>
            <option>Cladding &amp; Siding</option>
            <option>Plywood &amp; Sheet Goods</option>
            <option>Treated Timber</option>
            <option>Custom Milling</option>
            <option>Multiple / Full Project</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Project Details</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us about your project, quantities needed, or any questions…"
            value={form.message}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className={`form-submit${sent ? ' sent' : ''}`} disabled={sent}>
          {sent ? 'Enquiry Sent ✓' : 'Send Enquiry →'}
        </button>
      </form>
    </div>
  )
}
