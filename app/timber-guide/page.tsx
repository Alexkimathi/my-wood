import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Timber Guide — MY WOOD Timber Co.',
}

const species = [
  {
    icon: '🌲',
    name: 'Cypress',
    latin: 'Cupressus lusitanica',
    desc: "Kenya's most widely used softwood. Light, straight-grained, and easy to work. Ideal for structural framing, roof trusses, ceiling boards, and general carpentry.",
    props: [
      { label: 'Hardness', val: 'Soft' },
      { label: 'Durability', val: 'Moderate' },
      { label: 'Workability', val: 'Excellent' },
      { label: 'Best For', val: 'Framing & Ceilings' },
    ],
    price: 'KSh 850',
    delay: '',
  },
  {
    icon: '🌲',
    name: 'Pine',
    latin: 'Pinus radiata',
    desc: 'Kiln-dried imported pine for precision joinery. Clean grain, consistent sizing, and accepts stain and paint well. Popular for furniture, shelving, and mouldings.',
    props: [
      { label: 'Hardness', val: 'Soft' },
      { label: 'Durability', val: 'Moderate' },
      { label: 'Workability', val: 'Excellent' },
      { label: 'Best For', val: 'Furniture & Joinery' },
    ],
    price: 'KSh 950',
    delay: 'rv-d1',
  },
  {
    icon: '🪵',
    name: 'Mahogany',
    latin: 'Swietenia macrophylla',
    desc: 'A premium hardwood prized for its rich reddish-brown colour and lasting durability. Machines beautifully for interior finishes, doors, and high-end furniture.',
    props: [
      { label: 'Hardness', val: 'Hard' },
      { label: 'Durability', val: 'Excellent' },
      { label: 'Workability', val: 'Good' },
      { label: 'Best For', val: 'Doors & Panelling' },
    ],
    price: 'KSh 1,800',
    delay: 'rv-d2',
  },
  {
    icon: '🌳',
    name: 'Mvule',
    latin: 'Milicia excelsa',
    desc: "Africa's premier hardwood. Exceptionally strong and naturally resistant to termites and moisture. The choice for heavy structural work and exterior applications.",
    props: [
      { label: 'Hardness', val: 'Very Hard' },
      { label: 'Durability', val: 'Excellent' },
      { label: 'Workability', val: 'Moderate' },
      { label: 'Best For', val: 'Structural & Floors' },
    ],
    price: 'KSh 2,200',
    delay: '',
  },
  {
    icon: '🌴',
    name: 'Teak',
    latin: 'Tectona grandis',
    desc: 'World-renowned for outdoor durability. Natural oils make it highly resistant to moisture, salt air, and UV — the standard for quality decking and garden furniture.',
    props: [
      { label: 'Hardness', val: 'Hard' },
      { label: 'Durability', val: 'Exceptional' },
      { label: 'Workability', val: 'Good' },
      { label: 'Best For', val: 'Decking & Marine' },
    ],
    price: 'KSh 2,600',
    delay: 'rv-d1',
  },
  {
    icon: '🌿',
    name: 'Eucalyptus',
    latin: 'Eucalyptus saligna',
    desc: 'Fast-growing and cost-effective. Suitable for structural poles, formwork, and agricultural use. Available in large diameters and long lengths from our yard.',
    props: [
      { label: 'Hardness', val: 'Moderate' },
      { label: 'Durability', val: 'Moderate' },
      { label: 'Workability', val: 'Good' },
      { label: 'Best For', val: 'Poles & Formwork' },
    ],
    price: 'KSh 600',
    delay: 'rv-d2',
  },
]

const tableRows = [
  { name: 'Cypress',     type: 'Softwood', hardness: 'Soft',      durability: 'Moderate',   use: 'Framing, Ceilings',    price: 'KSh 850/m' },
  { name: 'Pine',        type: 'Softwood', hardness: 'Soft',      durability: 'Moderate',   use: 'Furniture, Joinery',   price: 'KSh 950/m' },
  { name: 'Mahogany',    type: 'Hardwood', hardness: 'Hard',      durability: 'Excellent',  use: 'Doors, Panelling',     price: 'KSh 1,800/m' },
  { name: 'Mvule',       type: 'Hardwood', hardness: 'Very Hard', durability: 'Excellent',  use: 'Structural, Floors',   price: 'KSh 2,200/m' },
  { name: 'Teak',        type: 'Hardwood', hardness: 'Hard',      durability: 'Exceptional',use: 'Decking, Marine',      price: 'KSh 2,600/m' },
  { name: 'Eucalyptus',  type: 'Softwood', hardness: 'Moderate',  durability: 'Moderate',   use: 'Poles, Formwork',      price: 'KSh 600/m' },
]

export default function TimberGuidePage() {
  return (
    <section id="timber-guide" className="page-top">
      <div className="rv" style={{ maxWidth: '640px' }}>
        <div className="tag">Species Guide</div>
        <h2 className="s-title">Know your <span>timber</span></h2>
        <p className="s-sub">
          Not sure which species is right for your project? Our guide covers the six most popular timbers we stock — with hardness, durability, best uses, and indicative pricing.
        </p>
      </div>

      <div className="species-grid">
        {species.map(s => (
          <div key={s.name} className={`species-card rv${s.delay ? ' ' + s.delay : ''}`}>
            <span className="species-icon">{s.icon}</span>
            <div className="species-name">{s.name}</div>
            <div className="species-latin">{s.latin}</div>
            <p className="species-desc">{s.desc}</p>
            <div className="species-props">
              {s.props.map(p => (
                <div key={p.label} className="species-prop">
                  <span className="sp-label">{p.label}</span>
                  <span className="sp-val">{p.val}</span>
                </div>
              ))}
            </div>
            <div className="species-price">From <strong>{s.price}/m</strong></div>
          </div>
        ))}
      </div>

      <div className="guide-table-wrap rv">
        <h3 style={{ fontFamily: "'Times New Roman', Times, serif", fontWeight: 700, fontSize: '1.3rem', marginBottom: '1.5rem', color: 'var(--dark)' }}>
          Quick Comparison
        </h3>
        <table className="guide-table">
          <thead>
            <tr>
              <th>Species</th>
              <th>Type</th>
              <th>Hardness</th>
              <th>Durability</th>
              <th>Best Use</th>
              <th>Price from</th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map(r => (
              <tr key={r.name}>
                <td>{r.name}</td>
                <td>{r.type}</td>
                <td>{r.hardness}</td>
                <td>{r.durability}</td>
                <td>{r.use}</td>
                <td>{r.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
