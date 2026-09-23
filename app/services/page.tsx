import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services — MY WOOD Timber Co.',
}

const services = [
  { icon: '🏭', name: 'Wholesale Supply', desc: 'Bulk orders at trade prices. We have the volume and variety to keep your projects moving, small or large.', delay: '' },
  { icon: '🪚', name: 'Custom Milling', desc: 'Specific profile, length, or species? We offer custom milling and sizing to match your exact requirements.', delay: 'rv-d1' },
  { icon: '💬', name: 'Timber Consulting', desc: 'Not sure what you need? Our team advises on species, treatment grades, structural requirements, and alternatives.', delay: 'rv-d2' },
  { icon: '🚚', name: 'Site Delivery', desc: 'Reliable delivery straight to your site. On-schedule supply so your builds stay on track.', delay: '' },
  { icon: '🛒', name: 'Retail Counter', desc: 'Walk in and collect from our yard. Timber available off the shelf for smaller jobs and urgent needs.', delay: 'rv-d1' },
  { icon: '📋', name: 'Project Estimating', desc: 'Share your plans and we\'ll provide quantity take-offs and accurate pricing, saving you time quoting.', delay: 'rv-d2' },
  { icon: '🔨', name: 'Supply & Fix', desc: 'Timber and labour under one roof. Our installation teams handle deck-laying, roofing, framing, and fit-outs for clients who want a complete solution.', delay: '' },
  { icon: '📐', name: 'Design & Planning', desc: 'Bring us your brief and we\'ll produce a timber specification, cut list, and material schedule — perfect for architects, designers, and first-time builders.', delay: 'rv-d1' },
]

export default function ServicesPage() {
  return (
    <section id="services" className="page-top">
      <div className="services-top rv">
        <div>
          <div className="tag">How We Help</div>
          <h2 className="s-title">Everything your<br />project <span>needs</span></h2>
        </div>
        <p className="s-sub" style={{ marginTop: 0 }}>
          From bulk wholesale orders to custom milling and expert consulting — we&apos;re your complete timber partner.
        </p>
      </div>

      <div className="services-grid">
        {services.map(s => (
          <div key={s.name} className={`svc-card rv${s.delay ? ' ' + s.delay : ''}`}>
            <div className="svc-icon">{s.icon}</div>
            <div className="svc-name">{s.name}</div>
            <p className="svc-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
