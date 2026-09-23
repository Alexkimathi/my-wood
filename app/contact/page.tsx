import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — MY WOOD Timber Co.',
}

export default function ContactPage() {
  return (
    <section id="contact" className="page-top">
      <div className="contact-info-card rv">
        <div className="tag">Get in Touch</div>
        <h2 className="s-title" style={{ fontSize: '2rem' }}>Ready to start<br />your project?</h2>
        <p>
          Whether you need a full project quote, want to check stock, or just want expert advice — we&apos;re here to help. Reach out and we&apos;ll get back to you fast.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="contact-detail-row">
            <div className="cdr-icon">📘</div>
            <div>
              <div className="cdr-label">Facebook</div>
              <div className="cdr-val">
                <a
                  href="https://www.facebook.com/p/MY-WOOD-timber-co-100095389981604/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MY WOOD Timber Co. ↗
                </a>
              </div>
            </div>
          </div>
          <div className="contact-detail-row">
            <div className="cdr-icon">🕐</div>
            <div>
              <div className="cdr-label">Trading Hours</div>
              <div className="cdr-val">Mon–Fri: 7:00am – 5:00pm<br />Saturday: 7:00am – 12:00pm</div>
            </div>
          </div>
          <div className="contact-detail-row">
            <div className="cdr-icon">💼</div>
            <div>
              <div className="cdr-label">Trade Accounts</div>
              <div className="cdr-val">Credit facilities &amp; wholesale pricing available for regular clients</div>
            </div>
          </div>
        </div>
      </div>

      <ContactForm />
    </section>
  )
}
