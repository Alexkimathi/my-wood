import Link from 'next/link'
import Image from 'next/image'
import HeroVideo from '@/components/HeroVideo'
import TaglineReveal from '@/components/TaglineReveal'

const tickerItems = [
  'Quality Guaranteed',
  '50+ Species In Stock',
  'Same-Day Pickup',
  '15 Years Experience',
  '500+ Projects Supplied',
  'Custom Milling Available',
  'Expert Timber Advice',
  'Trade Accounts Welcome',
]

export default function HomePage() {
  return (
    <>
      {/* ════════ HERO ════════ */}
      <section className="hero-section">
        <HeroVideo />
        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="hero-eyebrow">Premium Timber Specialists</div>

          <h1 className="hero-h1">
            Premium Timber<br />
            for Every <span>Build</span>
          </h1>

          <p className="hero-sub-text">
            Quality timber sourced, graded, and delivered with precision. Whether you&apos;re a contractor, builder, or homeowner — we have the timber you need, when you need it.
          </p>

          <div className="hero-ctas">
            <Link href="/products" className="hero-btn-primary">Browse Products →</Link>
            <Link href="/contact" className="hero-btn-ghost">Get a Quote</Link>
          </div>

          <div className="hero-stats-row">
            <div className="hero-stat">
              <div className="hero-stat-num">50<span>+</span></div>
              <div className="hero-stat-label">Species in stock</div>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <div className="hero-stat-num">500<span>+</span></div>
              <div className="hero-stat-label">Projects supplied</div>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <div className="hero-stat-num">15<span>+</span></div>
              <div className="hero-stat-label">Years experience</div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-line" />
          <div className="scroll-label">Scroll</div>
        </div>
      </section>

      {/* ════════ TICKER STRIP ════════ */}
      <div className="ticker-wrap">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="ticker-item">
              <span className="ticker-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ════════ INTRO / ABOUT SPLIT ════════ */}
      <section className="section-intro">
        <div className="intro-left">
          <div className="tag rv">Our Promise</div>
          <h2 className="s-title rv">Your complete<br /><span>timber partner</span></h2>
          <p className="section-body rv">
            For over 15 years, MY WOOD Timber Co. has been the trusted choice for builders, contractors, and homeowners across the region. We don&apos;t just supply timber — we partner with you from selection through to delivery, ensuring every project gets exactly what it needs.
          </p>

          <ul className="intro-checklist">
            <li className="rv">Every piece graded and quality checked before it leaves our yard</li>
            <li className="rv rv-d1">50+ timber species in stock — from structural to decorative</li>
            <li className="rv rv-d2">Same-day availability on most standard sizes and species</li>
            <li className="rv rv-d3">Expert advice from real timber specialists, not call center staff</li>
          </ul>

          <Link href="/about" className="intro-cta rv">Our Story →</Link>
        </div>

        <div className="intro-right">
          <div className="stat-color-grid">
            <div className="stat-color-card scc-orange rv">
              <span className="scc-icon">🪵</span>
              <div>
                <div className="scc-num">50+</div>
                <div className="scc-label">Timber species ready to pick up today</div>
              </div>
            </div>
            <div className="stat-color-card scc-dark rv rv-d1">
              <span className="scc-icon">🏗</span>
              <div>
                <div className="scc-num">500+</div>
                <div className="scc-label">Projects successfully supplied</div>
              </div>
            </div>
            <div className="stat-color-card scc-green rv rv-d2">
              <span className="scc-icon">⭐</span>
              <div>
                <div className="scc-num">15+</div>
                <div className="scc-label">Years of industry experience</div>
              </div>
            </div>
            <div className="stat-color-card scc-light rv rv-d3">
              <span className="scc-icon">✓</span>
              <div>
                <div className="scc-num">100%</div>
                <div className="scc-label">Quality guaranteed on every order</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ WHY MY WOOD — PILLARS ════════ */}
      <section className="section-pillars">
        <div className="section-head">
          <div className="tag rv" style={{ justifyContent: 'center' }}>Why MY WOOD</div>
          <h2 className="s-title rv" style={{ textAlign: 'center' }}>Built on <span>trust</span> &amp; timber</h2>
        </div>
        <div className="pillars-grid">
          <div className="pillar-card rv">
            <span className="pillar-icon">🏗</span>
            <div className="pillar-num">15+</div>
            <div className="pillar-label">Years supplying Kenya&apos;s top builders &amp; contractors</div>
          </div>
          <div className="pillar-card rv rv-d1">
            <span className="pillar-icon">🪵</span>
            <div className="pillar-num">50+</div>
            <div className="pillar-label">Timber species ready for same-day collection</div>
          </div>
          <div className="pillar-card rv rv-d2">
            <span className="pillar-icon">📦</span>
            <div className="pillar-num">500+</div>
            <div className="pillar-label">Projects successfully supplied across the region</div>
          </div>
          <div className="pillar-card rv rv-d3">
            <span className="pillar-icon">✓</span>
            <div className="pillar-num">100%</div>
            <div className="pillar-label">Quality-checked on every order — no compromise</div>
          </div>
        </div>
      </section>

      {/* ════════ TAGLINE REVEAL ════════ */}
      <TaglineReveal />

      {/* ════════ PRODUCTS PREVIEW ════════ */}
      <section className="section-products-preview">
        <div className="products-header">
          <div className="products-header-left">
            <div className="tag rv">Our Products</div>
            <h2 className="s-title rv">Timber for every<br /><span>application</span></h2>
          </div>
          <Link href="/products" className="view-all-link rv">View All Products →</Link>
        </div>

        <div className="products-preview-grid">
          <div className="prod-card rv">
            <div className="prod-img-wrap">
              <Image
                src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=600&h=300&q=80"
                alt="Structural Timber"
                className="prod-img"
                width={600}
                height={300}
                unoptimized
              />
              <span className="prod-badge">Structural</span>
            </div>
            <div className="prod-name">Structural Timber</div>
            <p className="prod-desc">MGP10 and MGP12 graded framing timber for walls, floors, and roof structures. Available in all standard lengths and dressed or rough-sawn profiles.</p>
            <Link href="/products" className="prod-link">View Range →</Link>
          </div>

          <div className="prod-card rv rv-d1">
            <div className="prod-img-wrap">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&h=300&q=80"
                alt="Decking Timber"
                className="prod-img"
                width={600}
                height={300}
                unoptimized
              />
              <span className="prod-badge">Outdoor</span>
            </div>
            <div className="prod-name">Decking Timber</div>
            <p className="prod-desc">Hardwood and treated pine decking in a range of profiles. Pre-oiled and kiln-dried options available, with matching fascia and framing timber.</p>
            <Link href="/products" className="prod-link">View Range →</Link>
          </div>

          <div className="prod-card rv rv-d2">
            <div className="prod-img-wrap">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&h=300&q=80"
                alt="Hardwood Flooring"
                className="prod-img"
                width={600}
                height={300}
                unoptimized
              />
              <span className="prod-badge">Flooring</span>
            </div>
            <div className="prod-name">Hardwood Flooring</div>
            <p className="prod-desc">Premium solid hardwood and engineered flooring boards in a range of species and finishes. Tongue-and-groove profiles for a clean, professional result.</p>
            <Link href="/products" className="prod-link">View Range →</Link>
          </div>
        </div>
      </section>

      {/* ════════ SERVICES — DARK ════════ */}
      <section className="section-services-dark">
        <div className="services-dark-header">
          <div>
            <div className="tag rv">What We Do</div>
            <h2 className="sdh-title rv">Everything you need<br /><span>in one yard</span></h2>
          </div>
          <div>
            <p className="sdh-desc rv">
              From a single board to a full-site supply, we handle every scale of project. Our team brings specialist knowledge and genuine stock availability — no substitutions, no delays.
            </p>
          </div>
        </div>

        <div className="services-dark-grid">
          <div className="svc-dark-card rv">
            <div className="svc-num">01</div>
            <span className="svc-dark-icon">🏭</span>
            <div className="svc-dark-name">Wholesale Supply</div>
            <p className="svc-dark-desc">Trade pricing, volume discounts, and credit accounts for builders and contractors running multiple projects.</p>
          </div>
          <div className="svc-dark-card rv rv-d1">
            <div className="svc-num">02</div>
            <span className="svc-dark-icon">⚙️</span>
            <div className="svc-dark-name">Custom Milling</div>
            <p className="svc-dark-desc">Non-standard dimensions, profiles, and dressed finishes milled to your exact specifications on-site.</p>
          </div>
          <div className="svc-dark-card rv rv-d2">
            <div className="svc-num">03</div>
            <span className="svc-dark-icon">🧠</span>
            <div className="svc-dark-name">Timber Consulting</div>
            <p className="svc-dark-desc">Expert species selection, structural advice, and grading guidance from our experienced team.</p>
          </div>
          <div className="svc-dark-card rv rv-d3">
            <div className="svc-num">04</div>
            <span className="svc-dark-icon">🚛</span>
            <div className="svc-dark-name">Site Delivery</div>
            <p className="svc-dark-desc">Reliable delivery direct to your construction site. We work around your schedule to keep your project moving.</p>
          </div>
          <div className="svc-dark-card rv rv-d4">
            <div className="svc-num">05</div>
            <span className="svc-dark-icon">🛒</span>
            <div className="svc-dark-name">Retail Counter</div>
            <p className="svc-dark-desc">Walk-in, browse our full range, and take stock same-day. Open six days a week for trade and public.</p>
          </div>
          <div className="svc-dark-card rv rv-d4">
            <div className="svc-num">06</div>
            <span className="svc-dark-icon">📋</span>
            <div className="svc-dark-name">Project Estimating</div>
            <p className="svc-dark-desc">Bring your plans and we&apos;ll put together a complete materials list and quote — no obligation, no guesswork.</p>
          </div>
        </div>
      </section>

      {/* ════════ FOREST CONSERVATION ════════ */}
      <section className="section-conservation">
        <div className="conservation-header">
          <div>
            <div className="tag cons-tag rv">Our Commitment</div>
            <h2 className="s-title rv">Timber that gives<br /><span>back to the forest</span></h2>
          </div>
          <p className="conservation-intro rv">
            Every order placed with MY WOOD is a step toward a healthier forest. We take our responsibility to Kenya&apos;s natural resources seriously — from the source to your site.
          </p>
        </div>

        <div className="conservation-grid">
          <div className="conservation-card rv">
            <span className="cons-icon">🌱</span>
            <div className="cons-stat">2 trees</div>
            <div className="cons-title">Planted per order</div>
            <p className="cons-desc">For every order we fulfil, we plant two trees through local reforestation programmes across Kenya — giving the forest back more than we take.</p>
          </div>
          <div className="conservation-card rv rv-d1">
            <span className="cons-icon">🌳</span>
            <div className="cons-stat">100%</div>
            <div className="cons-title">Sustainably sourced</div>
            <p className="cons-desc">Every piece of timber comes from licensed, sustainably managed forests. We do not trade in timber from illegal or uncontrolled logging operations.</p>
          </div>
          <div className="conservation-card rv rv-d2">
            <span className="cons-icon">✅</span>
            <div className="cons-stat">FSC &amp; NEMA</div>
            <div className="cons-title">Certified supply chain</div>
            <p className="cons-desc">Our suppliers meet FSC and NEMA certification standards. Every piece is traceable to a responsibly managed, audited source — no exceptions.</p>
          </div>
          <div className="conservation-card rv rv-d3">
            <span className="cons-icon">♻️</span>
            <div className="cons-stat">Zero waste</div>
            <div className="cons-title">Off-cuts repurposed</div>
            <p className="cons-desc">Milling off-cuts and sawdust are repurposed as biomass, mulch, and reclaimed wood products. Nothing that enters our yard leaves as landfill.</p>
          </div>
        </div>
      </section>

      {/* ════════ TESTIMONIALS ════════ */}
      <section className="section-testimonials">
        <div className="tag rv">What Clients Say</div>
        <h2 className="s-title rv">Trusted by builders<br /><span>across the region</span></h2>

        <div className="testi-featured rv">
          <div className="testi-featured-quote">&ldquo;</div>
          <div className="testi-featured-stars">★★★★★</div>
          <p className="testi-featured-text">
            &ldquo;MY WOOD have been our go-to supplier for three years running. The quality is consistently excellent, their stock availability is unmatched, and the team actually knows their product. When we had a critical shortage on a large residential project, they had the material ready same-day. That&apos;s the kind of partner you need.&rdquo;
          </p>
          <div className="testi-featured-author">
            <div className="tfa-avatar">MH</div>
            <div>
              <div className="tfa-name">Michael Henderson</div>
              <div className="tfa-role">Director, Henderson Building Co.</div>
            </div>
          </div>
        </div>

        <div className="testi-cards-grid">
          <div className="testi-card rv">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">&ldquo;Finally found a timber yard that actually has what they say they have in stock. No substitutions, no waiting — exactly what we ordered, ready when promised.&rdquo;</p>
            <div className="testi-author">
              <div className="testi-avatar tav2">SR</div>
              <div>
                <div className="testi-name">Sarah R.</div>
                <div className="testi-role">Site Manager, Redwood Developments</div>
              </div>
            </div>
          </div>

          <div className="testi-card rv rv-d1">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">&ldquo;The custom milling service saved our project timeline. They turned around a non-standard profile in 48 hours when every other yard said 2–3 weeks. Genuinely impressive.&rdquo;</p>
            <div className="testi-author">
              <div className="testi-avatar tav3">KP</div>
              <div>
                <div className="testi-name">Kevin P.</div>
                <div className="testi-role">Carpenter &amp; Joiner, KP Carpentry</div>
              </div>
            </div>
          </div>

          <div className="testi-card rv rv-d2">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">&ldquo;Great people, great product. I&apos;ve been buying hardwood flooring from MY WOOD for years and the consistent quality is what keeps me coming back. My clients always comment on it.&rdquo;</p>
            <div className="testi-author">
              <div className="testi-avatar tav1">AL</div>
              <div>
                <div className="testi-name">Anna L.</div>
                <div className="testi-role">Interior Designer, Studio Larch</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ SOCIAL FOLLOW STRIP ════════ */}
      <section className="social-strip">
        <div className="tag rv">Follow Our Journey</div>
        <h2 className="social-strip-title rv">See timber come to <span>life</span></h2>
        <p className="social-strip-sub rv">Watch builds, yard tours, and DIY tips — follow MY WOOD on your favourite platform.</p>
        <div className="social-btns-row rv">
          <a href="https://www.facebook.com/p/MY-WOOD-timber-co-100095389981604/" target="_blank" rel="noopener noreferrer" className="social-pill sp-fb">
            <span className="social-pill-icon">f</span> Facebook
          </a>
          <a href="https://www.tiktok.com/@mywoodtimberco" target="_blank" rel="noopener noreferrer" className="social-pill sp-tt">
            <span className="social-pill-icon">▶</span> TikTok
          </a>
          <a href="https://wa.me/254708353465" target="_blank" rel="noopener noreferrer" className="social-pill sp-wa">
            <span className="social-pill-icon">💬</span> WhatsApp Us
          </a>
        </div>
      </section>

      {/* ════════ DIY BUILDERS ════════ */}
      <section className="section-diy">
        <div>
          <div className="tag rv">For the DIY Builder</div>
          <h2 className="s-title rv">Your timber project<br /><span>starts here</span></h2>
          <p className="s-sub rv">Whether it&apos;s your first deck or your tenth fence, our team will walk you through every step — materials, quantities, and technique.</p>
          <div style={{ marginTop: '2.5rem' }}>
            <div className="diy-step rv">
              <div className="diy-step-num">1</div>
              <div className="diy-step-body">
                <div className="diy-step-title">Bring your plan or idea</div>
                <p className="diy-step-desc">No drawing required — a photo, a sketch, or a rough description is enough to get us started.</p>
              </div>
            </div>
            <div className="diy-step rv rv-d1">
              <div className="diy-step-num">2</div>
              <div className="diy-step-body">
                <div className="diy-step-title">We spec the right timber</div>
                <p className="diy-step-desc">Our team selects the right species, grade, and sizes — no over-buying, no under-buying.</p>
              </div>
            </div>
            <div className="diy-step rv rv-d2">
              <div className="diy-step-num">3</div>
              <div className="diy-step-body">
                <div className="diy-step-title">Pick up or get it delivered</div>
                <p className="diy-step-desc">Collect same-day from our yard, or book delivery to your site at a time that suits you.</p>
              </div>
            </div>
            <div className="diy-step rv rv-d3">
              <div className="diy-step-num">4</div>
              <div className="diy-step-body">
                <div className="diy-step-title">Build with confidence</div>
                <p className="diy-step-desc">Call or WhatsApp us any time during your build — we&apos;re here for advice at every stage.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="diy-card rv rv-d1">
          <div className="diy-card-title">Popular DIY Projects</div>
          <ul className="diy-project-list">
            <li><span className="diy-proj-icon">🏡</span> Garden decking &amp; pergolas</li>
            <li><span className="diy-proj-icon">🚧</span> Timber fencing &amp; gates</li>
            <li><span className="diy-proj-icon">🛖</span> Store rooms &amp; garden sheds</li>
            <li><span className="diy-proj-icon">🔩</span> Ceiling &amp; roof boarding</li>
            <li><span className="diy-proj-icon">🪟</span> Door frames &amp; window surrounds</li>
            <li><span className="diy-proj-icon">🌿</span> Raised garden beds</li>
          </ul>
        </div>
      </section>

      {/* ════════ GOOGLE MAP ════════ */}
      <section className="map-section">
        <div className="tag rv">Find Us</div>
        <h2 className="s-title rv">Visit our <span>timber yard</span></h2>

        <div className="map-layout">
          <div className="map-frame-wrap rv">
            <iframe
              src="https://maps.google.com/maps?q=Kiambu+Road+Nairobi+Kenya&t=&z=15&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MY WOOD Timber Co. location"
            />
          </div>

          <div className="map-hours-card rv rv-d1">
            <div className="map-hours-title">Trading Hours</div>
            {[
              ['Monday', '7:00 am – 5:00 pm'],
              ['Tuesday', '7:00 am – 5:00 pm'],
              ['Wednesday', '7:00 am – 5:00 pm'],
              ['Thursday', '7:00 am – 5:00 pm'],
              ['Friday', '7:00 am – 5:00 pm'],
              ['Saturday', '8:00 am – 12:00 pm'],
              ['Sunday', 'Closed'],
            ].map(([day, time]) => (
              <div key={day} className="hours-row">
                <span className="hours-day">{day}</span>
                <span className={`hours-time${time === 'Closed' ? ' closed' : ''}`}>{time}</span>
              </div>
            ))}
            <div className="map-address">
              <div className="map-address-label">Address</div>
              <div className="map-address-val">
                Kiambu Road<br />
                Nairobi, Kenya
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ CTA BAND ════════ */}
      <section className="cta-band">
        <div className="cta-band-inner">
          <div className="tag rv">Get Started</div>
          <h2 className="cta-band-title rv">Ready to start your<br /><span>next project?</span></h2>
          <p className="cta-band-sub rv">
            Talk to our team today. Whether you need a quote, advice on species selection, or you&apos;re ready to order — we&apos;re here to help.
          </p>
          <Link href="/contact" className="cta-band-btn rv">Get a Free Quote →</Link>
        </div>
      </section>
    </>
  )
}
