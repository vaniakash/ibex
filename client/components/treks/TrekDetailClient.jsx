'use client';

import { useState } from 'react';
import Image from 'next/image';

const TABS = ['Overview', 'Itinerary', 'Inclusions', 'Gallery', 'Reviews'];

const SAMPLE_REVIEWS = [
  { name: 'Rahul S.', rating: 5, date: 'Dec 2023', text: 'Absolutely incredible. The guide knew every step of the way and made us feel completely safe.' },
  { name: 'Ananya K.', rating: 5, date: 'Jan 2024', text: 'Worth every rupee. The campsite food alone was worth it. Would do it again in a heartbeat.' },
  { name: 'Priya M.', rating: 4, date: 'Nov 2023', text: 'Tough but rewarding. The summit view is unforgettable.' },
];

function ElevationChart({ data }) {
  if (!data || data.length < 2) return null;

  const maxAlt = Math.max(...data.map(d => d.altM));
  const minAlt = Math.min(...data.map(d => d.altM));
  const maxKm = Math.max(...data.map(d => d.km));
  const w = 600;
  const h = 140;
  const padX = 40;
  const padY = 20;

  const cx = (km) => padX + ((km / maxKm) * (w - padX * 2));
  const cy = (alt) => h - padY - ((alt - minAlt) / (maxAlt - minAlt)) * (h - padY * 2);

  const points = data.map(d => `${cx(d.km)},${cy(d.altM)}`).join(' ');
  const areaPath = `M${cx(data[0].km)},${h - padY} ` +
    data.map(d => `L${cx(d.km)},${cy(d.altM)}`).join(' ') +
    ` L${cx(data[data.length - 1].km)},${h - padY} Z`;

  return (
    <div className="elevation-wrap">
      <svg viewBox={`0 0 ${w} ${h}`} className="elevation-svg" aria-label={`Elevation profile — max altitude ${maxAlt}m`} role="img">
        <defs>
          <linearGradient id="elevGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c8602a" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#c8602a" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill="url(#elevGrad)" />
        <polyline points={points} fill="none" stroke="#c8602a" strokeWidth="2" strokeLinejoin="round" />
        {data.map((d, i) => (
          <circle key={i} cx={cx(d.km)} cy={cy(d.altM)} r="3" fill="#c8602a" />
        ))}
        {/* Labels */}
        <text x={padX} y={h - 4} fill="#8a7a65" fontSize="9" fontFamily="IBM Plex Mono">0km</text>
        <text x={w - padX} y={h - 4} fill="#8a7a65" fontSize="9" fontFamily="IBM Plex Mono" textAnchor="end">{maxKm}km</text>
        <text x={padX} y={padY - 4} fill="#8a7a65" fontSize="9" fontFamily="IBM Plex Mono">{maxAlt}m</text>
        <text x={padX} y={h - padY + 2} fill="#8a7a65" fontSize="9" fontFamily="IBM Plex Mono">{minAlt}m</text>
      </svg>
      <div className="elevation-labels">
        <span className="mono-label">ELEVATION PROFILE</span>
        <span className="mono-label">MAX: {maxAlt}M · {Math.round(maxAlt * 3.281)}FT</span>
      </div>
    </div>
  );
}

export default function TrekDetailClient({ trek }) {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <>
      {/* TABS */}
      <div className="tabs" role="tablist" aria-label="Trek details tabs">
        {TABS.map(tab => (
          <button
            key={tab}
            role="tab"
            aria-selected={activeTab === tab}
            onClick={() => setActiveTab(tab)}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            id={`tab-${tab.toLowerCase()}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      <div className="tab-content" role="tabpanel" aria-labelledby={`tab-${activeTab.toLowerCase()}`}>

        {/* OVERVIEW */}
        {activeTab === 'Overview' && (
          <div className="tab-overview">
            <p className="trek-description">{trek.description}</p>
            <ElevationChart data={trek.elevationProfile} />
            <div className="highlights">
              <h3 className="highlights-title">Highlights</h3>
              <ul className="highlights-list">
                {trek.highlights.map((h, i) => (
                  <li key={i} className="highlight-item">
                    <span className="highlight-dot" aria-hidden="true">◆</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            {trek.bestSeason?.length > 0 && (
              <div className="best-season">
                <h3 className="highlights-title">Best Season</h3>
                <div className="season-pills">
                  {trek.bestSeason.map(s => (
                    <span key={s} className="pill pill-stone">{s}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ITINERARY */}
        {activeTab === 'Itinerary' && (
          <div className="itinerary">
            {trek.itinerary.map((day, i) => (
              <div key={i} className="itinerary-day">
                <div className="itinerary-day-header">
                  <div className="itinerary-icon" aria-hidden="true">⛺</div>
                  <div>
                    <span className="mono-label" style={{ color: 'var(--color-amber)' }}>DAY {day.day}</span>
                    <h3 className="itinerary-title">{day.title}</h3>
                  </div>
                  {day.campAltitude > 0 && (
                    <span className="mono-label itinerary-alt">{day.campAltitude}m CAMP</span>
                  )}
                </div>
                <p className="itinerary-desc">{day.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* INCLUSIONS */}
        {activeTab === 'Inclusions' && (
          <div className="inclusions-grid">
            <div>
              <h3 className="highlights-title" style={{ color: 'var(--color-moss)' }}>✓ Included</h3>
              <ul className="check-list">
                {trek.inclusions.map((item, i) => (
                  <li key={i} className="check-item check-yes">
                    <span style={{ color: 'var(--color-moss)' }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="highlights-title" style={{ color: '#8b2500' }}>✗ Not Included</h3>
              <ul className="check-list">
                {trek.exclusions.map((item, i) => (
                  <li key={i} className="check-item check-no">
                    <span style={{ color: '#8b2500' }}>✗</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* GALLERY */}
        {activeTab === 'Gallery' && (
          <div className="gallery-grid">
            {[...trek.images, ...trek.images, ...trek.images].slice(0, 6).map((img, i) => (
              <div key={i} className="gallery-item">
                <Image
                  src={img.url}
                  alt={img.caption || trek.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 30vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        )}

        {/* REVIEWS */}
        {activeTab === 'Reviews' && (
          <div className="reviews">
            <div className="reviews-summary">
              <span className="review-avg">{trek.avgRating}</span>
              <div>
                <div className="stars" aria-label={`${trek.avgRating} out of 5`}>
                  {'★'.repeat(Math.round(trek.avgRating))}
                </div>
                <span className="mono-label" style={{ fontSize: '0.68rem', color: 'var(--color-stone-light)' }}>AVERAGE RATING</span>
              </div>
            </div>
            <div className="reviews-list">
              {SAMPLE_REVIEWS.map((r, i) => (
                <div key={i} className="review-card">
                  <div className="review-header">
                    <div>
                      <strong className="review-name">{r.name}</strong>
                      <span className="mono-label review-date">{r.date}</span>
                    </div>
                    <span className="stars review-stars">{'★'.repeat(r.rating)}</span>
                  </div>
                  <p className="review-text">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      
    </>
  );
}
