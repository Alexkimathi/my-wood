import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About — MY WOOD Timber Co.',
}

export default function AboutPage() {
  return (
    <section id="about" className="page-top">
      <div className="about-visual rv">
        <Image
          src="https://images.unsplash.com/photo-1538528286411-a14ee598bf4f?auto=format&fit=crop&w=600&h=750&q=80"
          alt="Lorry loaded with timber logs — MY WOOD delivery team"
          className="about-img"
          width={600}
          height={750}
          unoptimized
        />
        <div className="about-visual-bg" />

        <div className="about-chip ac1">
          <span className="ac-icon">📦</span>
          <div className="ac-label">Stock Available</div>
          <div className="ac-val">Same Day</div>
        </div>
        <div className="about-chip ac2">
          <div className="ac-label">Established</div>
          <div className="ac-val">15+ Years</div>
        </div>
      </div>

      <div className="rv rv-d1">
        <div className="tag">Our Story</div>
        <h2 className="s-title">Timber you can <span>trust</span></h2>
        <p className="s-sub" style={{ maxWidth: '100%' }}>
          MY WOOD Timber Co. was founded on a straightforward promise: supply the best timber, honestly, at fair prices. We work with builders, contractors, architects, and homeowners who all have one thing in common — they don&apos;t compromise on quality.
        </p>

        <ul className="about-list">
          <li>Every piece graded and quality-checked before it leaves our yard</li>
          <li>Wide species selection — from softwoods to premium hardwoods</li>
          <li>Trade accounts and wholesale pricing available</li>
          <li>Expert advice from people who know timber inside and out</li>
          <li>Reliable delivery direct to your site or project location</li>
          <li>Walk-in retail counter for urgent requirements</li>
        </ul>

        <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn-primary">Talk to Our Team →</Link>
          <Link href="/services" className="btn-secondary">Our Services</Link>
        </div>
      </div>
    </section>
  )
}
