'use client';

import { useState } from 'react';
import BlogCard from '@/components/ui/BlogCard';

export default function BlogListingClient({ posts, categories }) {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? posts : posts.filter(p => p.category === active);

  return (
    <section className="blog-grid-section section-padding" aria-label="Blog articles">
      <div className="container">
        {/* Category Filter */}
        <div className="cat-filter" role="group" aria-label="Filter by category">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`cat-pill ${active === cat ? 'active' : ''}`}
              aria-pressed={active === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        {filtered.length === 0 ? (
          <p className="no-posts">No posts in this category yet.</p>
        ) : (
          <div className="grid-3 blog-grid">
            {filtered.map((post, i) => (
              <BlogCard key={post._id} post={post} priority={i === 0} />
            ))}
          </div>
        )}
      </div>

      
    </section>
  );
}
