import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ post, priority = false }) {
  const { slug, title, category, excerpt, image, author, readTime, publishedAt } = post;

  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
    : '';

  return (
    <Link href={`/blog/${slug}`} className="blog-card" title={title}>
      <div className="blog-card__image-wrap">
        <Image
          src={image || '/images/blog/gear-review.jpg'}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="blog-card__body">
        <span className="pill pill-amber" style={{ fontSize: '0.65rem', alignSelf: 'flex-start' }}>
          {category}
        </span>
        <h3 className="blog-card__title">{title}</h3>
        <p className="blog-card__excerpt">{excerpt}</p>
        <div className="blog-card__meta">
          <span>{author?.name}</span>
          <span>·</span>
          <span>{formattedDate}</span>
          <span>·</span>
          <span>{readTime}</span>
        </div>
      </div>
    </Link>
  );
}
