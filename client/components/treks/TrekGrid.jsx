'use client';

import { useState, useCallback, useTransition } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import TrekCard from '@/components/ui/TrekCard';

const REGIONS = ['All', 'Uttarakhand', 'Himachal Pradesh', 'Sikkim', 'Ladakh'];
const DIFFICULTIES = ['All', 'Easy', 'Moderate', 'Hard', 'Extreme'];

export default function TrekGrid({ allTreks }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [region, setRegion] = useState(searchParams.get('region') || 'All');
  const [difficulty, setDifficulty] = useState(searchParams.get('difficulty') || 'All');
  const [search, setSearch] = useState(searchParams.get('q') || '');
  const [, startTransition] = useTransition();

  const updateURL = useCallback((r, d, q) => {
    const params = new URLSearchParams();
    if (r && r !== 'All') params.set('region', r);
    if (d && d !== 'All') params.set('difficulty', d);
    if (q) params.set('q', q);
    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    });
  }, [pathname, router]);

  const handleRegion = (r) => { setRegion(r); updateURL(r, difficulty, search); };
  const handleDifficulty = (d) => { setDifficulty(d); updateURL(region, d, search); };
  const handleSearch = (q) => { setSearch(q); updateURL(region, difficulty, q); };
  const clearAll = () => { setRegion('All'); setDifficulty('All'); setSearch(''); router.push(pathname, { scroll: false }); };

  // Active filters
  const activeFilters = [
    region !== 'All' && { key: 'region', label: region },
    difficulty !== 'All' && { key: 'difficulty', label: difficulty },
    search && { key: 'q', label: `"${search}"` },
  ].filter(Boolean);

  // Filter treks
  const filtered = allTreks.filter(t => {
    if (region !== 'All' && t.region !== region) return false;
    if (difficulty !== 'All' && t.difficulty !== difficulty) return false;
    if (search && !t.name.toLowerCase().includes(search.toLowerCase()) && !t.region.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <>
      {/* FILTER BAR */}
      <div className="filter-bar-wrap">
        <div className="filter-bar container">
          {/* Region Dropdown */}
          <div className="filter-group">
            <label htmlFor="region-select" className="filter-label">Region</label>
            <select
              id="region-select"
              value={region}
              onChange={e => handleRegion(e.target.value)}
              className="filter-select"
            >
              {REGIONS.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>

          {/* Difficulty Pills */}
          <div className="filter-group">
            <span className="filter-label">Difficulty</span>
            <div className="filter-pills" role="group" aria-label="Filter by difficulty">
              {DIFFICULTIES.map(d => (
                <button
                  key={d}
                  onClick={() => handleDifficulty(d)}
                  className={`filter-pill ${difficulty === d ? 'active' : ''}`}
                  aria-pressed={difficulty === d}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Search */}
          <div className="filter-group filter-search-group">
            <label htmlFor="trek-search" className="filter-label">Search</label>
            <div className="filter-search-wrap">
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              <input
                id="trek-search"
                type="search"
                placeholder="Search treks…"
                value={search}
                onChange={e => handleSearch(e.target.value)}
                className="filter-search"
                autoComplete="off"
              />
            </div>
          </div>
        </div>

        {/* Active filter pills */}
        {activeFilters.length > 0 && (
          <div className="active-filters container">
            <span className="mono-label" style={{ fontSize: '0.65rem', color: 'var(--color-stone)' }}>ACTIVE:</span>
            {activeFilters.map(f => (
              <span key={f.key} className="active-filter-pill">
                {f.label}
              </span>
            ))}
            <button onClick={clearAll} className="clear-btn">Clear all</button>
          </div>
        )}
      </div>

      {/* TREK GRID */}
      <section className="treks-section section-padding" aria-label="Trek listings">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="no-results">
              <p className="headline-italic" style={{ fontSize: '1.5rem', color: 'var(--color-stone)' }}>No treks match your filters.</p>
              <button onClick={clearAll} className="btn btn-ghost-amber" style={{ marginTop: '1rem' }}>Clear filters</button>
            </div>
          ) : (
            <>
              <p className="results-count mono-label">
                {filtered.length} {filtered.length === 1 ? 'TREK' : 'TREKS'} FOUND
              </p>
              <div className="grid-3 treks-grid">
                {filtered.map((trek, i) => (
                  <TrekCard key={trek._id} trek={trek} priority={i < 3} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      
    </>
  );
}
