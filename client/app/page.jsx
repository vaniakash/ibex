import Image from 'next/image';
import Link from 'next/link';
import TrekCard from '@/components/ui/TrekCard';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import NewsletterForm from '@/components/home/NewsletterForm';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { FEATURED_TREKS } from '@/lib/treks-data';

export const metadata = {
  title: 'IBEX — Hand-crafted Himalayan Treks Since 2014',
  description:
    'Trek Where Few Dare. IBEX offers premium guided expeditions in the Indian Himalayas — Uttarakhand, Himachal, Sikkim & Ladakh. Small groups, certified guides.',
};

const STATS = [
  { value: '12,000+', label: 'Trekkers Led' },
  { value: '48', label: 'Himalayan Routes' },
  { value: '10', label: 'Years Experience' },
  { value: '100%', label: 'Safety Record' },
];

const WHY_IBEX = [
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="#c8602a" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Small Groups Only',
    desc: 'Maximum 12 trekkers per group — never a crowd, always a community. Your guide knows every member by name before you summit.',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="#c8602a" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    title: 'Certified Guides',
    desc: 'Every guide holds HMI or NIMAS certification. Wilderness First Responder trained, locally rooted.',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="#c8602a" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Leave No Trace',
    desc: 'We carry out every piece of waste — including other groups. Biodegradable waste stations at every campsite. Zero single-use plastic.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero" aria-label="Hero section">
        <div className="hero-image-wrap">
          <Image
            src="/images/hero.jpg"
            alt="Himalayan mountain ridge at golden hour"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
          />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-topo" aria-hidden="true" />
        </div>

        <div className="hero-content container">
          <div className="hero-text">
            <p className="mono-label hero-label">IBEX TREKKING — SINCE 2014</p>
            <h1 className="headline-display hero-headline">
              Trek Where<br />Few Dare.
            </h1>
            <p className="hero-sub">
              Hand-crafted expeditions in the Indian Himalayas — certified guides, small groups, zero trace.
            </p>
            <div className="hero-ctas">
              <Link href="/treks" className="btn btn-amber btn-lg" id="hero-explore-btn">
                Explore Treks
              </Link>
              <a href="#our-story" className="btn btn-ghost-white btn-lg" id="hero-story-btn">
                Our Story
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="stats-band" aria-label="Key statistics">
        <div className="container">
          <div className="stats-grid">
            {STATS.map(({ value, label }, i) => (
              <div key={label} className="stat-item">
                <span className="stat-value headline-display">{value}</span>
                <span className="stat-label mono-label">{label}</span>
                {i < STATS.length - 1 && <div className="stat-divider" aria-hidden="true" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED TREKS */}
      <section className="section-padding" style={{ background: 'var(--color-snow)' }} aria-label="Featured treks">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">HANDPICKED ROUTES</span>
            <h2 className="section-heading" style={{ fontSize: 'var(--text-5xl)', marginBottom: '3rem' }}>
              Our Signature Treks
            </h2>
          </ScrollReveal>
          <div className="grid-3">
            {FEATURED_TREKS.map((trek, i) => (
              <ScrollReveal key={trek._id} delay={i * 0.1}>
                <TrekCard trek={trek} priority={i === 0} />
              </ScrollReveal>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/treks" className="btn btn-ghost-amber btn-lg" id="view-all-treks-btn">
              View All 8 Treks →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY IBEX */}
      <section
        id="our-story"
        className="topo-bg section-padding"
        style={{ background: 'var(--color-forest)' }}
        aria-label="Why choose IBEX"
      >
        <div className="container">
          <div className="why-grid">
            <ScrollReveal className="why-left">
              <h2 className="headline-italic why-heading">
                We don&apos;t run treks.<br />We craft them.
              </h2>
              <p className="why-intro">
                Every route, campsite, rest day, and meal is chosen because it makes for a better journey — not because it&apos;s cheaper. A decade in the Himalayas teaches you which corners not to cut.
              </p>
              <Link href="/about" className="btn btn-amber" id="our-story-link">
                Our Full Story →
              </Link>
            </ScrollReveal>
            <div className="why-right">
              {WHY_IBEX.map(({ icon, title, desc }, i) => (
                <ScrollReveal key={title} delay={i * 0.12} className="why-block">
                  <div className="why-icon">{icon}</div>
                  <div>
                    <h3 className="why-block-title">{title}</h3>
                    <p className="why-block-desc">{desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding" style={{ background: 'var(--color-snow)' }} aria-label="Testimonials">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">TREKKER STORIES</span>
            <h2 className="section-heading" style={{ fontSize: 'var(--text-5xl)', marginBottom: '2rem' }}>
              From the trail.
            </h2>
          </ScrollReveal>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter" aria-label="Newsletter subscription">
        <div className="container">
          <ScrollReveal>
            <h2 className="headline-display newsletter-heading">
              Get trek updates &amp; early access
            </h2>
            <p className="newsletter-sub">
              New routes, limited slots, and seasonal guides — straight to your inbox.
            </p>
          </ScrollReveal>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
