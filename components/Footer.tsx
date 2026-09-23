import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <div className="cert-strip">
        <div className="cert-badge">
          <span className="cert-badge-icon">🏅</span>
          <span>KEBS Compliant</span>
        </div>
        <div className="cert-badge">
          <span className="cert-badge-icon">🌿</span>
          <span>FSC Responsible Sourcing</span>
        </div>
        <div className="cert-badge">
          <span className="cert-badge-icon">✓</span>
          <span>Quality Guaranteed</span>
        </div>
      </div>
      <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo-wrap">
            <div className="footer-logo-icon">🪵</div>
            <div className="footer-logo-text">MY <span>WOOD</span></div>
          </div>
          <p>Premium timber sourced and supplied with precision. Your complete timber partner.</p>
          <div className="footer-social">
            <a href="https://www.facebook.com/p/MY-WOOD-timber-co-100095389981604/" target="_blank" rel="noopener noreferrer" className="social-btn" title="Facebook">f</a>
            <a href="https://www.tiktok.com/@mywoodtimberco" target="_blank" rel="noopener noreferrer" className="social-btn" title="TikTok">tt</a>
            <a href="https://wa.me/254708353465" target="_blank" rel="noopener noreferrer" className="social-btn" title="WhatsApp">w</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Products</h4>
          <ul>
            <li><Link href="/products">Structural Timber</Link></li>
            <li><Link href="/products">Hardwood Flooring</Link></li>
            <li><Link href="/products">Decking Timber</Link></li>
            <li><Link href="/products">Cladding &amp; Siding</Link></li>
            <li><Link href="/products">Plywood &amp; Sheet Goods</Link></li>
            <li><Link href="/products">Treated Timber</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><Link href="/services">Wholesale Supply</Link></li>
            <li><Link href="/services">Custom Milling</Link></li>
            <li><Link href="/services">Timber Consulting</Link></li>
            <li><Link href="/services">Site Delivery</Link></li>
            <li><Link href="/services">Retail Counter</Link></li>
            <li><Link href="/services">Project Estimating</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/timber-guide">Timber Guide</Link></li>
            <li><Link href="/reviews">Reviews</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">&copy; 2025 MY WOOD Timber Co. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
    </>
  )
}
