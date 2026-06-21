import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '@/lib/blog-data';
import Image from 'next/image';
import Link from 'next/link';
import BlogPostClient from '@/components/blog/BlogPostClient';

export const revalidate = 3600;

export async function generateStaticParams() {
  return BLOG_POSTS.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      images: [{ url: post.image, width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title: post.title, images: [post.image] },
  };
}

export default function BlogPostPage({ params }) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug);
  if (!post) notFound();

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  return (
    <article style={{ paddingTop: '72px' }}>
      {/* POST HERO */}
      <div className="post-hero">
        <div className="container post-container">
          <nav className="breadcrumb" aria-label="Breadcrumb" style={{ marginBottom: '1.5rem' }}>
            <Link href="/blog" className="breadcrumb-link">Blog</Link>
            <span> › </span>
            <span className="pill pill-amber" style={{ fontSize: '0.65rem' }}>{post.category}</span>
          </nav>
          <h1 className="headline-display post-title">{post.title}</h1>
          <div className="post-meta">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={40}
              height={40}
              style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
            <div>
              <span className="post-author">{post.author.name}</span>
              <div className="post-meta-sub">
                <span className="mono-label">{formattedDate}</span>
                <span className="meta-sep">·</span>
                <span className="mono-label">{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HERO IMAGE */}
      <div className="post-image-wrap">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="container post-container">
        <p className="post-image-caption mono-label">{post.title} — Photo: IBEX Archive</p>
      </div>

      {/* POST CONTENT + TOC */}
      <BlogPostClient post={post} />

      
    </article>
  );
}
