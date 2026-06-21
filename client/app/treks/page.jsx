import Image from 'next/image';
import { Suspense } from 'react';
import { TREKS } from '@/lib/treks-data';
import TrekGrid from '@/components/treks/TrekGrid';

export const metadata = {
  title: 'Find Your Trek',
  description:
    'Browse all 8 IBEX treks across Uttarakhand, Himachal Pradesh, Sikkim and Ladakh. Filter by region, difficulty, and duration.',
};

export default function TreksPage() {
  return (
    <>
      {/* HERO */}
      <section className="treks-hero" aria-label="Treks page hero">
        <div className="treks-hero-bg">
          <Image
            src="/images/treks/kedarkantha.jpg"
            alt="Himalayan ridge with trekkers"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
          />
          <div className="treks-hero-overlay" />
        </div>
        <div className="treks-hero-content container">
          <span className="mono-label treks-hero-label">48 ROUTES · ALL SKILL LEVELS</span>
          <h1 className="headline-display treks-hero-heading">Find Your Trek</h1>
        </div>
      </section>

      {/* FILTER BAR + GRID */}
      <Suspense fallback={<div className="container section-padding" style={{textAlign:'center'}}>Loading treks...</div>}>
        <TrekGrid allTreks={TREKS} />
      </Suspense>
    </>
  );
}
