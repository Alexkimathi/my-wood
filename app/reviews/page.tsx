import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reviews — MY WOOD Timber Co.',
}

const reviews = [
  {
    initials: 'JM',
    name: 'James M.',
    role: 'Building Contractor',
    avatarClass: 'tav1',
    text: '"MY WOOD has been our go-to supplier for years. Consistently high-quality stock, fair pricing, and they always have what we need. Wouldn\'t go anywhere else."',
    delay: '',
  },
  {
    initials: 'SR',
    name: 'Sarah R.',
    role: 'Landscape Architect',
    avatarClass: 'tav2',
    text: '"Great range, knowledgeable staff, and delivery was right on time. They helped us spec the right hardwood for our decking project and it looks incredible."',
    delay: 'rv-d1',
  },
  {
    initials: 'KP',
    name: 'Kevin P.',
    role: 'Custom Home Builder',
    avatarClass: 'tav3',
    text: '"As a builder, reliable supply is everything. MY WOOD understands that. Their stock is always consistent and their team actually knows their product."',
    delay: 'rv-d2',
  },
]

export default function ReviewsPage() {
  return (
    <section id="testimonials" className="page-top">
      <div className="rv" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <div className="tag" style={{ justifyContent: 'center' }}>What Clients Say</div>
        <h2 className="s-title">Trusted by builders <span>everywhere</span></h2>
      </div>

      <div className="testi-grid">
        {reviews.map(r => (
          <div key={r.name} className={`testi-card rv${r.delay ? ' ' + r.delay : ''}`}>
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">{r.text}</p>
            <div className="testi-author">
              <div className={`testi-avatar ${r.avatarClass}`}>{r.initials}</div>
              <div>
                <div className="testi-name">{r.name}</div>
                <div className="testi-role">{r.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
