import { Suspense } from 'react';
import { BLOG_POSTS, BLOG_CATEGORIES, FEATURED_POST } from '@/lib/blog-data';
import BlogListingClient from '@/components/blog/BlogListingClient';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Stories from the hills',
  description: 'Gear reviews, route guides, trekker diaries, conservation stories and safety tips from the IBEX team and community.',
};

export default function BlogPage() {
  return (
    <>
      {/* HERO — minimal, no image */}
      <section className="blog-hero" aria-label="Blog hero">
        <div className="container">
          <span className="mono-label blog-hero-label">THE IBEX JOURNAL</span>
          <h1 className="headline-display blog-hero-heading">
            Stories from the hills.
          </h1>
          <p className="blog-hero-sub">
            Gear reviews, route guides, trekker diaries, conservation stories and trail safety — from the people who actually live this.
          </p>
        </div>
      </section>

      {/* FEATURED POST */}
      {FEATURED_POST && (
        <section className="section-padding" style={{ background: 'var(--color-snow)', paddingTop: '2rem' }} aria-label="Featured article">
          <div className="container">
            <span className="section-label">FEATURED STORY</span>
            <Link href={`/blog/${FEATURED_POST.slug}`} className="featured-card">
              <div className="featured-image">
                <Image
                  src={FEATURED_POST.image}
                  alt={FEATURED_POST.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="featured-body">
                <span className="pill pill-amber featured-cat">{FEATURED_POST.category}</span>
                <h2 className="featured-title">{FEATURED_POST.title}</h2>
                <p className="featured-excerpt">{FEATURED_POST.excerpt}</p>
                <div className="featured-meta">
                  <Image
                    src={FEATURED_POST.author.avatar}
                    alt={FEATURED_POST.author.name}
                    width={32}
                    height={32}
                    style={{ borderRadius: '50%', objectFit: 'cover', filter: 'grayscale(1)' }}
                  />
                  <span className="mono-label featured-author">{FEATURED_POST.author.name}</span>
                  <span className="featured-sep">·</span>
                  <span className="mono-label featured-read">{FEATURED_POST.readTime}</span>
                </div>
                <span className="featured-link">Read Article →</span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* BLOG GRID + FILTER */}
      <Suspense fallback={<div className="container section-padding" style={{textAlign:'center'}}>Loading stories...</div>}>
        <BlogListingClient posts={BLOG_POSTS.filter(p => !p.featured)} categories={BLOG_CATEGORIES} />
      </Suspense>

      
    </>
  );
}
