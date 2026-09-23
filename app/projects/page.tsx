import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Projects — MY WOOD Timber Co.',
}

const projects = [
  {
    location: 'Kiambu, Kenya',
    name: 'Kiambu Road Residence',
    desc: 'Full structural timber supply for a 4-bedroom family home. Cypress wall framing, pine ceiling boards, and treated hardwood for the wraparound veranda.',
    tags: ['Residential', 'Structural', 'Cypress', 'Pine'],
    img: 'https://images.unsplash.com/photo-1590725121839-892b458a74fe?auto=format&fit=crop&w=600&h=420&q=80',
    alt: 'Residential timber framing',
    delay: '',
  },
  {
    location: 'Thika, Kenya',
    name: "St. Mary's School Hall Roofing",
    desc: "Replacement of an entire school hall roof structure with pressure-treated cypress trusses. Completed over two weekends to minimise disruption to classes.",
    tags: ['Commercial', 'Roofing', 'Cypress'],
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&h=420&q=80',
    alt: 'School roofing construction',
    delay: 'rv-d1',
  },
  {
    location: 'Diani Beach, Kenya',
    name: 'Diani Breeze Hotel Decking',
    desc: 'Iroko hardwood decking across two beachfront terraces, totalling 340 m². Marine-grade treated timber throughout to withstand coastal humidity and salt air.',
    tags: ['Hospitality', 'Decking', 'Iroko'],
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&h=420&q=80',
    alt: 'Hotel deck timber',
    delay: 'rv-d2',
  },
  {
    location: 'Nairobi, Kenya',
    name: 'Westlands Corporate Fit-Out',
    desc: 'Engineered hardwood flooring and solid mahogany feature panelling for a 6-storey commercial office building. Precision-cut to a tight site schedule.',
    tags: ['Commercial', 'Flooring', 'Mahogany'],
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&h=420&q=80',
    alt: 'Office timber panelling',
    delay: '',
  },
  {
    location: 'Dundori, Kenya',
    name: 'Dundori Highlands Farm Store',
    desc: 'Agricultural storage facility framed in rough-sawn cypress with corrugated steel infill. Full supply and delivery completed within 72 hours of order.',
    tags: ['Agricultural', 'Structural', 'Cypress'],
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&h=420&q=80',
    alt: 'Farm storage structure',
    delay: 'rv-d1',
  },
  {
    location: 'Mombasa, Kenya',
    name: 'Nyali Garden Apartments',
    desc: 'Balcony decking and pergola structures for 24 residential units. Teak timber throughout for long-term durability against Mombasa salt air and humidity.',
    tags: ['Residential', 'Decking', 'Teak'],
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&h=420&q=80',
    alt: 'Apartment balcony decking',
    delay: 'rv-d2',
  },
]

export default function ProjectsPage() {
  return (
    <section id="projects" className="page-top">
      <div className="rv" style={{ maxWidth: '640px' }}>
        <div className="tag">Our Work</div>
        <h2 className="s-title">Timber projects across <span>Kenya</span></h2>
        <p className="s-sub">
          From residential builds in Kiambu to beachfront hotels in Diani — here&apos;s a selection of projects we&apos;ve had the privilege of supplying.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map(p => (
          <div key={p.name} className={`project-card rv${p.delay ? ' ' + p.delay : ''}`}>
            <div className="project-img-wrap">
              <Image
                src={p.img}
                alt={p.alt}
                className="project-img"
                width={600}
                height={420}
                unoptimized
              />
            </div>
            <div className="project-body">
              <div className="project-location">{p.location}</div>
              <div className="project-name">{p.name}</div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map(t => (
                  <span key={t} className="project-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
