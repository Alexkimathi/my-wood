import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Products — MY WOOD Timber Co.',
}

const products = [
  {
    img: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=600&h=300&q=80',
    alt: 'Structural Timber',
    badge: 'Structural',
    name: 'Structural Timber',
    desc: 'Beams, posts, joists, and framing timber engineered for load-bearing strength. Precision graded and dimensioned.',
    delay: '',
  },
  {
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&h=300&q=80',
    alt: 'Hardwood Flooring',
    badge: 'Interior',
    name: 'Hardwood Flooring',
    desc: 'Seasoned hardwoods that bring warmth and lasting character to any interior space. Wide range of species available.',
    delay: 'rv-d1',
  },
  {
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&h=300&q=80',
    alt: 'Decking Timber',
    badge: 'Outdoor',
    name: 'Decking Timber',
    desc: 'Weather-resistant decking boards for outdoor living areas. Durable, beautiful, and built for the elements.',
    delay: 'rv-d2',
  },
  {
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&h=300&q=80',
    alt: 'Cladding and Siding',
    badge: 'Exterior',
    name: 'Cladding & Siding',
    desc: 'External wall cladding that combines natural beauty with long-term structural protection and weatherproofing.',
    delay: '',
  },
  {
    img: 'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&fit=crop&w=600&h=300&q=80',
    alt: 'Plywood and Sheet Goods',
    badge: 'Sheet Goods',
    name: 'Plywood & Sheet Goods',
    desc: 'Structural and decorative plywood, MDF, and specialty boards for construction, cabinetry, and fit-out.',
    delay: 'rv-d1',
  },
  {
    img: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&h=300&q=80',
    alt: 'Treated Timber',
    badge: 'Treated',
    name: 'Treated Timber',
    desc: 'H2–H5 treated timber for ground contact, framing, and all outdoor applications. Termite and rot resistant.',
    delay: 'rv-d2',
  },
]

export default function ProductsPage() {
  return (
    <section id="products" className="page-top">
      <div className="products-top rv">
        <div>
          <div className="tag">What We Supply</div>
          <h2 className="s-title">Our Timber <span>Products</span></h2>
          <p className="s-sub">Structural to decorative, treated to hardwood — we stock a comprehensive range for every application.</p>
        </div>
        <Link href="/contact" className="btn-primary" style={{ flexShrink: 0, alignSelf: 'flex-end' }}>
          Request a Quote →
        </Link>
      </div>

      <div className="products-grid">
        {products.map(p => (
          <div key={p.name} className={`prod-card rv${p.delay ? ' ' + p.delay : ''}`}>
            <div className="prod-img-wrap">
              <Image src={p.img} alt={p.alt} className="prod-img" width={600} height={300} unoptimized />
              <span className="prod-badge">{p.badge}</span>
            </div>
            <div className="prod-name">{p.name}</div>
            <p className="prod-desc">{p.desc}</p>
            <Link href="/contact" className="prod-link">Get a quote →</Link>
          </div>
        ))}
      </div>
    </section>
  )
}
