import Image from 'next/image';
import { notFound } from 'next/navigation';
import { TREKS, TREKS_MAP } from '@/lib/treks-data';
import TrekDetailClient from '@/components/treks/TrekDetailClient';
import Link from 'next/link';

export const revalidate = 3600;

export async function generateStaticParams() {
  return TREKS.map(t => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  const trek = TREKS_MAP[params.slug];
  if (!trek) return {};
  return {
    title: trek.name,
    description: trek.shortDesc,
    openGraph: {
      title: `${trek.name} Trek | IBEX`,
      description: trek.shortDesc,
      images: [{ url: trek.images[0]?.url, width: 1200, height: 800 }],
    },
  };
}

export default function TrekDetailPage({ params }) {
  const trek = TREKS_MAP[params.slug];
  if (!trek) notFound();

  return (
    <>
      <div className="detail-layout" style={{ paddingTop: '72px' }}>
        {/* LEFT CONTENT */}
        <div className="detail-left">
          {/* Hero image */}
          <div className="detail-hero-img">
            <Image
              src={trek.images[0]?.url || '/images/treks/kedarkantha.jpg'}
              alt={trek.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 65vw"
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Breadcrumb */}
          <div className="container" style={{ marginTop: '1.5rem' }}>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/" className="breadcrumb-link">Home</Link>
              <span className="breadcrumb-sep">›</span>
              <Link href="/treks" className="breadcrumb-link">Treks</Link>
              <span className="breadcrumb-sep">›</span>
              <span className="breadcrumb-current">{trek.name}</span>
            </nav>

            <div className="detail-header">
              <div>
                <span className="mono-label" style={{ color: 'var(--color-amber)' }}>{trek.region} · {trek.state}</span>
                <h1 className="headline-display detail-title">{trek.name}</h1>
              </div>
              <span className={`pill pill-${trek.difficulty.toLowerCase()} detail-diff-pill`}>
                {trek.difficulty}
              </span>
            </div>

            {/* Tabs + content */}
            <TrekDetailClient trek={trek} />
          </div>
        </div>

        {/* RIGHT — Sticky Booking Card */}
        <aside className="detail-right" aria-label="Booking">
          <div className="booking-card">
            <div className="booking-price-row">
              <span className="mono-label" style={{ color: 'rgba(245,240,232,0.55)', fontSize: '0.7rem' }}>FROM</span>
              <span className="booking-price">₹{trek.price.toLocaleString()}</span>
              <span className="mono-label" style={{ color: 'rgba(245,240,232,0.55)', fontSize: '0.68rem' }}>/ PERSON</span>
            </div>

            <div className="booking-stats">
              <div className="booking-stat">
                <span className="mono-label">DURATION</span>
                <span>{trek.duration} Days</span>
              </div>
              <div className="booking-stat">
                <span className="mono-label">MAX ALT</span>
                <span>{trek.maxAltitude}m</span>
              </div>
              <div className="booking-stat">
                <span className="mono-label">DIFFICULTY</span>
                <span>{trek.difficulty}</span>
              </div>
            </div>

            <div className="booking-form">
              <div className="form-group">
                <label htmlFor="trek-date" className="form-label" style={{ color: 'rgba(245,240,232,0.7)' }}>Preferred Date</label>
                <input type="date" id="trek-date" className="form-input booking-input" />
              </div>
              <div className="form-group">
                <label htmlFor="group-size" className="form-label" style={{ color: 'rgba(245,240,232,0.7)' }}>Group Size</label>
                <select id="group-size" className="form-input booking-input">
                  {[1,2,3,4,5,6,7,8,9,10,11,12].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'People'}</option>
                  ))}
                </select>
              </div>
              <button className="btn btn-amber btn-full booking-cta" id={`book-now-${trek.slug}`}>
                Book Now →
              </button>
              <p className="booking-microcopy">Secure booking · 30% advance · Easy cancellation</p>
            </div>

            <div className="booking-contact">
              <a href="https://wa.me/918126000000" target="_blank" rel="noopener noreferrer" className="booking-wa">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Ask on WhatsApp
              </a>
              <a href="tel:+918126000000" className="booking-call">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                Call us
              </a>
            </div>
          </div>
        </aside>
      </div>

      
    </>
  );
}
