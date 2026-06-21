import Link from 'next/link';
import Image from 'next/image';
import './Footer.css';

const QUICK_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/treks', label: 'All Treks' },
  { href: '/about', label: 'About Us' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const POPULAR_TREKS = [
  { href: '/treks/kedarkantha', label: 'Kedarkantha' },
  { href: '/treks/valley-of-flowers', label: 'Valley of Flowers' },
  { href: '/treks/hampta-pass', label: 'Hampta Pass' },
  { href: '/treks/roopkund', label: 'Roopkund' },
  { href: '/treks/chadar-trek', label: 'Chadar Trek' },
  { href: '/treks/goechala', label: 'Goechala' },
];

export default function Footer() {
  return (
    <footer className="footer topo-bg" aria-label="Site footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1 — Brand */}
          <div className="footer-col footer-brand">
            <Link href="/" className="footer-logo" aria-label="IBEX Trekking">
              <Image
                src="/assets/ibex-horn.svg"
                alt=""
                width={16}
                height={20}
                className="footer-logo-icon"
                aria-hidden="true"
              />
              <span className="footer-logo-word">IBEX</span>
            </Link>
            <p className="footer-tagline">
              Hand-crafted expeditions in the Indian Himalayas — since 2014.
            </p>
            <div className="footer-social">
              <a href="https://instagram.com/ibextrekking" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-link">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://facebook.com/ibextrekking" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-social-link">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="https://youtube.com/@ibextrekking" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer-social-link">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="footer-col">
            <h3 className="footer-col-title">Quick Links</h3>
            <ul className="footer-links">
              {QUICK_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="footer-link">{label}</Link>
                </li>
              ))}
              <li>
                <Link href="/dashboard" className="footer-link">My Bookings</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Popular Treks */}
          <div className="footer-col">
            <h3 className="footer-col-title">Popular Treks</h3>
            <ul className="footer-links">
              {POPULAR_TREKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="footer-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div className="footer-col">
            <h3 className="footer-col-title">Get in Touch</h3>
            <ul className="footer-contact">
              <li className="footer-contact-item">
                <svg className="footer-contact-icon" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                <a href="tel:+918126000000" className="footer-contact-link">+91 81260 00000</a>
              </li>
              <li className="footer-contact-item">
                <svg className="footer-contact-icon" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <a href="mailto:hello@ibextrekking.com" className="footer-contact-link">hello@ibextrekking.com</a>
              </li>
              <li className="footer-contact-item">
                <svg className="footer-contact-icon" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>42, Rajpur Road, Dehradun<br/>Uttarakhand 248001</span>
              </li>
              <li className="footer-contact-item">
                <svg className="footer-contact-icon" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span className="mono-label" style={{ fontSize: '0.7rem', letterSpacing: '0.08em' }}>MON–SAT · 9AM–7PM IST</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="footer-bottom">
          <span className="footer-copyright mono-label">
            © {new Date().getFullYear()} IBEX Trekking Pvt. Ltd. — All rights reserved
          </span>
          <div className="footer-legal">
            <Link href="/privacy" className="footer-legal-link">Privacy Policy</Link>
            <Link href="/terms" className="footer-legal-link">Terms</Link>
            <Link href="/refund" className="footer-legal-link">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
